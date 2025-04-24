import { CartItem } from "../types/shopping-cart";
import { THRESHOLD, FREE_GIFT } from "../data/products";
import ProgressBar from "./ProgressBar";

const CartSummary = ({ cart }: { cart: CartItem[] }) => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h2 className="text-2xl font-bold text-left">Cart Summary</h2>
            <div className="flex justify-between">
                <div>Subtotal:</div>
                <div>{total}</div>
            </div>
            {total < THRESHOLD ? (
                <div>
                    <p>Add {THRESHOLD - total} more to get free {FREE_GIFT.name}</p>
                    <ProgressBar value={total} max={THRESHOLD} />
                </div>
            ) : (
                <div>
                    <p>You got a free {FREE_GIFT.name}!</p>
                </div>
            )}
        </div>
    )
}

export default CartSummary;