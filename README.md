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

<pre> project-root
├── server # Backend Node.js server/api
│ ├── src
│ │ ├── index.ts # Server entry point
│ │ └── routes.ts # API route definitions
│ ├── .env # Server environment variables
│ ├── package.json # Server dependencies
│ └── tsconfig.json # TypeScript configuration
│
├── client # Frontend React application
│ ├── public # Static files
│ ├── src
│ │ ├── index.tsx # Application entry point
│ │ ├── App.tsx # Root component
│ │ ├── api
│ │ │ └── axios.ts # Axios instance configuration
│ │ └── components
│ │ ├── ErrorFallback.tsx
│ │ └── Home.tsx
│ ├── index.html # HTML entry point
│ ├── package.json # Frontend dependencies
│ ├── tsconfig.json # TypeScript configuration
│ └── vite.config.ts # Vite configuration<pre>
