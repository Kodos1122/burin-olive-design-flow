
export type Review = {
  id: string;
  name: string;
  date: string;
  rating: number;
  quote: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sophia Carter",
    date: "May 15, 2024",
    rating: 5,
    quote: "The best olive oil I've ever tasted! The flavor is so rich and smooth, it elevates every dish I use it in.",
    avatar: "/placeholder.svg",
  },
  {
    id: "2",
    name: "James Lee",
    date: "June 02, 2024",
    rating: 5,
    quote: "Exceptional quality and beautiful packaging. The infused oil is my favorite for making dressings.",
    avatar: "/placeholder.svg",
  },
];
