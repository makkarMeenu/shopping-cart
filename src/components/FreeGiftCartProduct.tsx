import { CartItem } from "../types/shopping-cart";

const FreeGiftCartProduct = ({ product }: { product: CartItem }) => {

    return (
        <div className="border border-gray-300 rounded-md p-4 flex justify-between">
            <div>
                <h2>{product.name}</h2>
                <p>{product.price} * {product.quantity}</p>
            </div>
            <div>
                <p className="text-green-500">Free Gift</p>
            </div>
        </div>
    )
}

export default FreeGiftCartProduct;