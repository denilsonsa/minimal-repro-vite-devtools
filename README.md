This is a minimal reproduction testcase for <https://github.com/vitejs/devtools/issues/280>

This repository will likely be deleted after that bug is fixed.

## How to reproduce

1. Run `npm install`. It will respect the existing `ws` version from `package-lock.json`.
2. Run `npm run dev`. It will crash.
3. Run `npm run build`. It will crash.
