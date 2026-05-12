const express = require('express');
const corsMiddleware = require('./middleware/cors');
const routes = require('./routes');

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

// To connect MongoDB, uncomment the lines below and add MONGO_URI to .env
// const db = require('./connectors/database');
// db.connect().catch((err) => { console.error('[db] connection failed:', err.message); process.exit(1); });

module.exports = app;
