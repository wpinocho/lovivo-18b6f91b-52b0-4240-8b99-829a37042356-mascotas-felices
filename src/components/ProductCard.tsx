import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { Product, useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("Adding product to cart:", product.name);
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`);
  };

  const getCategoryName = (category: string) => {
    const categories: { [key: string]: string } = {
      dogs: "Perros",
      cats: "Gatos", 
      birds: "Aves",
      fish: "Peces"
    };
    return categories[category] || category;
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="text-xs">
            {getCategoryName(product.category)}
          </Badge>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center py-6">
          <span className="text-6xl">{product.image}</span>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <h4 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h4>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleAddToCart}
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};