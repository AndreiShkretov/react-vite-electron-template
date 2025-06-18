# React Vite Electron Template

- ⚛️ React 19 + Vite
- ⚡ Vite development and bundling
- ⚙️ Electron 36 for cross-platform desktop apps
- 🧰 TypeScript + ESLint + Styled-components
- 📦 Packaging via electron-builder

## 📁 Project Structure

```
react-vite-electron-template
├── dist/                  # Built frontend (Vite output)
├── dist-electron/         # Built Electron main process
├── electron/              # Electron main process code
├── node_modules/
├── public/
├── src/                   # Frontend (React) source code with FSD structure
│   ├── app/
│   ├── entities/
│   ├── features/
│   ├── pages/
│   ├── shared/
│   ├── widgets/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
└── yarn.lock
```

## Project Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| React             | UI Library                        |
| Redux Toolkit     | State Management                  |
| React Router      | Routing                           |
| Styled-components | CSS-in-JS styling                 |
| TypeScript        | Static typing                     |
| Vite              | Dev server and build tool         |
| Electron          | Desktop app runtime               |
| Electron-builder  | Packaging and building installers |

## Setup Instructions

### 1. Install dependencies

```bash
yarn install
```

---

## Running the Project

### SPA (React) Development Server

To run the React app in development mode:

```bash
yarn dev
```

This will start the Vite dev server. Open your browser and navigate to `http://localhost:5173` (default Vite port) to see the SPA.

---

### Electron Development

To run the Electron app in development mode (build React app and launch Electron):

```bash
yarn electron:dev
```

This command will build the React app and then start Electron pointing to your built files.

---

## Building the Project

### Build React SPA

To build the React app for production:

```bash
yarn build
```

The build output will be located in:

```
dist/
```

### Build Electron Desktop Application

To build the full Electron app including the React frontend:

```bash
yarn electron:build
```

This will build your React app and then package the Electron app using `electron-builder`.

The packaged files and installers will be generated according to your electron-builder configuration (usually in the `dist-electron` or `dist` folders).

---

## Where to Find Build Files

- React production build: `dist/`
- Electron main process and packaged app: `dist-electron/`

---
