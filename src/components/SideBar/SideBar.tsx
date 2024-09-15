import { useState, useEffect } from "react";
import ArticleCard from "../layouts/ArticleCard/ArticleCard";
import "./SideBar.scss";
import { Link } from "react-router-dom";

type SideBarProps = {
    url: string;
    heading?: string;
    id: string;
};

const SideBar = ({ url, id }: SideBarProps) => {
    const [content, setContent] = useState<any[]>([]);

    const getContent = () => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            // .then((data) => setContent(data["response"]["results"].filter( sectionId  == "crossword").slice(0, 3)))

            .then((data) => setContent(data["response"]["results"].slice(0, 6)))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getContent();
    }, []);

    return (
        <div className="sidebarContainer">
            <h1 className="sidebarContainer__heading">More you may like...</h1>
            <div className="sidebarContainer__sidebarArticles">
                {content.map((story) => {
                    if (story.id !== id) {
                        return (
                            <div key={story["id"]}>
                                {content && (
                                    <ArticleCard
                                        webTitle={story["fields"]["headline"]}
                                        urlToImage={
                                            story["fields"]["thumbnail"]
                                        }
                                    />
                                ) ? (
                                    <Link
                                        to={`/${story.webTitle}`}
                                        state={{ story }}
                                    >
                                        <div className="sidebarContainer__article">
                                            <ArticleCard
                                                webTitle={
                                                    story["fields"]["headline"]
                                                }
                                                urlToImage={
                                                    story["fields"]["thumbnail"]
                                                }
                                            />
                                        </div>
                                    </Link>
                                ) : (
                                    "Loading Content..."
                                )}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default SideBar;
