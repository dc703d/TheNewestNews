import { useState, useEffect } from "react";
import "./World.scss";
import ArticleCard from "../ArticleCard/ArticleCard";

const World = () => {
    const [worldStories, setWorldStories] = useState<any[]>([]);

    const getWorldStories = () => {
        fetch(
            "https://content.guardianapis.com/world?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => setWorldStories(data["response"]["results"]))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getWorldStories();
    }, []);

    return (
        <div className="homeContainer">
            <h1 className="homeContainer__heading">Around the World</h1>
            <div className="homeContainer__homeArticles">
                {worldStories.map((story) => {
                    return (
                        <div>
                            {worldStories && (
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

export default World;
