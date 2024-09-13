import "./Politics.scss";
import Banner from "../layouts/Banner/Banner";

const Politics = () => {
    return (
        <Banner
            heading="Politics"
            url="https://content.guardianapis.com/politics?page=1&show-fields=all&api-key=3bdabd26-081c-4be3-acfa-e73952c73518"
            colour="grey"
        />
    );
};

export default Politics;
