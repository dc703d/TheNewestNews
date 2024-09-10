import "./ScienceSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const ScienceSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/science?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
                heading="Science"
            />
            <TenTiles url="https://content.guardianapis.com/science?page=2&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
            <TenTiles url="https://content.guardianapis.com/science?page=3&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
            <TenTiles url="https://content.guardianapis.com/science?page=4&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
        </>
    );
};
export default ScienceSection;
