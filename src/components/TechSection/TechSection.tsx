import "./TechSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const TechSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/technology?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
                heading="Technology"
            />
            <TenTiles url="https://content.guardianapis.com/technology?page=2&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
            <TenTiles url="https://content.guardianapis.com/technology?page=3&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
            <TenTiles url="https://content.guardianapis.com/technology?page=4&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
        </>
    );
};
export default TechSection;
