// Bold, italics, highlights, bullets and numbers in lesson text (owner, 2026-11-17: "add bullets and
// numbering in the lessons as well as highlighting [and] italicising important stuff").
// Run with: npm test
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

const { markSegments, marksToTags, stripMarks, marksProblems } = await import('@/data/lesson-marks');
const { parseRich } = await import('@/data/legacy-questions');
const { lessonBody } = await import('@/data/hb2-study');
const { lessonToText } = await import('@/data/ai-study');
const { builtTopics } = await import('@/data/topics');

const lessonTexts = (lesson) =>
  lesson.chunks.flatMap((chunk, index) =>
    [...(chunk.teach ?? []), ...(chunk.paragraphs ?? []), ...(chunk.keyPoints ?? [])].map((text) => ({ where: `${lesson.id} §${index}`, text }))
  );

describe('lesson marks', () => {
  it('split a paragraph into text and lists', () => {
    assert.deepEqual(markSegments('Two reasons:\n1. First one.\n2. Second one.\nSo both matter.'), [
      { kind: 'text', text: 'Two reasons:' },
      { kind: 'list', ordered: true, items: ['First one.', 'Second one.'] },
      { kind: 'text', text: 'So both matter.' },
    ]);
    assert.deepEqual(markSegments('- a\n- b'), [{ kind: 'list', ordered: false, items: ['a', 'b'] }]);
    assert.deepEqual(markSegments('Plain text, no marks.'), [{ kind: 'text', text: 'Plain text, no marks.' }]);
  });

  it('become bold, italic and highlight tags, leaving tags alone', () => {
    assert.equal(marksToTags('**SA node** is *the* ==pacemaker=='), '<b>SA node</b> is <i>the</i> <mark>pacemaker</mark>');
    assert.equal(marksToTags('==the **SA node** fires=='), '<mark>the <b>SA node</b> fires</mark>');
    assert.equal(marksToTags('**<term d="a*b">stroke volume</term>**'), '<b><term d="a*b">stroke volume</term></b>');
    const runs = parseRich(marksToTags('a ==b **c**== d'));
    assert.deepEqual(runs.map((run) => [run.t, !!run.hl, !!run.b]), [['a ', false, false], ['b ', true, false], ['c', true, true], [' d', false, false]]);
  });

  it('come off for plain text', () => {
    assert.equal(stripMarks('Two **reasons**:\n1. *First*.\n2. ==Second==.'), 'Two reasons: First. Second.');
  });

  it('find unclosed marks and stray spaces', () => {
    assert.deepEqual(marksProblems('**fine** and *fine* and ==fine=='), []);
    assert.equal(marksProblems('**open').length, 1);
    assert.equal(marksProblems('== spaced==').length, 1);
    assert.equal(marksProblems('- \n- item').length, 0); // an empty line is skipped
  });

  it('are well formed in every lesson of every topic', () => {
    for (const { topic } of builtTopics) {
      for (const lesson of topic.lessons) {
        for (const { where, text } of lessonTexts(lesson)) assert.deepEqual(marksProblems(text), [], `${where}: "${text.slice(0, 60)}"`);
      }
    }
  });

  it('format every Cardiovascular Physiology section (owner, 2026-11-17)', () => {
    const topic = builtTopics.find(({ topic }) => topic.id === 'cardiovascular-physiology').topic;
    let lists = 0;
    let highlights = 0;
    for (const lesson of topic.lessons) {
      lesson.chunks.forEach((chunk, index) => {
        const text = [...(chunk.teach ?? []), ...(chunk.paragraphs ?? [])].join('\n');
        assert.match(text, /\*\*[^*]+\*\*/, `${lesson.id} §${index} (${chunk.title}): no bold key terms`);
        if (/(^|\n)(- |\d+\. )/.test(text)) lists += 1;
        if (/==/.test(text)) highlights += 1;
      });
    }
    assert.ok(lists >= 60, `only ${lists} sections have a bulleted or numbered list`);
    assert.ok(highlights >= 80, `only ${highlights} sections have a highlighted line`);
  });

  it('reach the HB2 lesson page as tags and lists, and Ask AI as plain text', () => {
    const lesson = builtTopics.find(({ topic }) => topic.id === 'cardiovascular-physiology').topic.lessons[0];
    const blocks = lessonBody(lesson).sections.flatMap((section) => section.blocks);
    const html = JSON.stringify(blocks);
    assert.match(html, /<b>/);
    assert.match(html, /<mark>/);
    assert.ok(blocks.some((block) => block.k === 'ul' && block.ol), 'a numbered list');
    assert.doesNotMatch(html, /\*\*|==/, 'no raw marks on the page');
    const text = lessonToText(lesson);
    assert.doesNotMatch(text, /\*\*|==/, 'no marks in the Ask AI text');
  });
});
