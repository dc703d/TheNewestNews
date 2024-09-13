import "./WeatherBanner.scss";
import Banner from "../layouts/Banner/Banner";

const WeatherBanner = () => {
    return (
        <Banner
            heading="Weather"
            url="https://content.guardianapis.com/weather?show-fields=all&api-key=dc818f16-2179-4123-a127-0576c3fbcf15"
        />
    );
};

export default WeatherBanner;
