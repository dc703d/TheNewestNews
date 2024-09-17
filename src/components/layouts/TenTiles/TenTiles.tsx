import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./TenTiles.scss";
import { Link } from "react-router-dom";

type TenTilesProps = {
    url: string;
    heading?: string;
};

const TenTiles = ({ url, heading }: TenTilesProps) => {
    const [content, setContent] = useState<any[]>([]);

    const getContent = () => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => setContent(data["response"]["results"]))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getContent();
    }, []);

    return (
        <>
            <div className="contentContainer">
                <h1 className="contentContainer__heading">{heading}</h1>
                <div className="contentContainer__contentArticles">
                    {content.map((story) => {
                        return (
                            <div key={story["id"]}>
                                {content && (
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
                                    <div className="contentContainer__article">
                                        <Link
                                            to={`/${story.webTitle}`}
                                            state={{ story }}
                                        >
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
                                        </Link>
                                    </div>
                                ) : (
                                    "Loading Content..."
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="contentContainerLess">
                <h1 className="contentContainerLess__heading">{heading}</h1>
                <div className="contentContainerLess__contentArticles">
                    {content.slice(0, 8).map((story) => {
                        return (
                            <div key={story["id"]}>
                                {content && (
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
                                    <div className="contentContainerLess__article">
                                        <Link
                                            to={`/${story.webTitle}`}
                                            state={{ story }}
                                        >
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
                                        </Link>
                                    </div>
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

export default TenTiles;
