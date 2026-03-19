const mongoose = require('mongoose');
const connection = async () => {
    try {
        await mongoose.connect(process.env.URLMONGO);
        console.log('Connexion à MongoDB ok');
    } catch (error) {
        console.error('Erreur de connexion à MongoDB:');
        console.error(error);
    }};
module.exports = connection;