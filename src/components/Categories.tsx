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
  console.log("📂 Categories component rendered");
  console.log("🎯 Categories - Selected category:", selectedCategory);
  console.log("📋 Categories - Available categories:", categories.map(c => c.id));

  const handleCategoryClick = (categoryId: string) => {
    console.log("🔄 Category button clicked:", categoryId);
    console.log("📊 Previous category:", selectedCategory);
    
    if (selectedCategory === categoryId) {
      console.log("⚠️ Same category clicked, no change needed");
      return;
    }
    
    console.log("✅ Calling onCategoryChange with:", categoryId);
    onCategoryChange(categoryId);
    console.log("🎉 Category change completed");
  };

  return (
    <section className="py-12 bg-white" data-section="categories">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">Categorías</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;
            console.log(`🏷️ Rendering category ${category.name}, selected: ${isSelected}`);
            
            return (
              <Button
                key={category.id}
                variant={isSelected ? "default" : "outline"}
                size="lg"
                onClick={() => handleCategoryClick(category.id)}
                className="flex items-center space-x-2 px-6 py-3"
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};