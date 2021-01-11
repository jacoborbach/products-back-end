require('dotenv').config();
const massive = require('massive'),
    express = require('express'),
    { SERVER_PORT, CONNECTION_STRING } = process.env,
    app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('db connected')
}).catch(err => console.log(err));

app.listen(SERVER_PORT, () => {
    console.log(`You are listening on server ${SERVER_PORT}`);
});

