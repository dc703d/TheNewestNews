import "./WeatherBanner.scss";
import Banner from "../layouts/Banner/Banner";

const WeatherBanner = () => {
    return (
        <Banner
            heading="Weather"
            url="https://content.guardianapis.com/weather?show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151"
            colour="yellow"
        />
    );
};

export default WeatherBanner;
