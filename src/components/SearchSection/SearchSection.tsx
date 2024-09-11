import "./SearchSection.scss";
import { FormEvent, useEffect, useState } from "react";
import ArticleCard from "../layouts/ArticleCard/ArticleCard";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useParams } from "react-router-dom";

const SearchSection = () => {
    const [content, setContent] = useState<any[]>([]);

    const getContent = async () => {
        let pages: string | any[] = [];
        for (let i = 1; i <= 3; i++) {
            const response = await fetch(
                `https://content.guardianapis.com/search?page=${i}&show-fields=all&api-key=3bdabd26-081c-4be3-acfa-e73952c73518`
            );
            const data = await response.json();
            pages.push(data["response"]["results"]);
        }
        let pages1 = pages[0];
        let pages2 = pages[1];
        let pages3 = pages[2];
        let allPages = pages1.concat(pages2, pages3);
        console.log(allPages);
        setContent(allPages);
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
                            <div key={story.id}>
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
                                    <Link to={"/id"}>
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
