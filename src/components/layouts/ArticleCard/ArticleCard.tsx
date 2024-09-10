import "./ArticleCard.scss";

type ArticleCardProps = {
    webTitle: string;
    urlToImage: string;
    content?: string;
    author?: string;
    description?: string;
    publishedDate?: string;
};

const ArticleCard = ({
    webTitle,
    urlToImage,
    publishedDate,
}: ArticleCardProps) => {
    return (
        <div className="card">
            <img className="card__image" src={urlToImage} />
            <h1 className="card__heading">{webTitle}</h1>
            <p className="card__date">{publishedDate?.slice(0, 10)}</p>
        </div>
    );
};

export default ArticleCard;
