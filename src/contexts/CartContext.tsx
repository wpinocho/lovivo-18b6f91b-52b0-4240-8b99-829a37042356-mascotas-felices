import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  console.log("🛒 CartProvider initialized");
  console.log("📊 CartProvider - Current cart items:", cartItems.length);

  const addToCart = (product: Product) => {
    console.log("➕ CartProvider - Adding product to cart:", product.name);
    console.log("📦 CartProvider - Product details:", { id: product.id, price: product.price, category: product.category });
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        console.log("🔄 CartProvider - Product already exists, updating quantity from", existingItem.quantity, "to", existingItem.quantity + 1);
        const updatedItems = prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        console.log("✅ CartProvider - Cart updated with existing product");
        return updatedItems;
      } else {
        console.log("🆕 CartProvider - Adding new product to cart");
        const newItems = [...prevItems, { ...product, quantity: 1 }];
        console.log("✅ CartProvider - New product added to cart");
        return newItems;
      }
    });
  };

  const removeFromCart = (productId: number) => {
    console.log("🗑️ CartProvider - Removing product from cart, ID:", productId);
    setCartItems(prevItems => {
      const filteredItems = prevItems.filter(item => item.id !== productId);
      console.log("✅ CartProvider - Product removed, new cart size:", filteredItems.length);
      return filteredItems;
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    console.log("🔢 CartProvider - Updating quantity for product ID:", productId, "to:", quantity);
    
    if (quantity <= 0) {
      console.log("⚠️ CartProvider - Quantity is 0 or less, removing product");
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
      console.log("✅ CartProvider - Quantity updated successfully");
      return updatedItems;
    });
  };

  const clearCart = () => {
    console.log("🧹 CartProvider - Clearing entire cart");
    console.log("📊 CartProvider - Items being cleared:", cartItems.length);
    setCartItems([]);
    console.log("✅ CartProvider - Cart cleared successfully");
  };

  const getTotalPrice = () => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log("💰 CartProvider - Calculating total price:", total);
    return total;
  };

  const getTotalItems = () => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    console.log("📊 CartProvider - Calculating total items:", totalItems);
    return totalItems;
  };

  console.log("🎯 CartProvider - Rendering with", cartItems.length, "items in cart");

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    console.error("❌ useCart must be used within a CartProvider");
    throw new Error('useCart must be used within a CartProvider');
  }
  console.log("✅ useCart hook called successfully");
  return context;
};