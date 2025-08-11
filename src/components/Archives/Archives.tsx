import "./Archives.scss";
import TenTiles from "../layouts/TenTiles/TenTiles";

const Archives = () => {
    const year = Math.floor(Math.random() * (2024 - 2015 + 1)) + 2015;
    const month = Math.floor(Math.random() * 12) + 1;
    const daysInMonth = new Date(year, month, 0).getDate();
    const date = Math.floor(Math.random() * daysInMonth) + 1;
    return (
        <TenTiles
            url={`https://content.guardianapis.com/search?order-by=oldest&from-date=${year}-${month}-${date}&show-fields=all&api-key=93aecaee-6677-4660-9158-21ab725e1151`}
            heading="From the Archives"
        />
    );
};

export default Archives;
