import { useState, useEffect } from "react";
import ArticleCard from "../layouts/ArticleCard/ArticleCard";
import "./SideBar.scss";

type SideBarProps = {
    url: string;
    heading?: string;
    id: string;
};

const SideBar = ({ url, heading, id }: SideBarProps) => {
    const [content, setContent] = useState<any[]>([]);

    const getContent = () => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => setContent(data["response"]["results"].slice(0, 3)))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getContent();
    }, []);

    return (
        <div className="sidebarContainer">
            <h1 className="sidebarContainer__heading">{heading}</h1>
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
