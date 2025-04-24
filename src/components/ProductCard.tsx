import { useEffect } from "react";
import { CartItem, Product } from "../types/shopping-cart";

const ProductCard = ({ product, cart, onAddToCart, onRemoveFromCart, onUpdateQuantity }: { product: Product, cart: CartItem[], onAddToCart: (product: Product) => void, onRemoveFromCart: (product: Product) => void, onUpdateQuantity: (product: Product, quantity: number) => void }) => {
    useEffect(() => {
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem?.quantity === 0) {
            onRemoveFromCart(product);
        }
    }, [cart]);
    return (
        <div className="border bg-white rounded-md p-3 flex flex-col gap-2 items-start min-w-[150px]">
            <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
            <p className="text-sm font-semibold text-gray-700">₹{product.price}</p>

            {cart.find((item) => item.id === product.id && item.quantity > 0) ? (
                <div className="flex items-center gap-2 w-full ml-auto justify-end">
                    <button className="quantity-button-minus" onClick={() => onUpdateQuantity(product, (cart.find((item) => item.id === product.id)?.quantity || 0) - 1)}>-</button>
                    <p className="text-md font-semibold text-gray-700">{cart.find((item) => item.id === product.id)?.quantity}</p>
                    <button className="quantity-button-plus" onClick={() => onUpdateQuantity(product, (cart.find((item) => item.id === product.id)?.quantity || 0) + 1)}>+</button>
                </div>
            ) : (
                <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>Add to Cart</button>
            )}
        </div>
    )
}

export default ProductCard;