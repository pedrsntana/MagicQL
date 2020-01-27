const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const config = require('config');
const ExpressRouter = require('./routes');

const PORT = config.get('server.port');

class App {
    constructor() {
        this.server = express();
        this.server.use([
            cors(),
            logger('dev'),
        ]);

        const mainRouter = new ExpressRouter();
        this.server.use('', mainRouter.getRouter());

        this.server.listen(PORT);
        console.log("[APP] Running on port ", PORT);
    }
}

module.exports = App;