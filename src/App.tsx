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
    <div>
      <h1>Shopping Cart</h1>
      <div className="flex justify-between flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between flex-col gap-4">
            <h2 className="text-2xl font-bold text-left">Products</h2>
            <div className="grid grid-cols-4 gap-4">
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
