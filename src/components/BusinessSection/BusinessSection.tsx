import "./BusinessSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const BusinessSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/business?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
                heading="Business"
            />
            <TenTiles url="https://content.guardianapis.com/uk/business?page=2&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
            <TenTiles url="https://content.guardianapis.com/us/business?page=3&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
            <TenTiles url="https://content.guardianapis.com/au/business?page=4&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
        </>
    );
};
export default BusinessSection;
