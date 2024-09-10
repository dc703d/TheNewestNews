import { useState, useEffect } from "react";
import ArticleCard from "../layouts/ArticleCard/ArticleCard";
import "./WeatherBanner.scss";

const WeatherBanner = () => {
    const [weather, setWeather] = useState<any[]>([]);

    const getWeather = () => {
        fetch(
            "https://content.guardianapis.com/weather?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => setWeather(data["response"]["results"].slice(0, 5)))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <div className="weatherContainer">
            <h1 className="weatherContainer__heading">Weather</h1>
            <div className="weatherContainer__homeArticles">
                {weather.map((story, index) => {
                    return (
                        <div>
                            {weather && (
                                <ArticleCard
                                    webTitle={
                                        weather[index]["fields"]["headline"]
                                    }
                                    urlToImage={
                                        weather[index]["fields"]["thumbnail"]
                                    }
                                    publishedDate={
                                        weather[index]["fields"][
                                            "firstPublicationDate"
                                        ]
                                    }
                                />
                            ) ? (
                                <ArticleCard
                                    webTitle={
                                        weather[index]["fields"]["headline"]
                                    }
                                    urlToImage={
                                        weather[index]["fields"]["thumbnail"]
                                    }
                                    publishedDate={
                                        weather[index]["fields"][
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

export default WeatherBanner;
