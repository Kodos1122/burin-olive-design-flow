
export type Product = {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  image: string;
  description: string;
  originStory: string;
  nutrition: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Burin Extra Virgin Olive Oil",
    subtitle: "Our signature extra virgin olive oil, perfect for everyday use.",
    price: 25.00,
    image: "/lovable-uploads/45539f5c-43f8-4aa8-bd23-5bccc4fc6760.png",
    description: "Experience the rich, fruity flavor of Burin Olive Oil, made from hand-picked olives and cold-pressed to preserve its natural goodness. Perfect for drizzling, dipping, or cooking.",
    originStory: "Our olive oil comes from the sun-drenched groves of Burin, where generations of farmers have cultivated the land with care and expertise. Each bottle is a testament to our commitment to quality and tradition.",
    nutrition: [
      { label: "Calories", value: "120" }, { label: "Fat", value: "14g" },
      { label: "Sodium", value: "0mg" }, { label: "Carbohydrates", value: "0g" },
      { label: "Protein", value: "0g" }, { label: "Cholesterol", value: "0mg" },
    ],
  },
  {
    id: "2",
    name: "Burin Infused Olive Oil",
    subtitle: "A blend of our finest olive oil infused with natural herbs and spices.",
    price: 28.00,
    image: "/lovable-uploads/45539f5c-43f8-4aa8-bd23-5bccc4fc6760.png",
    description: "A delightful infusion of aromatic herbs in our premium olive oil. It adds a burst of flavor to salads, marinades, and roasted vegetables. A culinary must-have.",
    originStory: "Inspired by traditional Mediterranean recipes, our infused oil is crafted in small batches to ensure the perfect harmony of flavors. The herbs are sourced from local organic farms.",
    nutrition: [
      { label: "Calories", value: "120" }, { label: "Fat", value: "14g" },
      { label: "Sodium", value: "0mg" }, { label: "Carbohydrates", value: "0g" },
      { label: "Protein", value: "0g" }, { label: "Cholesterol", value: "0mg" },
    ],
  },
  {
    id: "3",
    name: "Burin Organic Olive Oil",
    subtitle: "Certified organic olive oil, produced with sustainable farming practices.",
    price: 30.00,
    image: "/lovable-uploads/45539f5c-43f8-4aa8-bd23-5bccc4fc6760.png",
    description: "Our organic olive oil is for those who seek purity. It's made from olives grown without pesticides or chemicals, reflecting our deep respect for nature.",
    originStory: "Sustainability is at the heart of our organic line. We employ biodiversity-friendly farming methods that protect the soil and yield olives of exceptional quality.",
    nutrition: [
      { label: "Calories", value: "120" }, { label: "Fat", value: "14g" },
      { label: "Sodium", value: "0mg" }, { label: "Carbohydrates", value: "0g" },
      { label: "Protein", value: "0g" }, { label: "Cholesterol", value: "0mg" },
    ],
  },
  {
    id: "4",
    name: "Burin Limited Edition",
    price: 35.00,
    image: "/lovable-uploads/45539f5c-43f8-4aa8-bd23-5bccc4fc6760.png",
    description: "A rare blend from a single harvest, this limited edition oil has a uniquely robust flavor profile. A collector's item for the true connoisseur.",
    originStory: "Once a year, we select the finest olives from a special grove to create this exclusive oil. It's a celebration of a perfect harvest season.",
    nutrition: [
      { label: "Calories", value: "130" }, { label: "Fat", value: "15g" },
      { label: "Sodium", value: "0mg" }, { label: "Carbohydrates", value: "0g" },
      { label: "Protein", value: "0g" }, { label: "Cholesterol", value: "0mg" },
    ],
  },
];
