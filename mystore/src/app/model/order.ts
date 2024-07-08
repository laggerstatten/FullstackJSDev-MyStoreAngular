import Cart from "./Cart"

type Order={
    cart:Cart,
    fullName: string,
    address:string,
    creditCardNumber: string
};

export default Order;