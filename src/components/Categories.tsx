import { Button } from "@/components/ui/button";

interface CategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", name: "Todos", icon: "🏪" },
  { id: "dogs", name: "Perros", icon: "🐕" },
  { id: "cats", name: "Gatos", icon: "🐱" },
  { id: "birds", name: "Aves", icon: "🐦" },
  { id: "fish", name: "Peces", icon: "🐠" },
];

export const Categories: React.FC<CategoriesProps> = ({ selectedCategory, onCategoryChange }) => {
  console.log("Categories component rendered, selected:", selectedCategory);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Categorías</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="lg"
              onClick={() => onCategoryChange(category.id)}
              className="flex items-center space-x-2 px-6 py-3"
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};