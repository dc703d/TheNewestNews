import "./BusinessSection.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";
import TenTiles from "../layouts/TenTiles/TenTiles";

const BusinessSection = () => {
    return (
        <>
            <LargeArticleTiles
                url="https://content.guardianapis.com/business?show-fields=all&api-key=3bdabd26-081c-4be3-acfa-e73952c73518"
                heading="Business"
            />
            <TenTiles url="https://content.guardianapis.com/uk/business?page=2&show-fields=all&api-key=3bdabd26-081c-4be3-acfa-e73952c73518" />
            <TenTiles url="https://content.guardianapis.com/us/business?page=3&show-fields=all&api-key=3bdabd26-081c-4be3-acfa-e73952c73518" />
            <TenTiles url="https://content.guardianapis.com/au/business?page=4&show-fields=all&api-key=3bdabd26-081c-4be3-acfa-e73952c73518" />
        </>
    );
};
export default BusinessSection;
