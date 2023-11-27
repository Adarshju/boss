const { MongoClient } = require('mongodb');

const state = {
    db: null
}

module.exports.connect = function () {

    async function main() {

        const uri = "mongodb+srv://jerry:jerry@test.pfnc6vc.mongodb.net/?retryWrites=true&w=majority";


        const client = new MongoClient(uri);
        const dbname = 'shopping'

        try {
            // Connect to the MongoDB cluster
            await client.connect();
            state.db = client.db(dbname)

            console.log("databnase connected")
            // Make the appropriate DB calls
            await listDatabases(client);

        } catch (e) {
            console.error(e);
            console.log("databaser not connected");
        }
    }
    main().catch(console.error);
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

module.exports.get = function () {
    return state.db
}