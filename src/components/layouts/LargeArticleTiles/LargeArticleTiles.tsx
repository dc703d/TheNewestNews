import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import LargeArticle from "../LargeArticle/LargeArticle";
import "./LargeArticleTiles.scss";

type LargeArticleTilesProps = {
    url: string;
    heading?: string;
};

const LargeArticleTiles = ({ url, heading }: LargeArticleTilesProps) => {
    const [topStories, setTopStories] = useState<any[]>([]);
    const [isVisible, setIsVisible] = useState(true);

    const getTopStories = () => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) =>
                setTopStories(data["response"]["results"].slice(0, 7))
            )
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getTopStories();
    }, []);

    return (
        <div className="articleContainer">
            <h1>{heading}</h1>
            <div className="articleContainer__content">
                <div className="articleContainer__largeArticle">
                    {topStories.slice(0, 1).map((story) => {
                        return (
                            <div key={story.id}>
                                {topStories && (
                                    <LargeArticle
                                        webTitle={story["fields"]["headline"]}
                                        urlToImage={
                                            story["fields"]["thumbnail"]
                                        }
                                        publishedDate={
                                            story["fields"][
                                                "firstPublicationDate"
                                            ]
                                        }
                                        trailText={story["fields"]["trailText"]}
                                        key={story.id}
                                    />
                                ) ? (
                                    <LargeArticle
                                        webTitle={story["fields"]["headline"]}
                                        urlToImage={
                                            story["fields"]["thumbnail"]
                                        }
                                        publishedDate={
                                            story["fields"][
                                                "firstPublicationDate"
                                            ]
                                        }
                                        trailText={story["fields"]["trailText"]}
                                        key={story.id}
                                    />
                                ) : (
                                    "Loading Content..."
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="articleContainer__homeArticles">
                    {topStories.slice(1, 7).map((story) => {
                        return (
                            <div key={story.id}>
                                {topStories && (
                                    <ArticleCard
                                        webTitle={story["fields"]["headline"]}
                                        urlToImage={
                                            story["fields"]["thumbnail"]
                                        }
                                        publishedDate={
                                            story["fields"][
                                                "firstPublicationDate"
                                            ]
                                        }
                                        key={story.id}
                                    />
                                ) ? (
                                    <ArticleCard
                                        webTitle={story["fields"]["headline"]}
                                        urlToImage={
                                            story["fields"]["thumbnail"]
                                        }
                                        publishedDate={
                                            story["fields"][
                                                "firstPublicationDate"
                                            ]
                                        }
                                        key={story.id}
                                    />
                                ) : (
                                    "Loading Content..."
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default LargeArticleTiles;
