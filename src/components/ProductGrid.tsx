import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/contexts/CartContext";

interface ProductGridProps {
  selectedCategory: string;
}

const products: Product[] = [
  // Productos para perros
  { id: 1, name: "Alimento Premium para Perros", price: 45.99, image: "🥘", category: "dogs", description: "Alimento balanceado de alta calidad para perros adultos" },
  { id: 2, name: "Collar Ajustable", price: 15.99, image: "🦮", category: "dogs", description: "Collar cómodo y resistente con hebilla de seguridad" },
  { id: 3, name: "Juguete Pelota", price: 8.99, image: "🎾", category: "dogs", description: "Pelota de goma resistente para juegos y ejercicio" },
  { id: 4, name: "Cama Ortopédica", price: 89.99, image: "🛏️", category: "dogs", description: "Cama ergonómica con soporte ortopédico" },
  
  // Productos para gatos
  { id: 5, name: "Arena para Gatos", price: 12.99, image: "🪣", category: "cats", description: "Arena aglomerante con control de olores" },
  { id: 6, name: "Rascador Torre", price: 65.99, image: "🏗️", category: "cats", description: "Torre rascador con múltiples niveles y juguetes" },
  { id: 7, name: "Alimento Gatos Adultos", price: 38.99, image: "🍽️", category: "cats", description: "Alimento completo y balanceado para gatos adultos" },
  { id: 8, name: "Transportadora", price: 55.99, image: "🧳", category: "cats", description: "Transportadora segura y cómoda para viajes" },
  
  // Productos para aves
  { id: 9, name: "Jaula Grande", price: 125.99, image: "🏠", category: "birds", description: "Jaula espaciosa con accesorios incluidos" },
  { id: 10, name: "Semillas Mixtas", price: 18.99, image: "🌾", category: "birds", description: "Mezcla nutritiva de semillas para aves" },
  { id: 11, name: "Columpio para Aves", price: 9.99, image: "🎪", category: "birds", description: "Columpio divertido para el entretenimiento" },
  
  // Productos para peces
  { id: 12, name: "Acuario 50L", price: 89.99, image: "🐠", category: "fish", description: "Acuario completo con filtro y iluminación LED" },
  { id: 13, name: "Alimento para Peces", price: 14.99, image: "🍤", category: "fish", description: "Alimento en escamas de alta calidad" },
  { id: 14, name: "Decoración Acuario", price: 22.99, image: "🪨", category: "fish", description: "Set de decoraciones naturales para acuario" },
];

export const ProductGrid: React.FC<ProductGridProps> = ({ selectedCategory }) => {
  console.log("🛍️ ProductGrid component rendered");
  console.log("🎯 ProductGrid - Selected category:", selectedCategory);
  console.log("📦 ProductGrid - Total products available:", products.length);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  console.log("🔍 ProductGrid - Filtered products count:", filteredProducts.length);
  console.log("📋 ProductGrid - Filtered products:", filteredProducts.map(p => ({ id: p.id, name: p.name, category: p.category })));

  if (filteredProducts.length === 0) {
    console.log("⚠️ ProductGrid - No products found for category:", selectedCategory);
  } else {
    console.log("✅ ProductGrid - Products found, rendering grid");
  }

  return (
    <section className="py-16 bg-gray-50" data-section="products">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Nuestros Productos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            console.log("🎴 Rendering ProductCard for:", product.name);
            return (
              <ProductCard key={product.id} product={product} />
            );
          })}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay productos disponibles en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
};