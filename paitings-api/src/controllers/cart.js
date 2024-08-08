// sample data to simulate a database
let carts = [];

const CartsController = {
    getCartItems: (req, res) => {
        res.json(carts);
    },

    getCart: (req, res) => {
        const cart = carts.find((cart) => cart.id === req.params.id);
        if (!cart) {
            res.json({});
        }else{
            res.json(cart);
        }
    },

    createCart: (req, res) => {
        const { 
            id,
            name,
            description,
            price,
            imageUrl,
            quantity,
            category
         } = req.body;
        let cart = {
            id,
            name,
            description,
            price,
            imageUrl,
            quantity,
            category
        };

        cart.id = Date.now().toString();
        carts.push(cart);
        res.status(201).json([cart]);
    },

    updateCart: (req, res) => {
        const index = carts.findIndex(cart => cart.id === req.params.id);
        console.log(index);
        if (index < 0) {
            return res.status(404).json({ message: "cart not found" });
        }
        const { 
            id,
            name,
            description,
            price,
            imageUrl,
            quantity,
            category
         } = req.body;
        const updateCart = {
            id,
            name,
            description,
            price,
            imageUrl,
            quantity,
            category
        };
        carts[index] = updateCart;
        res.json([updateCart]);
    },

    deleteCart: (req, res) => {
        const index = carts.findIndex(cart => cart.id === req.params.id);
        if (index >= 0){
            carts.splice(index, 1);
        }
        res.json();
    },
    deleteWholeCart: (req, res) => {
        carts = [];
        res.json();
    },
};

module.exports = { CartsController, carts };
