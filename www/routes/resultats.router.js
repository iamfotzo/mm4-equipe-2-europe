/*
Configurer le module de route
*/
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
//



/*
Définition des routes
*/
// Send email
router.post('/', (req, res) => {

    console.log(req.body)

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        
        //secure: false, // true for 465, false for other ports
        auth: {
        user: 'mullservix@gmail.com', //  user
        pass: process.env.PASSGMAIL //  password
        }
    });

    const mailOptions = {
        from: 'mullservix@gmail.com',
        to: req.body.email,
        subject: 'Voici le résultat de ton quiz',
        text: 'Bien joué ! Tu as eu 90% de bonnes réponses !'
    };

    return new Promise( (resolve, reject) => {
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return reject(res.json({ msg: 'Error email', error: error }))
            } else{
                // enregistrer le message dans couchDB
                return resolve(res.json({ msg: 'Email send', data: info }))
            }
        })
    })
});


/*
Exporter le module de route
*/
module.exports = router;
//