
import { Link } from "react-router-dom";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link to="#" className="group animate-scale-in">
      <div className="overflow-hidden rounded-lg hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 relative">
        <div className="relative overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            {article.category}
          </div>
        </div>
        <div className="p-4 bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <h3 className="text-lg font-medium group-hover:text-primary transition-colors duration-300 relative z-10">{article.title}</h3>
          <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors duration-300 relative z-10">{article.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
