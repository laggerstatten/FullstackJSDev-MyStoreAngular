import CartItems from './Cart-Items'

type Cart = {
    items: { [id: number]: CartItems } | null,
    cartPriceTotal: number
};

export default Cart;