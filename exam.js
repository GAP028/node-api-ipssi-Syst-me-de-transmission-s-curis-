const express = require('express');
const connection = require('./db');
require('dotenv').config();
const messageRouter = require('./routes/messageRoutes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection();

app.get('/', (req, res) => {
    res.json({ message: 'API transmission active'});
});
app.use('/message', messageRouter);
app.listen(process.env.PORT || 3000, () => {
    console.log ("ca fonctionne");
});