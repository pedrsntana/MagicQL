const MongoClient = require('mongodb').MongoClient;
const Collection = require('./mongodb/Collection');
const Data = require('./mongodb/Data');
const config = require('config');

const get = (target) => { config.get(target) } 

const generateConfig = require('../api/generators/DBgenerator');
const { folderExists, writeModel } = require('../api/utils');

const connectString = `${get('DB.protocol')}://${get('DB.username')}:${get('DB.password')}@${get('DB.host')}:${get('DB.port')}/${get('DB.database')}?authMechanism=${get('DB.auth')}&authSource=${get('DB.source')}&readPreference=primary&appname=MongoDB%20Compass&ssl=false`;

const client = new MongoClient(connectString, { useUnifiedTopology: true });

client.connect(async (err, client) => {
    if (err) throw new Error(err);
    console.log("[MONGODB] Connected to DB");

    const db = client.db(`${get('DB.database')}`);
    generateConfig();

    await db.listCollections.forEach(async (coll) => {
        let data = [];
        await db.collection(coll.name).find({}).limit(1).forEach(item => {
            for (let key in item) {
                data.push(new Data(key, typeof key));
            }
        });

        let schema = new Collection(coll.name, data, coll.info, coll.idIndex);

        folderExists('@root/testDB/configs');
        writeModel(`@root/test/configs/models/${coll.name}`, schema);
    });

    client.close();
});