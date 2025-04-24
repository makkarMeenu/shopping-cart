import { useEffect } from "react";
import { CartItem } from "../types/shopping-cart";

const CartProduct = ({ product, onRemoveFromCart, onUpdateQuantity }: { product: CartItem, onRemoveFromCart: (product: CartItem) => void, onUpdateQuantity: (product: CartItem, quantity: number) => void }) => {
    useEffect(() => {
        if (product.quantity === 0) {
            onRemoveFromCart(product);
        }
    }, [product.quantity]);
    return (
        <div className="flex justify-between text-left bg-white rounded-md p-3">
            <div>
                <h2 className="text-md font-semibold text-gray-700">{product.name}</h2>
                <p className="text-sm text-gray-700">₹{product.price} x {product.quantity} = ₹{product.price * product.quantity}</p>
            </div>
            <div className="flex items-center gap-2">
                <button className="quantity-button-minus" onClick={() => onUpdateQuantity(product, product.quantity - 1)}>-</button>
                <p className="text-md font-semibold text-gray-700">{product.quantity}</p>
                <button className="quantity-button-plus" onClick={() => onUpdateQuantity(product, product.quantity + 1)}>+</button>
            </div>
        </div>
    )
}

export default CartProduct;