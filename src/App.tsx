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
import SearchSection from "./components/SearchSection/SearchSection";
import SearchBar from "./components/SearchBar/SearchBar";
import FullArticle from "./components/FullArticle/FullArticle";
import Footer from "./components/Footer/Footer";
import Politics from "./components/Politics/Politics";
import Archives from "./components/Archives/Archives";

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Nav />
                <Routes>
                    <Route
                        path="/TheNewestNews/"
                        element={
                            <>
                                <SearchBar />
                                <Home />
                                <WeatherBanner />
                                <World />
                                <MindAndBody />
                                <MoreToExplore />
                                <Politics />
                                <Archives />
                            </>
                        }
                    />
                    <Route
                        path="/TheNewestNews/technology"
                        element={
                            <>
                                <SearchBar />
                                <TechSection />
                            </>
                        }
                    />
                    <Route
                        path="/TheNewestNews/business"
                        element={
                            <>
                                <SearchBar />
                                <BusinessSection />
                            </>
                        }
                    />
                    <Route
                        path="/TheNewestNews/sports"
                        element={
                            <>
                                <SearchBar />
                                <SportsSection />
                            </>
                        }
                    />
                    <Route
                        path="/TheNewestNews/science"
                        element={
                            <>
                                <SearchBar />
                                <ScienceSection />
                            </>
                        }
                    />
                    <Route
                        path="/TheNewestNews/health"
                        element={
                            <>
                                <SearchBar />
                                <HealthSection />
                            </>
                        }
                    />
                    <Route
                        path="/TheNewestNews/entertainment"
                        element={
                            <>
                                <SearchBar />
                                <EntertainmentSection />
                            </>
                        }
                    />
                    <Route
                        path="/TheNewestNews/search"
                        element={
                            <>
                                <SearchSection />
                            </>
                        }
                    />
                    <Route
                        path="/TheNewestNews/:webTitle"
                        element={
                            <>
                                <SearchBar />
                                <FullArticle />
                            </>
                        }
                    />
                </Routes>
                <Footer />
            </>
        </BrowserRouter>
    );
};

export default App;
