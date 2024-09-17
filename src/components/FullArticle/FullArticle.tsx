import { useLocation, useParams } from "react-router-dom";
import "./FullArticle.scss";
import SideBar from "../SideBar/SideBar";

const FullArticle = () => {
    const { webTitle } = useParams();
    const location = useLocation();
    const { story } = location.state || {};
    const { fields, sectionId, id } = story || {};
    const {
        headline,
        trailText,
        byline,
        firstPublicationDate,
        thumbnail,
        body,
    } = fields || null;

    console.log(webTitle);
    console.log(firstPublicationDate);

    return (
        <>
            {fields && (
                <div className="fullArticle">
                    <div className="fullArticle__textSection">
                        <h1 className="fullArticle__textSection--heading">
                            {headline}
                        </h1>
                        <h3 className="fullArticle__textSection--tagline">
                            {trailText}
                        </h3>
                        <h5 className="fullArticle__textSection--date">
                            {firstPublicationDate.slice(0, 10)}
                        </h5>
                        <img
                            src={thumbnail}
                            alt="Front Image of article"
                            className="fullArticle__textSection--img"
                        />
                        <h3 className="fullArticle__textSection--author">
                            {byline}
                        </h3>
                        <p
                            className="fullArticle__textSection--text"
                            dangerouslySetInnerHTML={{ __html: body }}
                        ></p>
                    </div>
                    <div className="fullArticle__sidebar">
                        <SideBar
                            url={`https://content.guardianapis.com/${sectionId}?page=2&show-fields=all&api-key=3bdabd26-081c-4be3-acfa-e73952c73518`}
                            id={id}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
export default FullArticle;
