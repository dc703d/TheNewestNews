import "./BusinessSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const BusinessSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/business?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
                heading="Business"
            />
            <TenTiles url="https://content.guardianapis.com/uk/business?page=2&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
            <TenTiles url="https://content.guardianapis.com/us/business?page=3&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
            <TenTiles url="https://content.guardianapis.com/au/business?page=4&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
        </>
    );
};
export default BusinessSection;
