import { Article } from "@/lib/Article";
interface ArticleCardProps{
    article: Article;
}
const ArticleCard: React.FC<ArticleCardProps> = ({article}) => {

    return (
        <>
        <div className="flex flex-row justify-between box-content h-16 w-11/12 p-4 border-2 shadow-xl rounded bg-white text-black">
            <div className="flex flex-col">
                <div className="font-bold">{article.title}</div>
                <div>{article.content}</div>
            </div>
            <div>
                <button>Detail</button>
            </div>
        </div>
        </>
    );
}

export default ArticleCard;