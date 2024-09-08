import { useState, useEffect } from "react";
import "./Home.scss";
import ArticleCard from "../ArticleCard/ArticleCard";

const Home = () => {
    const [topStories, setTopStories] = useState<any[]>([]);

    const getTopStories = () => {
        fetch(
            "https://content.guardianapis.com/uk-news?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => setTopStories(data["response"]["results"]))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getTopStories();
    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let rows = [];
    //             const response = await fetch(
    //                 "https://content.guardianapis.com/technology?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
    //             );
    //             const result = await response.json();
    //             rows = result;
    //             setTopStories(result["response"]["results"]);
    //             console.log(topStories);
    //         } catch (error) {
    //             console.log("Error fetching data: ", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    return (
        <div className="homeContainer">
            <h1 className="homeContainer__heading">Top Stories</h1>
            <div className="homeContainer__homeArticles">
                {topStories.map((story) => {
                    return (
                        <div>
                            {topStories && (
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

        // <div>
        //     {topStories && (
        //         <ArticleCard
        //             webTitle={topStories[1]["fields"]["headline"]}
        //             urlToImage={topStories[1]["fields"]["thumbnail"]}
        //             publishedDate={
        //                 topStories[1]["fields"]["firstPublicationDate"]
        //             }
        //         />
        //     ) ? (
        //         <ArticleCard
        //             webTitle={topStories[1]["fields"]["headline"]}
        //             urlToImage={topStories[1]["fields"]["thumbnail"]}
        //             publishedDate={
        //                 topStories[1]["fields"]["firstPublicationDate"]
        //             }
        //         />
        //     ) : (
        //         "Loading Content"
        //     )}
        // </div>
    );
};

export default Home;
