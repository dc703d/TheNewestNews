import "./World.scss";
import TenTiles from "../layouts/TenTiles/TenTiles";

const World = () => {
    return (
        <TenTiles
            url="https://content.guardianapis.com/world?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
            heading="Around The World"
        />
    );
};

export default World;
