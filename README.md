# Tic-Tac-Toe Game

A simple and interactive Tic-Tac-Toe game built using **React** with Remix framework. This project demonstrates core concepts of React state management and functional components while providing a fun and engaging user experience.

![image](https://github.com/user-attachments/assets/87e146ba-21d9-4cca-a4df-b2297046a704)

## Features
- Playable by two players (X and O).
- Automatically detects the winner or a draw.
- Reset button to restart the game at any time.
- Interactive grid-based UI for an intuitive gaming experience.

## Project Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (>=14.x)
- npm (>=6.x)
- Remix ([Docs](https://remix.run/docs))

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
