import { CartItem } from "../types/shopping-cart";
import CartProduct from "./CartProduct";
import { FREE_GIFT, THRESHOLD } from "../data/products";
import FreeGiftCartProduct from "./FreeGiftCartProduct";

const Cart = ({ cart, removeFromCart, updateQuantity }: { cart: CartItem[], removeFromCart: (product: CartItem) => void, updateQuantity: (product: CartItem, quantity: number) => void }) => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    if (cart.length === 0) {
        return (
            <div>
                <h2>Your cart is empty</h2>
                <p>Add some products to your cart</p>
            </div>
        )
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-left">Cart Items</h2>
            <div className="grid gap-4">
                {cart.map((item) => (
                    <CartProduct key={item.id} product={item} onRemoveFromCart={removeFromCart} onUpdateQuantity={updateQuantity} />
                ))}
                {total >= THRESHOLD && (
                    <FreeGiftCartProduct key={"free-item"} product={{ ...FREE_GIFT, quantity: 1 }} />
                )}
            </div>

        </div>
    )
}

export default Cart;