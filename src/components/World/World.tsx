import "./World.scss";
import TenTiles from "../layouts/TenTiles/TenTiles";

const World = () => {
    return (
        <TenTiles
            url="https://content.guardianapis.com/world?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
            heading="Around The World"
        />
    );
};

export default World;
