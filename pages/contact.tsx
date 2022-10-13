import { useEffect, useState } from "react";
import { useDarkMode } from "next-dark-mode";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import SocialTabs from "../components/SocialTabs";

const Contact = () => {
    const [loaded, setLoaded] = useState(false);
    const [loadOut, setLoadOut] = useState(false);

    const {
        autoModeActive, // boolean - whether the auto mode is active or not
        autoModeSupported, // boolean - whether the auto mode is supported on this browser
        darkModeActive, // boolean - whether the dark mode is active or not
        switchToAutoMode, // function - toggles the auto mode on
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
                        <ContactForm loaded={loaded} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
