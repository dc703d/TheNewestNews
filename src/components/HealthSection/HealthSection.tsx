import "./HealthSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const HealthSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/lifeandstyle?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
                heading="Health & Lifestyle"
            />
            <TenTiles url="https://content.guardianapis.com/travel?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
            <TenTiles url="https://content.guardianapis.com/wellness?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
            <TenTiles url="https://content.guardianapis.com/wellness?page=2&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
        </>
    );
};
export default HealthSection;
