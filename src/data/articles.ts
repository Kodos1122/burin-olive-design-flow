
export type Article = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

export const articles: Article[] = [
  {
    id: "1",
    title: "Mediterranean Olive Oil Cake",
    description: "A light and flavorful cake perfect for any occasion.",
    image: "https://images.unsplash.com/photo-1607921511229-7652758aac74?q=80&w=1935&auto=format&fit=crop",
    category: "Recipes",
  },
  {
    id: "2",
    title: "Olive Oil and Herb Roasted Chicken",
    description: "A simple yet delicious recipe for a weeknight dinner.",
    image: "https://images.unsplash.com/photo-1618310912286-330a70d58814?q=80&w=1887&auto=format&fit=crop",
    category: "Recipes",
  },
  {
    id: "3",
    title: "The Health Benefits of Olive Oil",
    description: "Discover the nutritional advantages of using olive oil.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
    category: "Health",
  },
  {
    id: "4",
    title: "Olive Oil Tasting Guide",
    description: "Learn the nuances of different olive oils.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop",
    category: "Guides",
  },
];
