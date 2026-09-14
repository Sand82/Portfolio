# portfolio

Responsive online CV built with React + TypeScript + Vite and ready for Firebase Hosting.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Firebase Hosting

1. Create a Firebase project.
2. Install Firebase CLI: `npm install -g firebase-tools`
3. Run `firebase login`.
4. Replace `YOUR_FIREBASE_PROJECT_ID` in `.firebaserc`.
5. Run `npm run build`.
6. Run `firebase deploy --only hosting`.

## PDF

Put your final PDF at `public/Aleksandar_Stefanov_CV.pdf` so the Download CV button works.
