//import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import World from "./components/World/World";
import WeatherBanner from "./components/WeatherBanner/WeatherBanner";
import MindAndBody from "./components/MindAndBody/MindAndBody";
import MoreToExplore from "./components/MoreToExplore/MoreToExplore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TechSection from "./components/TechSection/TechSection";

const App = () => {
    //const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                                <WeatherBanner />
                                <World />
                                <MindAndBody />
                                <MoreToExplore />
                                <TechSection />
                            </>
                        }
                    />
                </Routes>
                {/* <Home />
                <WeatherBanner />
                <World />
                <MindAndBody />
                <MoreToExplore /> */}
            </>
        </BrowserRouter>
    );
};

export default App;
