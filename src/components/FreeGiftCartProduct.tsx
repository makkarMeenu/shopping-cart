import { CartItem } from "../types/shopping-cart";

const FreeGiftCartProduct = ({ product }: { product: CartItem }) => {

    return (
        <div className="flex justify-between bg-white rounded-md p-3 items-center">
            <div className="flex flex-col gap-1 text-left text-gray-700">
                <h2 className="text-md font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-700">₹{product.price} x {product.quantity} = ₹{product.price * product.quantity}</p>
            </div>
            <div>
                <p className="text-green-700 font-semibold bg-green-200 rounded-lg py-1 px-2 text-xs ">Free Gift</p>
            </div>
        </div>
    )
}

export default FreeGiftCartProduct;