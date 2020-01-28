
const path = require('path');
const settings = require('../../testDB/configs/DBsettings')
const addToResponse = require('../utils').addToResponse;
const nextAndReturn = require('../utils').nextAndReturn;

class CollectionController {
    constructor() {
        console.log('[CONTROL] CollectionController:Initiated');
        this.settings = settings;
    }

    getCollections = (req, res, next) => {    
        this.settings.map(setting => {
            console.log(setting);
        })
        
    }
}

module.exports = CollectionController;


/*     
    const collections = this.settings.map(collection => {
        return {
            name: collection.name,
            verbose: collection.verbose,
            order: collection.order || undefined,
        }   
    }).filter((collection) =>  collection); 
    
    // addToResponse(res, 'collections')(collections);
    // return nextAndReturn(next);    
*/

    