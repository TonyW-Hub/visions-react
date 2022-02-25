// Typage de données d'un produit récupérer depuis l'API
export default class Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;

    constructor(
        id: number,
        title: string,
        price: string,
        category: string,
        description: string,
        image: string
    ) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this.description = description;
        this.image = image;
    }

    setPrice(price: string): void {
        this.price = price;
    }

    // Fonction pour calculer la TVA d'un produit
    getVAT(): string {
        const price = parseFloat(this.price);
        return (Math.round((price + (price * 0.2)) * 100) / 100).toString();
    }
}