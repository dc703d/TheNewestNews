import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./MindAndBody.scss";

const MindAndBody = () => {
    const [wellness, setWellness] = useState<any[]>([]);

    const getWellness = () => {
        fetch(
            "https://content.guardianapis.com/wellness?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
        )
            .then((res) => {
                return res.json();
            })
            .then((data) =>
                setWellness(data["response"]["results"].slice(0, 5))
            )
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getWellness();
    }, []);

    return (
        <div className="wellnessContainer">
            <h1 className="wellnessContainer__heading">Mind & Body</h1>
            <div className="wellnessContainer__homeArticles">
                {wellness.map((story, index) => {
                    return (
                        <div>
                            {wellness && (
                                <ArticleCard
                                    webTitle={
                                        wellness[index]["fields"]["headline"]
                                    }
                                    urlToImage={
                                        wellness[index]["fields"]["thumbnail"]
                                    }
                                    publishedDate={
                                        wellness[index]["fields"][
                                            "firstPublicationDate"
                                        ]
                                    }
                                />
                            ) ? (
                                <ArticleCard
                                    webTitle={
                                        wellness[index]["fields"]["headline"]
                                    }
                                    urlToImage={
                                        wellness[index]["fields"]["thumbnail"]
                                    }
                                    publishedDate={
                                        wellness[index]["fields"][
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

export default MindAndBody;
