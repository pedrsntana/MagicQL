const config = require('config');
const addToResponse = require('../utils').addToResponse;
const nextAndReturn = require('../utils').nextAndReturn;

class CollectionController {
    constructor() {
        console.log('[CONTROL] CollectionController:Initiated');
        this.settings = config.get('dbConfig');
    }

    getCollections = (req, res, next) => {
        const collections = this.settings.map(collection => {
            return {
                name: collection.name,
                verbose: collection.verbose,
                order: collection.order || undefined,
            }   
        }).filter((collection) =>  collection);

        addToResponse(res, 'collections')(collections);
        return nextAndReturn(next);
    }
}

module.exports = CollectionController;