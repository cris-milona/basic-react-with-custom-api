## Overview

This is the basic folder structure and configuration settings to start a react application and a server to communicate with this application. (Use both client and server components together)
On the other hand each folder (client or server) can be used separately

Always run the server before starting the client (there is a request in HOme page that needs the server to run)

## Files

- **`package.json`**: Defines the project's dependencies and scripts. One for react application and one for custom api
- **`vite.config.ts`**: Configuration file for Vite, specifying plugins, server settings, and build options for the react application.
- **`tsconfig.json`**: TypeScript configuration file, specifying compiler options. One for react application and one for custom api
- **`index.html`**: HTML template for the React application.
- **`client/src/index.tsx`**: Entry point for the React application, rendering the root component.
- **`client/src/App.tsx`**: Main application component, setting up client-side routing.
- **`client/src/components/Home.tsx`**: Example React component, fetching data from the backend.

- **`server/src/index.ts`**: Express server setup, handling API requests and serving the React application.
- **`server/src/routes.ts`**: Defines API routes for the Express server.

## Project structure

`├── server/ │ ├── src/ │ │ ├── index.ts │ │ └── routes.ts │ ├── .env │ ├── package.json │ └── tsconfig.json

├── client/ │ ├── public/ │ ├── src/ │ │ ├── index.tsx │ │ ├── App.tsx │ │ ├── api/ │ │ │ └── axios.ts │ │ ├── components/ │ │ │ ├── ErrorFallback.tsx │ │ │ └── Home.tsx │ ├── index.html │ ├── package.json │ ├── tsconfig.json │ └── vite.config.ts`
