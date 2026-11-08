# DeepStudy — FUOYE Sociology 100 Level

DeepStudy is the parent academic platform. This first release is the FUOYE Sociology 100 Level companion. The Sociology department emblem remains a separate mark inside the Sociology dashboard; the supplied Cloudinary image is the DeepStudy parent/PWA logo.

## Included
- First- and second-semester course library and bridge modules recovered from the latest source snapshot
- Definition finder and course pages
- DeepStudy chapter notes, GST supplementary material and essay answers
- Generated CBT practice, flashcards, progress tracker and 28-day study planner
- Lecture notepad, theme preferences and PWA install flow
- Netlify static build and service-worker app-shell caching

## First-release architecture
- No AppDeploy SDK, backend, authentication provider, database or payment integration
- No transfer of historical student accounts
- No online account creation in this release; profile name, notes, preferences and progress are stored locally in the browser on the current device
- Local browser data does not synchronize between devices and can be lost if browser storage is cleared
- No paid-access or payment verification workflow is enabled

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev` for local development.
4. Run `npm run build` to create the production site in `dist/`.
5. Deploy the folder to Netlify, or connect the GitHub repository and let Netlify use the included `netlify.toml`.

## Academic accuracy
Course names and study material are learning aids, not official university notices. Students should verify current course codes, registration requirements, examination dates and departmental guidance with FUOYE.

## Future platform direction
The codebase is branded for expansion into other departments, levels, faculties and universities. Multi-tenant accounts, secure cloud synchronization, administration and payments are intentionally deferred until a suitable backend is designed.
