import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  console.log("Index page rendered with category:", selectedCategory);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Categories 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
        <ProductGrid selectedCategory={selectedCategory} />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;