const config = require('config');
const { folderExists, writeModel } = require('../api/utils');

const get = (prop) => { return config.get(prop) }


// Creates DBConfig.js
const generateConfig = (protocol = undefined) => {
    const DBConfig = {
        config: {
            protocol: `${get(DB.protocol)}`,
            host: `${get(DB.host)}`,
            port: `${get(DB.port)}`,
            user: `${get(DB.username)}`,
            password: `${get(DB.passsword)}`
        },
        server: {
            port: `${get(server.port)}`
        }   
    }

    folderExists('@root/testDB/configs');
    writeModel('@root/testDB/configs/DBconfig.js', DBConfig);
}

module.exports = generateConfig;