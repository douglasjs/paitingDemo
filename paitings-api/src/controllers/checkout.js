// sample data to simulate a database
let checkout = [];

const CheckoutController = {
    getCheckoutItems: (req, res) => {
        res.json(checkout);
    },

    checkout: (req, res) => {
        let checkoutOrder = {
            items : req.body
        };
        let totalPrice = 0;
        for(let item of checkoutOrder.items) {
            totalPrice += item.price;
        }
        checkoutOrder.orderId = Date.now().toString();
        checkoutOrder.totalPrice = totalPrice;
        checkout.push(checkoutOrder);
        console.log(checkout);
        res.status(201).json();
    },
};

module.exports = { CheckoutController, checkout };
