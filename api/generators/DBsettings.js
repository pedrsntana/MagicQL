const Utils = require('../utils');

const generateSettings = (protocol = undefined) => {
    let modelsPath = 'testDB/configs/models';
    Utils.folderExists(modelsPath);
    Utils.writeSettings('testDB/configs/DBsettings.js', Utils.filesInFolder(modelsPath));
}

// Manually runs DBsettings
if(process.argv[2] == 'db-gen-settings') {
    generateSettings();
};

module.exports = generateSettings;

