import "./Home.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";

const Home = () => {
    return (
        <LargeArticleTiles url="https://content.guardianapis.com/uk-news?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151" />
    );
};

export default Home;
