# GrateApex Live Quiz

GrateApex Live is a host-led, real-time multiple-choice quiz. It uses the app's existing curriculum question sources; it does not add an editable or duplicate question bank.

## Routes

- `/live` — participants enter a six-character code and a display name.
- `/live?code=ABC123` — joins a particular session directly.
- `/live/host` — the owner-only dashboard for choosing questions and creating a session.
- `/live/host?code=ABC123` — host controls for an active session.

## Security

- Host access uses the existing `admins/{uid}` document. The owner must already have that document.
- `api/_live-quiz.mjs`, bundled into the existing `api/battle.mjs` Vercel Function, verifies every signed-in caller and checks that the host owns the requested session.
- The correct options live only in `liveQuizKeys`, which no client can read.
- The server receives an answer once, scores it from server time, writes the result, and updates the participant score. Clients cannot write a session, answer, score, or leaderboard directly.
- `liveQuizSessions` contains only the question currently shown to participants and the published leaderboard.

## Question source

`scripts/build-live-quiz-bank.mjs` creates the ignored `server/live-quiz-bank.json` from the generated `public/battle-bank/` curriculum projection. This happens before `npm start`, `npm run web`, and the Vercel production build. The generated file is server-only and is included with the existing `api/battle.mjs` Vercel Function by `vercel.json`.

When the curriculum changes, first rebuild the normal battle bank, then the Live Quiz bank is regenerated automatically by the normal start or web build command.

## Before launch

1. Deploy the updated `firestore.rules` to the existing Firebase project. These rules add only the `liveQuiz*` collections and do not replace the rest of GrateApex's protection.
2. Deploy GrateApex to Vercel. The production build creates and includes the private quiz projection.
3. Sign in with the account that already has `admins/{uid}`. Open `/live/host`, select questions, create a session, and share its join address.
