// sample data to simulate a database
let products = [
    {
        id: "1",
        name: "Dog 1",
        description: "Description for Product 1",
        price: 100,
        imageUrl: "Product_01.jpg",
        quantity: 1,
        category: "Category 1",
    },
    {
        id: "2",
        name: "Dinosaur 2",
        description: "Description for Product 2",
        price: 200,
        imageUrl: "Product_02.jpg",
        quantity: 1,
        category: "Category 2",
    },
    {
        id: "3",
        name: "Lizard 3",
        description: "Description for Product 3",
        price: 300,
        imageUrl: "Product_03.jpg",
        quantity: 1,
        category: "Category 3",
    },
    {
        id: "4",
        name: "Bird 4",
        description: "Description for Product 4",
        price: 400,
        imageUrl: "Product_04.jpg",
        quantity: 1,
        category: "Category 4",
    },
    {
        id: "5",
        name: "Tiger 5",
        description: "Description for Product 5",
        price: 500,
        imageUrl: "Product_05.jpg",
        quantity: 1,
        category: "Category 5",
    },
    {
        id: "6",
        name: "Cat 6",
        description: "Description for Product 6",
        price: 520,
        imageUrl: "Product_06.jpg",
        quantity: 1,
        category: "Category 6",
    },
    {
        id: "7",
        name: "Tiger 7",
        description: "Description for Product 7",
        price: 600,
        imageUrl: "Product_07.jpg",
        quantity: 1,
        category: "Category 7",
    },
    {
        id: "8",
        name: "Bird 8",
        description: "Description for Product 8",
        price: 550,
        imageUrl: "Product_08.jpg",
        quantity: 1,
        category: "Category 8",
    },
    {
        id: "9",
        name: "Cat 9",
        description: "Description for Product 9",
        price: 350,
        imageUrl: "Product_09.jpg",
        quantity: 1,
        category: "Category 9",
    },
    {
        id: "10",
        name: "Deer 10",
        description: "Description for Product 10",
        price: 300,
        imageUrl: "Product_10.jpg",
        quantity: 1,
        category: "Category 10",
    },
    {
        id: "11",
        name: "Elephant 11",
        description: "Description for Product 11",
        price: 800,
        imageUrl: "Product_11.jpg",
        quantity: 1,
        category: "Category 11",
    },
    {
        id: "12",
        name: "Dog 12",
        description: "Description for Product 12",
        price: 450,
        imageUrl: "Product_12.jpg",
        quantity: 1,
        category: "Category 12",
    }
];

const ProductsController = {
    getProducts: (req, res) => {
        res.json(products);
    },

    getProduct: (req, res) => {
        const products = products.find((products) => products.id === req.params.id);
        if (!products) {
            res.json({});
        }else{
            res.json(products);
        }
    },

};

module.exports = { ProductsController };
