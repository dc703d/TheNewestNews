import "./SearchSection.scss";
import { FormEvent, useEffect, useState } from "react";
import ArticleCard from "../layouts/ArticleCard/ArticleCard";
import SearchBar from "../SearchBar/SearchBar";

const SearchSection = () => {
    const [content, setContent] = useState<any[]>([]);

    const getContent = () => {
        fetch(
            "https://content.guardianapis.com/search?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => setContent(data["response"]["results"]))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getContent();
    }, []);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchTermDisplay, setSearchTermDisplay] = useState<string>("");

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        const cleanInput = event.currentTarget.value;
        setSearchTermDisplay(cleanInput);
        setSearchTerm(cleanInput.toLowerCase());
        console.log(searchTerm);
    };

    const filteredArticles = content.filter((article) =>
        article["fields"]["headline"].toLowerCase().includes(searchTerm)
    );

    return (
        <>
            <SearchBar
                searchTerm={searchTermDisplay}
                handleInput={handleInput}
            />
            <div className="contentContainer">
                <div className="contentContainer__contentArticles">
                    {filteredArticles.map((story) => {
                        return (
                            <div>
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
        </>
    );
};
export default SearchSection;
