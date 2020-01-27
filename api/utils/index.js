const config =  require('config');
const fs = require('fs');
const path = require('path');

module.exports = addToResponse = (res, target) => {
    return (data) => {
        if (res) {
            res.data = {
                ...res.data,
                [target]: data,
            }

            return res;
        }
        
        throw new Error(500, 'Response object not valid');
    }
}

module.exports = nextAndReturn = (next) => {
    return async (data) => {
        if (next) {
            next();
        }
        return await resolve(data);
    }
}

module.exports = getCollectionConfig = (COLLECTION_CONFIG) => {
    return config.get('settings').filter(
        (collectionItem) => collectionItem.name ===  COLLECTION_NAME
    )
}


// File System Utilities
module.exports = folderExists = (pathToFolder) => {
    if (!fs.existsSync(pathToFolder)) {
        folderExists(path.dirname(pathToFolder))
        fs.mkdirSync(pathToFolder)
    }
    console.log('[UTIL] Finished')
}

module.exports = writeModel = (target, writtable) => {
    fs.writeFile(target,
        'export default' + JSON.stringify(writtable, null, 2),
        'utf8',
        (err) => {
            if (err) throw new Error(err);
        }
    )
}