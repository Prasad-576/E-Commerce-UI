import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  // State to track how many items are in the cart
  const [cartCount, setCartCount] = useState(0);

  // Function to add item to the cart
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Products onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;
