# on-record-fe

Currently under construction, this repository contains the front end for On Record.

[Back End](https://github.com/JAMESBRADLEY99/on-record-api)

[Trello Board](https://trello.com/b/9bs0gD9A/on-record)

## Setup

To set up this React application, follow these steps. This assumes you have Node.js and npm installed.

### Prerequisites
- **Node.js**: Version 14 or higher. Check with `node --version`.
- **npm**: Comes with Node.js. Check with `npm --version`.
- **Back end**: The front end expects the API from `../on-record-api` to be running separately.

### Setup Steps
1. **Install dependencies**:
   - Run `npm install` to install packages listed in `package.json` (React, React Router, Bootstrap, testing libraries, etc.).

2. **Start the application**:
   - Run `npm start` to launch the app in development mode.
   - Open `http://localhost:3000` in your browser.

3. **Build for production**:
   - Run `npm run build` to create an optimized production build in the `build` folder.

4. **Run tests**:
   - Run `npm test` to start the React test runner.

### Additional notes
- This project uses `react-scripts` for development, build, and test workflows.
- If the app needs to call the back end, make sure the API is running and accessible from the front end.
- The current source files are under `src/`, including page components in `src/pages`.
