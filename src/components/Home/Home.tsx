import { useState, useEffect } from "react";
import "./Home.scss";
import ArticleCard from "../ArticleCard/ArticleCard";
import LargeArticle from "../LargeArticle/LargeArticle";

const Home = () => {
    const [topStories, setTopStories] = useState<any[]>([]);

    const getTopStories = () => {
        fetch(
            "https://content.guardianapis.com/uk-news?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
        )
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
        <div className="homeContainer">
            <div className="homeContainer__content">
                <div className="homeContainer__largeArticle">
                    {topStories.slice(0, 1).map((story) => {
                        return (
                            <div>
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
                                    />
                                ) : (
                                    "Loading Content..."
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="homeContainer__homeArticles">
                    {topStories.slice(1, 7).map((story) => {
                        return (
                            <div>
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

export default Home;
