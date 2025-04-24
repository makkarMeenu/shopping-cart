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
        <div className="border border-gray-300 rounded-md p-4 flex flex-col gap-2 items-start">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.price}</p>

            {cart.find((item) => item.id === product.id && item.quantity > 0) ? (
                <div className="flex justify-between items-center gap-2">
                    <button className="quantity-button-minus" onClick={() => onUpdateQuantity(product, (cart.find((item) => item.id === product.id)?.quantity || 0) - 1)}>-</button>
                    <p>{cart.find((item) => item.id === product.id)?.quantity}</p>
                    <button className="quantity-button-plus" onClick={() => onUpdateQuantity(product, (cart.find((item) => item.id === product.id)?.quantity || 0) + 1)}>+</button>
                </div>
            ) : (
                <div className="flex justify-between">
                    <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>Add to Cart</button>
                </div>
            )}
        </div>
    )
}

export default ProductCard;