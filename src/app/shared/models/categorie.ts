export class Categorie {
    [x: string]: any;
    id?: string;
    nom?: string;

    constructor(args: Categorie = {}) {
    this.id = args.id;
    this.nom = args.nom;
    
}
}
