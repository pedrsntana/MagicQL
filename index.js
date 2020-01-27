const App = require('./api/server');
const config = require('config');

const startServer = (config = {}) => {
    console.log('magic-ql:start');

    // Error Handling
    // ...

    // Start Server
    const app = new App();
    
    return app.server;
}; startServer(config.get('dbConfig'));