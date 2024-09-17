import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./Banner.scss";
import { Link } from "react-router-dom";

type BannerProps = {
    url: string;
    heading?: string;
    colour: string;
};

const Banner = ({ url, heading, colour }: BannerProps) => {
    const [weather, setWeather] = useState<any[]>([]);

    const getWeather = () => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => setWeather(data["response"]["results"]))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <>
            <div className={`bannerContainer bannerContainer--${colour}`}>
                <h1 className="bannerContainer__heading">{heading}</h1>
                <div className="bannerContainer__homeArticles">
                    {weather.slice(0, 5).map((story) => {
                        return (
                            <div key={story.id}>
                                {weather && (
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
                                    <Link
                                        to={`/${story.webTitle}`}
                                        state={{ story }}
                                    >
                                        <div className="bannerContainer__article">
                                            <ArticleCard
                                                webTitle={
                                                    story["fields"]["headline"]
                                                }
                                                urlToImage={
                                                    story["fields"]["thumbnail"]
                                                }
                                                publishedDate={
                                                    story["fields"][
                                                        "firstPublicationDate"
                                                    ]
                                                }
                                            />
                                        </div>
                                    </Link>
                                ) : (
                                    "Loading Content..."
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={`bannerContainerLess bannerContainer--${colour}`}>
                <h1 className="bannerContainerLess__heading">{heading}</h1>
                <div className="bannerContainerLess__homeArticles">
                    {weather.slice(0, 4).map((story) => {
                        return (
                            <div key={story.id}>
                                {weather && (
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
                                    <Link
                                        to={`/${story.webTitle}`}
                                        state={{ story }}
                                    >
                                        <div className="bannerContainerLess__article">
                                            <ArticleCard
                                                webTitle={
                                                    story["fields"]["headline"]
                                                }
                                                urlToImage={
                                                    story["fields"]["thumbnail"]
                                                }
                                                publishedDate={
                                                    story["fields"][
                                                        "firstPublicationDate"
                                                    ]
                                                }
                                            />
                                        </div>
                                    </Link>
                                ) : (
                                    "Loading Content..."
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Banner;
