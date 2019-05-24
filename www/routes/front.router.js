/*
Configurer le module de route
*/
const express = require('express');
const router = express.Router();
//

/*
Définition des routes
*/
// Accueil
router.get('/', (req, res) => {
    res.render('index');
});

// Comment voter ?
router.get('/comment-voter', (req, res) => {
    res.render('comment-voter');
});
//

// Pourquoi voter ?
router.get('/pourquoi-voter', (req, res) => {
    res.render('pourquoi-voter');
});
//

// Pourquoi voter ?
router.get('/ue', (req, res) => {
    res.render('ue');
});
//

// Introduction Quiz ?
router.get('/introquiz', (req, res) => {
    res.render('introquiz');
});
//

// Pourquoi voter ?
router.get('/question1', (req, res) => {
    res.render('question1');
});
//

// Pourquoi voter ?
router.get('/resultats-quiz', (req, res) => {
    res.render('resultats-quiz');
});
//

// Pourquoi voter ?
router.get('/reponse1', (req, res) => {
    res.render('reponse1');
});
//

/*
Exporter le module de route
*/
module.exports = router;
//