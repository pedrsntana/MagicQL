const Router = require('express').Router;
const sendJSON = require('../middleware/response');
const CollectionController = require('../controllers/CollectionController');
const DocumentController = require('../controllers/DocumentController');

class ExpressRouter {
    constructor(router = undefined) {
        const collectionController = new CollectionController();
        const documentController = new DocumentController();

        this.router = (router != undefined) ? router : Router();

        this.router.get('/',
            (req, res, next) => {
                collectionController.getCollections(req, res, next);
            },
            sendJSON('collections')
        );
    }

    getRouter() {
        return this.router;
    }
}

module.exports = ExpressRouter;