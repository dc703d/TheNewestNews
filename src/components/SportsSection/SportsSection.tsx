import "./SportsSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const SportsSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/sport?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
                heading="Sports"
            />
            <TenTiles url="https://content.guardianapis.com/sport?page=2&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
            <TenTiles url="https://content.guardianapis.com/sport?page=3&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
            <TenTiles url="https://content.guardianapis.com/football?&show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
        </>
    );
};
export default SportsSection;
