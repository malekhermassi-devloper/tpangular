export class Client {
    id?: string;
    nom?: string;
    avatar?: string;
    constructor(args: Client = {}) {
    this.id = args.id;
    this.nom = args.nom;
    this.avatar = args.avatar;
    }
}
