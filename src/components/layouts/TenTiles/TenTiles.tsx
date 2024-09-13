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
                {content.map((story) => {
                    return (
                        <div key={story["id"]}>
                            {content && (
                                <ArticleCard
                                    webTitle={story["fields"]["headline"]}
                                    urlToImage={story["fields"]["thumbnail"]}
                                    publishedDate={
                                        story["fields"]["firstPublicationDate"]
                                    }
                                />
                            ) ? (
                                <div className="contentContainer__article">
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
                                </div>
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
