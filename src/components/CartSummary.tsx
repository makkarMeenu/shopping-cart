import { CartItem } from "../types/shopping-cart";
import { THRESHOLD, FREE_GIFT } from "../data/products";
import ProgressBar from "./ProgressBar";

const CartSummary = ({ cart }: { cart: CartItem[] }) => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-left text-gray-700">Cart Summary</h2>
            <div className="flex flex-col bg-white rounded-md p-3 gap-4">
                <div className="flex justify-between text-gray-700 font-semibold">
                    <div>Subtotal:</div>
                    <div>₹{total}</div>
                </div>
                <div className="flex border-t border-gray-500" />
                {total < THRESHOLD ? (
                    <div className="flex flex-col gap-2 text-gray-700 font-semibold bg-blue-50 p-3 rounded-md">
                        <p className="text-sm text-gray-700 text-left">Add ₹{THRESHOLD - total} more to get a FREE {FREE_GIFT.name}!</p>
                        <ProgressBar value={total} max={THRESHOLD} />
                    </div>
                ) : (
                    <div className="flex flex-col gap-2 font-semibold text-left text-gray-700 bg-white">
                        <p className="text-sm text-gray-700">You got a free {FREE_GIFT.name}!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartSummary;