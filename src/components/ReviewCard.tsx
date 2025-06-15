
import { Review } from "@/data/reviews";
import { Star, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="p-8 bg-card border border-border/50 rounded-lg shadow-xl flex flex-col items-center text-center">
      <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
        <AvatarImage src={review.avatar} alt={review.name} />
        <AvatarFallback><User /></AvatarFallback>
      </Avatar>
      <div className="mb-4">
        <p className="font-bold text-xl">{review.name}</p>
        <p className="text-sm text-muted-foreground">{review.date}</p>
      </div>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-6 w-6 ${i < review.rating ? 'text-primary fill-primary' : 'text-muted-foreground/50'}`} />
        ))}
      </div>
      <p className="text-lg text-muted-foreground italic leading-relaxed">"{review.quote}"</p>
    </div>
  );
};

export default ReviewCard;
