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
router.get('/quiz', (req, res) => {
    res.render('quiz');
});
//


/*
Exporter le module de route
*/
module.exports = router;
//