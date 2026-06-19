const order = {
    orderId: "ORD001",
    itemName: "Laptop",
    price: 50000,
    isAvailable: true,
    userMembership: "Regular"
};


const processOrder = (order) => {

    if (order.isAvailable == false) {
        return "Order Rejected: Item Out of Stock";
    }

    let finalPrice = order.price;


    if (order.userMembership == "Premium") {
        finalPrice = order.price - (order.price * 20 / 100);
    }


    else if (order.userMembership == "Regular") {
        finalPrice = order.price - (order.price * 10 / 100);
    }

    return `Order successful for ${order.itemName}. Total amount to pay is $${finalPrice}.`;
};

function runOrder() {
    document.getElementById("result").innerHTML =
        processOrder(order);
}