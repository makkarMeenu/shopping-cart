import { useState } from 'react'
import './App.css'
import { PRODUCTS } from './data/products'
import type { CartItem, Product } from './types/shopping-cart';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import CartSummary from './components/CartSummary';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  }

  const removeFromCart = (product: Product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  }

  const updateQuantity = (product: Product, quantity: number) => {
    setCart((prevCart) => prevCart.map((item) => item.id === product.id ? { ...item, quantity } : item));
  }


  return (
    <div className="p-4 bg-gray-200 w-[360px] sm:w-[440px] md:w-[640px] lg:w-[768px] xl:w-[1024px] mx-auto bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
      <div className="flex justify-between flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between flex-col gap-2">
            <h2 className="text-xl font-bold text-left text-gray-700">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} cart={cart} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} onUpdateQuantity={updateQuantity} />
              ))}
            </div>
          </div>
          <CartSummary cart={cart} />
          <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        </div>
      </div>
    </div>
  )
}

export default App
