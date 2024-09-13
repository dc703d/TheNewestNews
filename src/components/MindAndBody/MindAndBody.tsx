import "./MindAndBody.scss";
import Banner from "../layouts/Banner/Banner";
// "https://content.guardianapis.com/wellness?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"

const MindAndBody = () => {
    return (
        <div className="wellnessContainer">
            <Banner
                url="https://content.guardianapis.com/wellness?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
                heading="Mind and Body"
            />
        </div>
    );
};

export default MindAndBody;
