import Navbar from "../components/Navbar";
import Image from "next/future/image";
import { SocialIcon } from "react-social-icons";
import { useEffect, useState } from "react";
import { useDarkMode } from "next-dark-mode";

//Bio icons
import ShuffleIcon from "@mui/icons-material/Shuffle";
import AppsIcon from "@mui/icons-material/Apps";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

import portrait from "../public/mainicons/portrait.png";

const Home = () => {
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

    useEffect(() => {
        setLoaded(true);
    }, []);

    const listItemClasses =
        "transform duration-500 flex flex-row justify-start items-center ml-2";
    const listParagraphClasses = "font-main leading-relaxed text-lg my-4 ml-4";

    const toggleMode = () => {
        console.log(darkModeActive);
        if (darkModeActive) {
            switchToLightMode();
        } else {
            switchToDarkMode();
        }
    };

    return (
        <div className={darkModeActive && "dark"}>
            <div className="min-h-screen bg-split-light dark:bg-split-dark bg-fixed text-black dark:text-white">
                <title>Matías Baeza Graf</title>
                <Navbar
                    setLoadOut={() => setLoadOut(true)}
                    toggleDarkMode={toggleMode}
                />
                <div
                    className={`transform duration-300 flex flex-col px-32 py-12 ${
                        loadOut ? "opacity-0" : "opacity-1"
                    }`}
                >
                    <div className="flex flex-col pb-4">
                        <h1
                            className={` transform duration-1000 font-second font-bold text-7xl ${
                                loaded
                                    ? "opacity-1 translate-y-0"
                                    : "opacity-0 -translate-y-12"
                            }`}
                        >
                            <span className="mr-6">Matias Baeza Graf</span>
                            <span
                                className={`transform duration-500 delay-1000 mr-3 ${
                                    loaded ? "opacity-1" : "opacity-0"
                                }`}
                            >
                                <SocialIcon
                                    className="transform duration-500 hover:-translate-y-2"
                                    fgColor={`${
                                        darkModeActive ? "#3498DB" : "#1773b3"
                                    }`}
                                    bgColor="transparent"
                                    url="https://twitter.com/matibaezagraf"
                                    target="blank"
                                />
                            </span>
                            <span
                                className={`transform duration-500 delay-[1200ms] mr-3 ${
                                    loaded ? "opacity-1" : "opacity-0"
                                }`}
                            >
                                <SocialIcon
                                    className="transform duration-500 hover:-translate-y-2"
                                    fgColor={`${
                                        darkModeActive ? "#FD5DFF" : "#b31db5"
                                    }`}
                                    bgColor="transparent"
                                    url="https://www.instagram.com/matibaezagraf/"
                                    target="blank"
                                />
                            </span>
                            <span
                                className={`transform duration-500 delay-[1400ms] mr-3 ${
                                    loaded ? "opacity-1" : "opacity-0"
                                }`}
                            >
                                <SocialIcon
                                    className="transform duration-500 hover:-translate-y-2"
                                    fgColor={`${
                                        darkModeActive ? "#58D68D " : "#14b356"
                                    }`}
                                    bgColor="transparent"
                                    url="https://wa.me/2235440115"
                                    network="whatsapp"
                                    target="blank"
                                />
                            </span>
                            <span
                                className={`transform duration-500 delay-[1600ms] mr-3 ${
                                    loaded ? "opacity-1" : "opacity-0"
                                }`}
                            >
                                <SocialIcon
                                    className="transform duration-500 hover:-translate-y-2"
                                    fgColor={`${
                                        darkModeActive ? "white" : "black"
                                    }`}
                                    bgColor="transparent"
                                    url="https://github.com/MatiasBaezaGraf"
                                    target="blank"
                                />
                            </span>
                            <span
                                className={`transform duration-500 delay-[1800ms] mr-3 ${
                                    loaded ? "opacity-1" : "opacity-0"
                                }`}
                            >
                                <SocialIcon
                                    className="transform duration-500 hover:-translate-y-2"
                                    fgColor="#207FFF "
                                    bgColor="transparent"
                                    url="https://www.linkedin.com/in/matias-baeza-graf-28781a224"
                                    target="blank"
                                />
                            </span>
                        </h1>
                        <h1
                            className={`transform duration-1000 font-second text-4xl ${
                                loaded
                                    ? "opacity-1 translate-y-0"
                                    : "opacity-0 -translate-y-12"
                            }`}
                        >
                            Software Developer
                        </h1>
                    </div>
                    <div className="flex flex-row">
                        <div
                            className={`transform duration-1000 rounded-lg w-1/3 overflow-hidden ${
                                loaded
                                    ? "translate-x-0"
                                    : "-translate-x-[40rem]"
                            }`}
                        >
                            <Image
                                className="max-w-full max-h-full"
                                src={portrait}
                                alt="Foo image"
                            />
                        </div>
                        <div
                            className={`transform duration-1000 w-2/3 ml-4 ${
                                loaded
                                    ? "translate-x-0 opacity-1"
                                    : "translate-x-20 opacity-0"
                            }`}
                        >
                            <p className="font-main leading-relaxed text-xl mb-4 ml-2">
                                Hello there! I was born, raised and currently
                                based in Argentina. In december I become a{" "}
                                <span className="font-bold">
                                    Systems Engineer
                                </span>{" "}
                                and I'm passionate for{" "}
                                <span className="font-bold">
                                    software development
                                </span>{" "}
                                and always willing to learn new ways to do so.
                            </p>
                            <ul>
                                <li className={listItemClasses}>
                                    <AppsIcon width={30} height={30} />
                                    <p className={listParagraphClasses}>
                                        In the last 3 years, I fully developed
                                        or took part in mutiple web
                                        applications.
                                    </p>
                                </li>
                                <li className={listItemClasses}>
                                    <PsychologyIcon height={30} width={30} />
                                    <p className={listParagraphClasses}>
                                        As an almost Systems Engineer, problem
                                        solving is one of my strenghts.
                                    </p>
                                </li>
                                <li className={listItemClasses}>
                                    <ShuffleIcon height={30} width={30} />
                                    <p className={listParagraphClasses}>
                                        I'm versatile and can efficiently work
                                        either by myself or as a part of a team.
                                    </p>
                                </li>
                                <li className={listItemClasses}>
                                    <SchoolIcon width={30} height={30} />
                                    <p className={listParagraphClasses}>
                                        I'm a fast learner, so acquiring new
                                        skills to work with always gets me.
                                    </p>
                                </li>
                                <li className={listItemClasses}>
                                    <ImportantDevicesIcon
                                        width="30px"
                                        height="30px"
                                    />
                                    <p className={listParagraphClasses}>
                                        I love designing and creating user
                                        friendly, nice looking and feeling apps.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
