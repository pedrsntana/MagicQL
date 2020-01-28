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
module.exports.folderExists = folderExists = (pathToFolder) => {
    if (!fs.existsSync(pathToFolder)) {
        folderExists(path.dirname(pathToFolder))
        fs.mkdirSync(pathToFolder)
    }
}

module.exports.writeModel = writeModel = (target, writtable) => {
    fs.writeFile(target,
        'export default' + JSON.stringify(writtable, null, 2),
        'utf8',
        (err) => {
            if (err) console.error(error);
        }
    )
}

module.exports.writeSettings = writeSettings = (target, modelsArray) => {
    let importsString = "", exportString = "module.exports = [\n";

    for (let item in modelsArray) {
        importsString += `const ${modelsArray[item]} = require('./models/${modelsArray[item]}')\n`
        exportString += `\t${modelsArray[item]},\n`;
    }
    
    exportString += ']';

    settingsFile = importsString + '\n' + exportString;

    fs.writeFile(target, settingsFile,
        'utf8',
        (err) => {
            if (err) console.error(error);
        }
    )
}

module.exports.filesInFolder = filesInFolder = (pathToFolder) => {
    let folder = fs.readdirSync(pathToFolder, (err, files) => {
            if (err) console.error(err);
            return files;       
    });

    for(let item in folder) {
        folder[item] = folder[item].slice(0,-3);
    }

    return folder;
} 