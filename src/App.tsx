//import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import World from "./components/World/World";
import WeatherBanner from "./components/WeatherBanner/WeatherBanner";
import MindAndBody from "./components/MindAndBody/MindAndBody";
import MoreToExplore from "./components/MoreToExplore/MoreToExplore";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import TechSection from "./components/TechSection/TechSection";
import BusinessSection from "./components/BusinessSection/BusinessSection";
import SportsSection from "./components/SportsSection/SportsSection";
import ScienceSection from "./components/ScienceSection/ScienceSection";
import HealthSection from "./components/HealthSection/HealthSection";
import EntertainmentSection from "./components/EntertainmentSection/EntertainmentSection";
import SearchSection from "./components/SearchSection/SearchSection";
import SearchBar from "./components/SearchBar/SearchBar";
import FullArticle from "./components/FullArticle/FullArticle";

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
                                <SearchBar />
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
                                <SearchBar />
                                <TechSection />
                            </>
                        }
                    />
                    <Route
                        path="/business"
                        element={
                            <>
                                <SearchBar />
                                <BusinessSection />
                            </>
                        }
                    />
                    <Route
                        path="/sports"
                        element={
                            <>
                                <SearchBar />
                                <SportsSection />
                            </>
                        }
                    />
                    <Route
                        path="/science"
                        element={
                            <>
                                <SearchBar />
                                <ScienceSection />
                            </>
                        }
                    />
                    <Route
                        path="/health"
                        element={
                            <>
                                <SearchBar />
                                <HealthSection />
                            </>
                        }
                    />
                    <Route
                        path="/entertainment"
                        element={
                            <>
                                <SearchBar />
                                <EntertainmentSection />
                            </>
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <>
                                <SearchSection />
                            </>
                        }
                    />
                    <Route
                        path="/:id"
                        element={
                            <>
                                <SearchBar />
                                <FullArticle />
                            </>
                        }
                    />
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App;
