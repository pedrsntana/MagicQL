const pluralize = require('pluralize');

class Collection {
    constructor(name, columns, info, idIndex) {
        this.name = name;
        this.verbose = pluralize(name);
        this.columns = columns;
        this.info = info;
        this.idIndex = idIndex;
        this.roles = {
            read: ["all"],
            write: ["all"],
            delete: ["all"]
        }
    }
}

module.exports = Collection;