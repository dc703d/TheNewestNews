import "./ScienceSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const ScienceSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/science?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
                heading="Science"
            />
            <TenTiles url="https://content.guardianapis.com/science?page=2&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
            <TenTiles url="https://content.guardianapis.com/science?page=3&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
            <TenTiles url="https://content.guardianapis.com/science?page=4&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
        </>
    );
};
export default ScienceSection;
