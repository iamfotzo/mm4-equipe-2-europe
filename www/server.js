/*
Importer les composants serveur
*/
    // NodeJS
    require('dotenv').config();
    const express = require('express');
    const path = require('path');
    const bodyParser = require('body-parser');

    // Inner
    const frontRouter = require('./routes/front.router');
    const mailerRouter = require('./routes/mailer.router');
    const resultRouter = require('./routes/resultats.router')
//

/*
Configuration du serveur
*/
    // Définir les variables serveur
    const server = express();
    const port = 3000;

    // Configuration du moteur de rendu
    server.set('view engine', 'ejs'); 

    // Définition du dossier static du client
    server.set( 'views', __dirname + '/www/views' );
    server.use( express.static(path.join(__dirname, 'www')) );

    // Configurration de body-parser
    server.use(bodyParser.json({limit: '10mb'}));
    server.use(bodyParser.urlencoded({ extended: true }));

    // Utilisation des routers
    server.use('/mailer', mailerRouter);
    server.use('/result', resultRouter)
    server.use('/', frontRouter);
//

/* 
Lancer le serveur
*/
    server.listen( port, () => console.log(`Server listening on port ${port}`) )
//