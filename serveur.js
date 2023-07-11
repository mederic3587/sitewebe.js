const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware pour analyser le corps des requêtes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint pour la page d'accueil
app.get('/', (req, res) => {
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Enregistrer l'adresse IP dans un fichier
  fs.appendFile('ip_log.txt', ipAddress + '\n', (err) => {
    if (err) {
      console.error(err);
    }
  });

  // Envoyer le fichier index.html avec l'adresse IP
  res.sendFile(__dirname + '/index.html');
});

// Fournir les fichiers statiques (CSS, images, etc.)
app.use(express.static(__dirname));

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});










