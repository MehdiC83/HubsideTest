# Test d'automatisation

> L’objectif de ce test technique est d’automatiser une fonctionnalité présente sur le site Hubside. Le test consiste à ajouter un bloc image à mon site.

Voici les etapes :

Etape 1 : Se rendre sur le site `https://www.hubside.com/fr_FR/`

Etape 2 : Se connecter avec les identifiants.

Etape 3 : Cliquer sur le bouton `modifier mon site`

Etape 4 : Ajouter un widget image en cliquant sur la croix (ajout d’un bloc), puis choisir « Image » puis cliquer sur l’image représentant un lion.

Etape 5 : Vérifier que l’image a bien été ajoutée à l’editeur.

L'automatisation de la fonctionnalité a été realisée avec Cucumber :

`cypress/integration/AddImage.feature` : La feature avec les scenarios Gherkin.

`cypress/integration/pageObjects/PageLogin.js` : Definition des elements de la page de login.

`cypress/integration/pageObjects/PageHome.js` : Definition des elements de la page d'accueil apres la connexion.

`cypress/integration/AddImage/AddImage.js` : Implementation de la fonctionnalité.