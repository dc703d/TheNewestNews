import "./EntertainmentSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const EntertainmentSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/media?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
                heading="Entertainment"
            />
            <TenTiles
                url="https://content.guardianapis.com/film?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
                heading="Film & Media"
            />
            <TenTiles
                url="https://content.guardianapis.com/fashion?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
                heading="Fashion"
            />
            <TenTiles
                url="https://content.guardianapis.com/music?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
                heading="Music"
            />
        </>
    );
};
export default EntertainmentSection;
