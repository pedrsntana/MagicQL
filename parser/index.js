const config = require('config');
const connectMDB = require('./mongodb/mongo');

const Parser = (db_type) => {
    switch(db_type) {
        case 'mongo':
            connectMDB();
            break;
        case 'sqlite3':
        case 'mysql':
        case 'mssql':
        case 'postgres':
            console.log('Driver not supported');
            break;
        default:
            console.log('DB type not recognized');
            break;
    }
}

if (process.argv[2] === 'parse-db') {
    Parser(config.get('DB.type'));
};

module.exports = Parser;