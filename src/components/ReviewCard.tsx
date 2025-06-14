
import { Review } from "@/data/reviews";
import { Star, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="p-6 border rounded-lg">
      <div className="flex items-center mb-4">
        <Avatar>
          <AvatarImage src={review.avatar} alt={review.name} />
          <AvatarFallback><User /></AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="font-semibold">{review.name}</p>
          <p className="text-sm text-muted-foreground">{review.date}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
        ))}
      </div>
      <p className="text-muted-foreground">"{review.quote}"</p>
    </div>
  );
};

export default ReviewCard;
