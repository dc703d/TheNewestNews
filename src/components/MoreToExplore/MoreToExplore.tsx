import "./MoreToExplore.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";

const MoreToExplore = () => {
    return (
        <LargeArticleTiles
            url="https://content.guardianapis.com/us-news?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
            heading="More to Explore"
        />
    );
};

export default MoreToExplore;
