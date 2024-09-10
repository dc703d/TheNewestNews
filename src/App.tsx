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
import BusinessSection from "./components/BusinessSection/BusinessSection";
import SportsSection from "./components/SportsSection/SportsSection";
import ScienceSection from "./components/ScienceSection/ScienceSection";
import HealthSection from "./components/HealthSection/HealthSection";
import EntertainmentSection from "./components/EntertainmentSection/EntertainmentSection";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
    //const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <>
                <Nav />
                <SearchBar />
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
                            </>
                        }
                    />
                    <Route
                        path="/technology"
                        element={
                            <>
                                <TechSection />
                            </>
                        }
                    />
                    <Route
                        path="/business"
                        element={
                            <>
                                <BusinessSection />
                            </>
                        }
                    />
                    <Route
                        path="/sports"
                        element={
                            <>
                                <SportsSection />
                            </>
                        }
                    />
                    <Route
                        path="/science"
                        element={
                            <>
                                <ScienceSection />
                            </>
                        }
                    />
                    <Route
                        path="/health"
                        element={
                            <>
                                <HealthSection />
                            </>
                        }
                    />
                    <Route
                        path="/entertainment"
                        element={
                            <>
                                <EntertainmentSection />
                            </>
                        }
                    />
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App;
