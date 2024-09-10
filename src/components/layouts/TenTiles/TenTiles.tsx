import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./TenTiles.scss";

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
        <div className="contentContainer">
            <h1 className="contentContainer__heading">{heading}</h1>
            <div className="contentContainer__contentArticles">
                {content.map((story, index) => {
                    return (
                        <div>
                            {content && (
                                <ArticleCard
                                    webTitle={
                                        content[index]["fields"]["headline"]
                                    }
                                    urlToImage={
                                        content[index]["fields"]["thumbnail"]
                                    }
                                    publishedDate={
                                        content[index]["fields"][
                                            "firstPublicationDate"
                                        ]
                                    }
                                />
                            ) ? (
                                <ArticleCard
                                    webTitle={
                                        content[index]["fields"]["headline"]
                                    }
                                    urlToImage={
                                        content[index]["fields"]["thumbnail"]
                                    }
                                    publishedDate={
                                        content[index]["fields"][
                                            "firstPublicationDate"
                                        ]
                                    }
                                    key={story["id"]}
                                />
                            ) : (
                                "Loading Content..."
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TenTiles;
