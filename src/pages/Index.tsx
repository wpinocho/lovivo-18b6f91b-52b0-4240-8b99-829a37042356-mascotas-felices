import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  console.log("🏠 Index page rendered with category:", selectedCategory);
  console.log("📊 Index page state:", { selectedCategory });

  const handleCategoryChange = (category: string) => {
    console.log("🔄 Category change requested from:", selectedCategory, "to:", category);
    setSelectedCategory(category);
    console.log("✅ Category changed successfully to:", category);
  };

  console.log("🎯 Index page about to render components");

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Categories 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        <ProductGrid selectedCategory={selectedCategory} />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;