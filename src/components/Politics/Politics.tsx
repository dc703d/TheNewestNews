import "./Politics.scss";
import Banner from "../layouts/Banner/Banner";

const Politics = () => {
    return (
        <Banner
            heading="Politics"
            url="https://content.guardianapis.com/politics?page=1&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
            colour="grey"
        />
    );
};

export default Politics;
