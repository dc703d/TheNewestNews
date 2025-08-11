import "./TechSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const TechSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/technology?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
                heading="Technology"
            />
            <TenTiles url="https://content.guardianapis.com/technology?page=2&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
            <TenTiles url="https://content.guardianapis.com/technology?page=3&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
            <TenTiles url="https://content.guardianapis.com/technology?page=4&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
        </>
    );
};
export default TechSection;
