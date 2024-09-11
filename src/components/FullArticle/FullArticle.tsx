import { useParams } from "react-router-dom";
import "./FullArticle.scss";

const FullArticle = () => {
    const { id } = useParams();
    console.log("id", id);

    return <></>;
};
export default FullArticle;
