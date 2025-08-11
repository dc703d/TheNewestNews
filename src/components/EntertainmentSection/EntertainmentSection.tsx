import "./EntertainmentSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const EntertainmentSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/media?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
                heading="Entertainment"
            />
            <TenTiles
                url="https://content.guardianapis.com/film?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
                heading="Film & Media"
            />
            <TenTiles
                url="https://content.guardianapis.com/fashion?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
                heading="Fashion"
            />
            <TenTiles
                url="https://content.guardianapis.com/music?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
                heading="Music"
            />
        </>
    );
};
export default EntertainmentSection;
