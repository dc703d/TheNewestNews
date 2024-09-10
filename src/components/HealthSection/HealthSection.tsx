import "./HealthSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const HealthSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/lifeandstyle?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
                heading="Health & Lifestyle"
            />
            <TenTiles url="https://content.guardianapis.com/travel?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
            <TenTiles url="https://content.guardianapis.com/wellness?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
            <TenTiles url="https://content.guardianapis.com/wellness?page=2&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
        </>
    );
};
export default HealthSection;
