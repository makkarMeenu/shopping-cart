import { useEffect } from "react";
import { CartItem } from "../types/shopping-cart";

const CartProduct = ({ product, onRemoveFromCart, onUpdateQuantity }: { product: CartItem, onRemoveFromCart: (product: CartItem) => void, onUpdateQuantity: (product: CartItem, quantity: number) => void }) => {
    useEffect(() => {
        if (product.quantity === 0) {
            onRemoveFromCart(product);
        }
    }, [product.quantity]);
    return (
        <div className="border border-gray-300 rounded-md p-4 flex justify-between">
            <div>
                <h2>{product.name}</h2>
                <p>{product.price} * {product.quantity}</p>
            </div>
            <div className="flex items-center gap-2">
                <button className="quantity-button-minus" onClick={() => onUpdateQuantity(product, product.quantity - 1)}>-</button>
                <p>{product.quantity}</p>
                <button className="quantity-button-plus" onClick={() => onUpdateQuantity(product, product.quantity + 1)}>+</button>
            </div>
        </div>
    )
}

export default CartProduct;