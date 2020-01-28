const App = require('./api/server');
const Parser = require('./parser');
const config = require('config');


const startServer = (config = {}) => {
    console.log('[MAGICQL] Started');

    // Error Handling
    // ...

    // Start Server
    const app = new App();
}; startServer(config.get('DB'));