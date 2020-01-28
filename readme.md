# MagicQL

#### A universal Query Language, that works with any database. Be it SQL or NoSQL.

MagicQL was built to help enhance compatibility between database types.

## Start

To start working with MagicQL

```bash
git clone https://github.com/pedrsntana/MagicQL.git

cd MagicQL

npm install
```

Create a folder named `config` in the root folder, and file named inside it `default.json`. In this file you're going to input your DB information, according to the following structure:

### MongoDB:

```json   
{
    "DB": {
        "protocol": "mongodb",
        "host": "<your-hostname>",
        "port": "<your-host-port>",
        "database": "<database-name>",
        "username": "<database-username>",
        "password": "<database-password>",
        "auth": "<database-auth-mechanism>",
        "source": "<database-auth-source>",
        "type": "mongo",
    },
    "settings": {
        "port": "<server-port>",
    }
}
```



## Parsing

To parse the a whole database run the command `npm run parse-db`, this will create the model files of the database tables/collections. Has well has the file `DBconfig.js`, containing the **Database Configuration** information and `DBsettings.js`, which contains **an array of the imports of every model** created by `parse-db`.

#### Generating `DBconfig.js`

To manually create `DBconfig.js`  without parsing the whole database all over again. You can run the command `npm run create-db-config`.

#### Generating DBsettings.js

To create `DBsettings.js` without re-parsing the database, use the command `npm run create-db-settings`.

## Running MagicQL

To run MagicQL simply use the command `npm run start`. And watch the magic happen.
