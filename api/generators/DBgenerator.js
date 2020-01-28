const config = require('config');
const Utils = require('../utils');

const get = (prop) => { return config.get(prop) }

// Creates DBConfig.js
const generateConfig = (protocol = undefined) => {
    const DBConfig = {
        config: {
            protocol: `${get('DB.protocol')}`,
            host: `${get('DB.host')}`,
            port: `${get('DB.port')}`,
            user: `${get('DB.username')}`,
            password: `${get('DB.password')}`
        },
        server: {
            port: `${get('settings.port')}`
        }   
    }

    Utils.folderExists('testDB/configs');
    Utils.writeModel('testDB/configs/DBconfig.js', DBConfig);
}

// Manually runs DBsettings
if(process.argv[2] == 'db-gen-config') {
    generateConfig('mongodb');
};

module.exports = generateConfig;