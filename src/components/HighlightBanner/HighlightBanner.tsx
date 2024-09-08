import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./HighlightBanner.scss";

const HighlightBanner = () => {
    const [highlights, setHighlights] = useState<any[]>([]);

    const getHighlights = () => {
        fetch(
            "https://content.guardianapis.com/weather?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
        )
            .then((res) => {
                return res.json();
            })
            .then((data) =>
                setHighlights(data["response"]["results"].slice(0, 5))
            )
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getHighlights();
    }, []);

    return (
        <div className="weatherContainer">
            <h1 className="weatherContainer__heading">Weather</h1>
            <div className="weatherContainer__homeArticles">
                {highlights.map((story, index) => {
                    return (
                        <div>
                            {highlights && (
                                <ArticleCard
                                    webTitle={
                                        highlights[index]["fields"]["headline"]
                                    }
                                    urlToImage={
                                        highlights[index]["fields"]["thumbnail"]
                                    }
                                    publishedDate={
                                        highlights[index]["fields"][
                                            "firstPublicationDate"
                                        ]
                                    }
                                />
                            ) ? (
                                <ArticleCard
                                    webTitle={
                                        highlights[index]["fields"]["headline"]
                                    }
                                    urlToImage={
                                        highlights[index]["fields"]["thumbnail"]
                                    }
                                    publishedDate={
                                        highlights[index]["fields"][
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
    );
};

export default HighlightBanner;
