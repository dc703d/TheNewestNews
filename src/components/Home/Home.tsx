import "./Home.scss";
import LargeArticleTiles from "../layouts/LargeArticleTiles/LargeArticleTiles";

const Home = () => {
    return (
        <LargeArticleTiles url="https://content.guardianapis.com/uk-news?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15" />
    );
};

export default Home;
