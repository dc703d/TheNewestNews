import "./SearchSection.scss";
import { FormEvent, useEffect, useState } from "react";
import ArticleCard from "../layouts/ArticleCard/ArticleCard";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const SearchSection = () => {
    const [content, setContent] = useState<any[]>([]);

    const getContent = async () => {
        let pages: string | any[] = [];
        for (let i = 1; i <= 6; i++) {
            const response = await fetch(
                `https://content.guardianapis.com/search?page=${i}&page-size=50&show-fields=all&api-key=3bdabd26-081c-4be3-acfa-e73952c73518`
            );
            const data = await response.json();
            pages.push(data["response"]["results"]);
        }
        let pages1 = pages[0];
        let pages2 = pages[1];
        let pages3 = pages[2];
        let pages4 = pages[3];
        let pages5 = pages[4];
        let pages6 = pages[5];
        let allPages1 = pages1.concat(pages2, pages3);
        let allPages2 = pages4.concat(pages5, pages6);
        let allPages = allPages1.concat(allPages2);
        setContent(allPages);
        console.log(allPages);
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
                            <div key={story["id"]}>
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
                                    <div className="contentContainer__article">
                                        <Link
                                            to={`/TheNewestNews/${story.webTitle}`}
                                            state={{ story }}
                                        >
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
                                    </div>
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
