import "./SportsSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const SportsSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/sport?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
                heading="Sports"
            />
            <TenTiles url="https://content.guardianapis.com/sport?page=2&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
            <TenTiles url="https://content.guardianapis.com/sport?page=3&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
            <TenTiles url="https://content.guardianapis.com/football?&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
        </>
    );
};
export default SportsSection;
