// Boosts work as soon as they are received (owner, 2026-10-24): a timed boost starts at
// once; with one already running, the next waits and starts by itself when it ends (one
// at a time, so an effect is never stacked or extended).
import assert from 'node:assert/strict';
import { test } from 'node:test';

test('a timed boost starts when received; the next starts when it ends', async (t) => {
  t.mock.timers.enable({ apis: ['Date', 'setTimeout'], now: Date.parse('2026-10-24T12:00:00Z') });
  const powerups = await import('@/data/learning/powerups');
  await powerups.resetPowerups();

  assert.equal(await powerups.grantPowerup('gift', 'first', 2, 600), true);
  const running = powerups.activeBoostNow();
  assert.ok(running, 'started straight away, no Activate needed');
  assert.equal(running.multiplier, 2);
  assert.equal(powerups.powerupInventory().filter((item) => item.kind === 'timed').length, 0);

  await powerups.grantPowerup('gift', 'second', 1.5, 900);
  assert.equal(powerups.activeBoostNow().multiplier, 2, 'the running boost is not replaced or extended');
  assert.equal(powerups.powerupInventory().filter((item) => item.kind === 'timed').length, 1, 'the second one waits');

  t.mock.timers.tick(600 * 1000 + 300);
  await new Promise((resolve) => setImmediate(resolve));
  const next = powerups.activeBoostNow();
  assert.ok(next, 'the waiting boost started by itself');
  assert.equal(next.multiplier, 1.5);
  assert.equal(powerups.powerupInventory().filter((item) => item.kind === 'timed').length, 0);
});

// Gifting (owner, 2026-10-31: "gifting a boost does not work"): because boosts start at
// once, the one running is often the only boost a learner has, so it can be gifted too.
test('the running boost can be taken to gift; the time left travels, and it comes back if the gift fails', async (t) => {
  t.mock.timers.enable({ apis: ['Date', 'setTimeout'], now: Date.parse('2026-10-31T12:00:00Z') });
  const powerups = await import('@/data/learning/powerups');
  await powerups.resetPowerups();

  await powerups.grantPowerup('achievement', 'level-a', 3, 900);
  t.mock.timers.tick(300 * 1000);
  const taken = await powerups.takeRunningBoost();
  assert.ok(taken, 'the running boost is taken');
  assert.equal(taken.kind, 'timed');
  assert.equal(taken.multiplier, 3);
  assert.equal(taken.durationSeconds, 600, 'only the time left is given');
  assert.equal(powerups.activeBoostNow(), null, 'it stops for the sender');

  await powerups.returnPowerup(taken);
  const back = powerups.activeBoostNow();
  assert.ok(back, 'a gift that could not be sent runs again for the sender');
  assert.equal(back.multiplier, 3);

  t.mock.timers.tick((600 - 30) * 1000);
  assert.equal(await powerups.takeRunningBoost(), null, 'under a minute left is not worth gifting');
});
