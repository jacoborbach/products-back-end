require('dotenv').config();
const massive = require('massive'),
    express = require('express'),
    { SERVER_PORT, CONNECTION_STRING } = process.env,
    productsCtrl = require('./controllers/products_controller'),
    app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('db connected')
}).catch(err => console.log(err));

app.get('/api/products', productsCtrl.getAll);
app.get('/api/products/:id', productsCtrl.getOne);
app.put('/api/products/:id', productsCtrl.update);
app.post('/api/products', productsCtrl.create);
app.delete('/api/products/:id', productsCtrl.delete);


app.listen(SERVER_PORT, () => {
    console.log(`You are listening on server ${SERVER_PORT}`);
});

