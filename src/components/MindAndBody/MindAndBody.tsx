import { useState, useEffect } from "react";
import ArticleCard from "../layouts/ArticleCard/ArticleCard";
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
                {wellness.map((story) => {
                    return (
                        <div key={story.id}>
                            {wellness && (
                                <ArticleCard
                                    webTitle={story["fields"]["headline"]}
                                    urlToImage={story["fields"]["thumbnail"]}
                                    publishedDate={
                                        story["fields"]["firstPublicationDate"]
                                    }
                                />
                            ) ? (
                                <ArticleCard
                                    webTitle={story["fields"]["headline"]}
                                    urlToImage={story["fields"]["thumbnail"]}
                                    publishedDate={
                                        story["fields"]["firstPublicationDate"]
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
