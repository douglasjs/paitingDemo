export class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    quantity: number;
    category: string;
    constructor(id = 0, name = "", price = 0, description = '', imageUrl = '', quantity = 0, category = '') {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.quantity = quantity;
        this.category = category;
    }
}
