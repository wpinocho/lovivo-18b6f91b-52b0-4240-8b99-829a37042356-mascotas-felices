import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  console.log("🦸 Hero component rendered successfully");
  console.log("🎨 Hero component - Displaying main banner");

  const handleProductsClick = () => {
    console.log("🛍️ 'Ver Productos' button clicked in Hero");
    // Scroll to products section
    const productsSection = document.querySelector('[data-section="products"]');
    if (productsSection) {
      console.log("📍 Scrolling to products section");
      productsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("⚠️ Products section not found");
    }
  };

  const handleServicesClick = () => {
    console.log("🔧 'Nuestros Servicios' button clicked in Hero");
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Todo para tu
              <span className="text-primary block">mascota favorita</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubre la mejor selección de productos para perros, gatos, aves y peces. 
              Calidad garantizada y los mejores precios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" onClick={handleProductsClick}>
                Ver Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={handleServicesClick}>
                Nuestros Servicios
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-8xl">🐕</span>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-3xl">🐱</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};