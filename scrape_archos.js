const axios = require('axios');
const cheerio = require('cheerio');

// URL de la page Wikipédia à scraper
const url = 'https://www.boursorama.com/cours/1rPALJXR/';

// Effectuer une requête GET vers l'URL
axios.get(url)
    .then(response => {
        // Charger le contenu HTML de la page
        const html = response.data;

        // Utiliser Cheerio pour analyser le HTML
        const $ = cheerio.load(html);

        // Récupérer le contenu du h1
        const h1Content = $('h1').text();

        // Afficher le contenu du h1 dans la console
        console.log('Contenu du h1:', h1Content);
    })
    .catch(error => {
        console.error('Une erreur est survenue lors de la requête :', error);
    });
