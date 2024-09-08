//import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import HighlightBanner from "./components/HighlightBanner/HighlightBanner";

const App = () => {
    //const [count, setCount] = useState(0)

    return (
        <>
            <Nav />
            <Home />
            <HighlightBanner />
        </>
    );
};

export default App;
