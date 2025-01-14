export class Proprietaire {
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
  cin: string;
  adresse: string;
  password: string;
  idLocal: number;

  constructor(
    id: number,
    nom: string,
    prenom: string,
    telephone: string,
    cin: string,
    adresse: string,
    password: string,
    idLocal: number
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.telephone = telephone;
    this.cin = cin;
    this.adresse = adresse;
    this.password = password;
    this.idLocal = idLocal;
  }
}
