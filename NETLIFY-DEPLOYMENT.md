# Netlify deployment checklist

1. Extract this ZIP on your device.
2. Upload the extracted project folder to a new GitHub repository, or use Netlify Drop with the built `dist/` folder after building locally.
3. For GitHub-connected Netlify deployment, choose the repository root as the base directory.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Netlify reads these same settings from `netlify.toml`.

The ZIP contains source code, not a precompiled `dist/` website. Netlify will install the declared npm packages and build the site during deployment. This environment could not complete an npm dependency installation, so a full Vite production build could not be run here. TypeScript source syntax was checked successfully, and the extracted course data was checked for 29 modules, 97 definitions and 29 course model answers.

The initial release is intentionally local-only: no student account migration, online authentication, cloud database or payment verification is included.
