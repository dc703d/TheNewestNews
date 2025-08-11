import "./MoreToExplore.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";

const MoreToExplore = () => {
    return (
        <LargeArticleTiles
            url="https://content.guardianapis.com/us-news?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
            heading="More to Explore"
        />
    );
};

export default MoreToExplore;
