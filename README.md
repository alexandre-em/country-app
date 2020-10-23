# Country App

Application qui permet d'afficher les informations du pays selectionne.

### Stack : 
- ReactJS
- GraphQL Apollo

## Composition

Le site est compose de deux pages:
- La page d'accueil, qui affiche une liste de pays
- Une page description d'un pays selectionne
Le header permet d'acceder a la page description d'un pays en inserant son nom entier et est accessible depuis n'importe quel page.

### Home page
La page d'accueil, sur le route '/' permet de visualise une liste de 50 pays par page. La navigation entre les pages s'effectue avec les fleches en head et top du component `Home`. En cliquant sur un pays, l'utilisateur est redirige vers la page description du pays selectionne.

### Details page
La page de detail est sur le route '/country/`name`', ou name est le nom du pays. Lorsque la page est charge par l'utilisateur, le programme va faire une requete a l'api, sur la table `Country` afin de recuperer les informations necessaire pour les afficher ensuite.
Si le pays n'est pas trouve, un message d'erreur s'affiche.

### Remarque :
Pour rechercher un pays il faudra tapez le nom exact.