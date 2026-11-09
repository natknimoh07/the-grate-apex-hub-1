// Apex Explained: every video has a real YouTube id, a known subject and sane chapters.
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

const { APEX_SUBJECTS, APEX_VIDEOS, chapterSeconds, embedUrl, isYoutubeId, thumbnailUrl, videosBySubject, watchUrl } = await import('@/data/apex-explained');

describe('Apex Explained videos', () => {
  it('has valid, unique YouTube ids', () => {
    assert.ok(APEX_VIDEOS.length > 0);
    assert.ok(APEX_VIDEOS.every((video) => isYoutubeId(video.id)));
    assert.equal(new Set(APEX_VIDEOS.map((video) => video.id)).size, APEX_VIDEOS.length);
  });
  it('gives every video a known subject, a title and a running time', () => {
    const subjects = new Set(APEX_SUBJECTS.map((subject) => subject.id));
    for (const video of APEX_VIDEOS) {
      assert.ok(subjects.has(video.subject), video.id);
      assert.ok(video.title.trim().length > 0, video.id);
      assert.match(video.length, /^\d{1,2}:\d{2}$/, video.id);
    }
  });
  it('keeps chapters in time order, inside the video', () => {
    for (const video of APEX_VIDEOS) {
      const times = (video.chapters ?? []).map((chapter) => chapterSeconds(chapter.at));
      assert.deepEqual(times, [...times].sort((a, b) => a - b), video.id);
      assert.equal(new Set(times).size, times.length, video.id);
      if (times.length) assert.ok(times[times.length - 1] < chapterSeconds(video.length), video.id);
    }
  });
  it('groups videos by subject and skips empty subjects', () => {
    const groups = videosBySubject();
    assert.ok(groups.every((group) => group.videos.length > 0));
    assert.equal(groups.reduce((total, group) => total + group.videos.length, 0), APEX_VIDEOS.length);
    assert.equal(videosBySubject([]).length, 0);
  });
  it('reads chapter times and builds addresses', () => {
    assert.equal(chapterSeconds('2:37'), 157);
    assert.equal(chapterSeconds('1:02:03'), 3723);
    assert.equal(chapterSeconds('nonsense'), 0);
    assert.equal(isYoutubeId('too-short'), false);
    assert.equal(isYoutubeId(undefined), false);
    assert.match(embedUrl('7eq3_OIhgIM'), /^https:\/\/www\.youtube-nocookie\.com\/embed\/7eq3_OIhgIM\?/);
    assert.match(embedUrl('7eq3_OIhgIM', 157), /&start=157$/);
    assert.equal(watchUrl('7eq3_OIhgIM', 157), 'https://www.youtube.com/watch?v=7eq3_OIhgIM&t=157s');
    assert.equal(thumbnailUrl('7eq3_OIhgIM'), 'https://i.ytimg.com/vi/7eq3_OIhgIM/hqdefault.jpg');
  });
});
