﻿var listeChoixRessources = new Array ()
var listeRessources      = new Array ()
listeChoixRessources ["grClasse"] = "Choisir une classe";

listeRessources [0] = new Ressource ("grClasse","Sélectionnez une classe","vide");
listeRessources [1] = new Ressource ("grClasse","11 LES","c0000026");
listeRessources [2] = new Ressource ("grClasse","12 ES","c0000032");
listeRessources [3] = new Ressource ("grClasse","13 S1","c0000011");
listeRessources [4] = new Ressource ("grClasse","14 S2","c0000044");
listeRessources [5] = new Ressource ("grClasse","15 S3","c0000034");
listeRessources [6] = new Ressource ("grClasse","1BI","c0000016");
listeRessources [7] = new Ressource ("grClasse","2F1","c0000047");
listeRessources [8] = new Ressource ("grClasse","2F2","c0000012");
listeRessources [9] = new Ressource ("grClasse","2F3","c0000043");
listeRessources [10] = new Ressource ("grClasse","2F4","c0000024");
listeRessources [11] = new Ressource ("grClasse","2F5","c0000005");
listeRessources [12] = new Ressource ("grClasse","2F6","c0000023");
listeRessources [13] = new Ressource ("grClasse","2Int","c0000015");
listeRessources [14] = new Ressource ("grClasse","3A1","c0000048");
listeRessources [15] = new Ressource ("grClasse","3A3","c0000045");
listeRessources [16] = new Ressource ("grClasse","3A5","c0000036");
listeRessources [17] = new Ressource ("grClasse","3A7","c0000020");
listeRessources [18] = new Ressource ("grClasse","3B2","c0000004");
listeRessources [19] = new Ressource ("grClasse","3B4","c0000042");
listeRessources [20] = new Ressource ("grClasse","3B6","c0000033");
listeRessources [21] = new Ressource ("grClasse","4A1","c0000039");
listeRessources [22] = new Ressource ("grClasse","4A3","c0000041");
listeRessources [23] = new Ressource ("grClasse","4A5","c0000025");
listeRessources [24] = new Ressource ("grClasse","4A7","c0000019");
listeRessources [25] = new Ressource ("grClasse","4B2","c0000006");
listeRessources [26] = new Ressource ("grClasse","4B4","c0000040");
listeRessources [27] = new Ressource ("grClasse","4B6","c0000002");
listeRessources [28] = new Ressource ("grClasse","5A1","c0000010");
listeRessources [29] = new Ressource ("grClasse","5A3","c0000046");
listeRessources [30] = new Ressource ("grClasse","5A5","c0000049");
listeRessources [31] = new Ressource ("grClasse","5A7","c0000050");
listeRessources [32] = new Ressource ("grClasse","5B2","c0000014");
listeRessources [33] = new Ressource ("grClasse","5B4","c0000022");
listeRessources [34] = new Ressource ("grClasse","5B6","c0000027");
listeRessources [35] = new Ressource ("grClasse","6A1","c0000029");
listeRessources [36] = new Ressource ("grClasse","6A3","c0000031");
listeRessources [37] = new Ressource ("grClasse","6A5","c0000007");
listeRessources [38] = new Ressource ("grClasse","6A7","c0000009");
listeRessources [39] = new Ressource ("grClasse","6B2","c0000017");
listeRessources [40] = new Ressource ("grClasse","6B4","c0000018");
listeRessources [41] = new Ressource ("grClasse","6B6","c0000013");
listeRessources [42] = new Ressource ("grClasse","A3","c0000021");
listeRessources [43] = new Ressource ("grClasse","A4","c0000038");
listeRessources [44] = new Ressource ("grClasse","TBI","c0000008");
listeRessources [45] = new Ressource ("grClasse","Ter1 LES","c0000030");
listeRessources [46] = new Ressource ("grClasse","Ter2 ES","c0000037");
listeRessources [47] = new Ressource ("grClasse","Ter3 S1","c0000035");
listeRessources [48] = new Ressource ("grClasse","Ter4 S2","c0000028");
listeRessources [49] = new Ressource ("grClasse","Ter5 S3","c0000003");

function Ressource (aGenre, aLibelle, aCodage) {
  this.genre   = aGenre;
  this.libelle = aLibelle;
  this.codage  = aCodage;
}
