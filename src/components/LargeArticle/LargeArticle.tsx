import "./LargeArticle.scss";

type LargeArticleProps = {
    webTitle: string;
    urlToImage: string;
    content?: string;
    author?: string;
    description?: string;
    publishedDate?: string;
    trailText?: string;
};

const LargeArticle = ({
    webTitle,
    urlToImage,
    publishedDate,
    trailText,
}: LargeArticleProps) => {
    return (
        <div className="largeCard">
            <img className="largeCard__image" src={urlToImage} />
            <h1 className="largeCard__heading">{webTitle}</h1>
            <p className="largeCard__byline">{trailText}</p>
            <p className="largeCard__date">{publishedDate?.slice(0, 10)}</p>
        </div>
    );
};

export default LargeArticle;
