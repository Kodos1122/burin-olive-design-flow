
import { Link } from "react-router-dom";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link to="#" className="group">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 bg-card">
        <h3 className="text-lg font-medium">{article.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{article.description}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
