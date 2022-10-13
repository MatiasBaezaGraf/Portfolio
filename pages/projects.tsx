import { useEffect, useState } from "react";
import { useDarkMode } from "next-dark-mode";
import Navbar from "../components/Navbar";
import ProjectShowcase from "../components/ProjectShowcase";
import SocialTabs from "../components/SocialTabs";

const Projects = () => {
    const [loaded, setLoaded] = useState(false);
    const [loadOut, setLoadOut] = useState(false);

    const {
        darkModeActive, // boolean - whether the dark mode is active or not
        switchToDarkMode, // function - toggles the dark mode on
        switchToLightMode, // function - toggles the light mode on
    } = useDarkMode();

    const toggleMode = () => {
        if (darkModeActive) {
            switchToLightMode();
        } else {
            switchToDarkMode();
        }
    };

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className={darkModeActive && "dark"}>
            <div className="min-h-screen bg-split-light dark:bg-split-dark bg-fixed">
                <title>Matías Baeza Graf</title>
                <Navbar
                    setLoadOut={() => setLoadOut(true)}
                    toggleDarkMode={toggleMode}
                />
                <div
                    className={`transform duration-300 flex flex-row ${
                        loadOut ? "opacity-0" : "opacity-1"
                    }`}
                >
                    <div className="flex flex-col justify-center h-screen -mt-12 sticky top-0">
                        <SocialTabs loaded={loaded} darkMode={darkModeActive} />
                    </div>
                    <div className="flex flex-col flex-grow items-center">
                        <ProjectShowcase
                            loaded={loaded}
                            fadeOutHandler={() => setLoadOut(true)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
