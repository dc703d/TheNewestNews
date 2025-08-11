import "./MindAndBody.scss";
import Banner from "../layouts/Banner/Banner";

const MindAndBody = () => {
    return (
        <div className="wellnessContainer">
            <Banner
                url="https://content.guardianapis.com/wellness?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
                heading="Mind and Body"
                colour="mint"
            />
        </div>
    );
};

export default MindAndBody;
