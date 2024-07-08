import CartItems from './Cart-Items'

type Cart = {
    items: { [id: number]: CartItems } | null,
    cartValue: number
};

export default Cart;