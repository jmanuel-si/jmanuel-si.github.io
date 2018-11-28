var libChoixGenre = "Recherche par :";
var listeGenres = new Array ()
listeGenres [0] = new GenreRessource ("grClasse","CLASSES");

function GenreRessource (aGenre, aLibelle) {
  this.genre   = aGenre;
  this.libelle = aLibelle;
}
