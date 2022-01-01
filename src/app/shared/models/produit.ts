import{Categorie} from '../models/categorie' ;
export class Produit {
    id? : string;
    categId? : string ;
    nom?: string;
    image?: string;
    prix ?: string;
    description?: string;
    constructor( id : string , args: Produit = {}  ) {
    this.id = args.id;
    this.categId = id;
    this.nom = args.nom;
    this.image = args.image;
    this.prix = args.prix;
    this.description = args.description;
    }
   }
   
