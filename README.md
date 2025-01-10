# Game Night

## Overview

Game Night is a React application with a Node.js/Express backend. The frontend is built using React and Vite, while the backend uses Express to handle API requests and serve the React application.
The project follows Client-Side Rendering (CSR). The React application is rendered in the browser, and the server primarily serves the static files and handles API requests.

## Project Structure

- **`package.json`**: Defines the project's dependencies and scripts.
- **`vite.config.ts`**: Configuration file for Vite, specifying plugins, server settings, and build options.
- **`tsconfig.json`**: TypeScript configuration file, specifying compiler options.
- **`src/app/index.tsx`**: Entry point for the React application, rendering the root component.
- **`src/app/App.tsx`**: Main application component, setting up client-side routing.
- **`src/app/Home.tsx`**: Example React component, fetching data from the backend.
- **`src/server/server.ts`**: Express server setup, handling API requests and serving the React application.
- **`src/server/routes.ts`**: Defines API routes for the Express server.
- **`index.html`**: HTML template for the React application.

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/gamenight.git
   cd gamenight
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

### Development

To start the development server, run:

```sh
pnpm dev
```

/Users/christina_milona/Projects/GameNight/
├── server/
│ ├── src/
│ │ ├── index.ts
│ │ └── routes.ts
│ ├── .env
│ ├── package.json
│ ├── tsconfig.json
├── client/
│ ├── public/
│ ├── src/
│ │ ├── index.tsx
│ │ ├── App.tsx
│ │ ├── api/
│ │ │ └── axios.ts
│ │ ├── components/
│ │ │ ├── ErrorFallback.tsx
│ │ │ ├── Home.tsx
│ ├── index.html
│ ├── package.json
│ ├── tsconfig.json
│ ├── vite.config.ts
