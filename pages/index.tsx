import Navbar from "../components/Navbar";
import Image from "next/future/image";
import { useEffect, useState } from "react";
import { useDarkMode } from "next-dark-mode";

//Bio icons
import ShuffleIcon from "@mui/icons-material/Shuffle";
import AppsIcon from "@mui/icons-material/Apps";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

import portrait from "../public/mainicons/portrait.png";
import MainTitle from "../components/MainTitle";

const Home = () => {
    const [loaded, setLoaded] = useState(false);
    const [loadOut, setLoadOut] = useState(false);

    const {
        darkModeActive, // boolean - whether the dark mode is active or not
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
        <div className={darkModeActive ? "dark" : ""}>
            <div className="min-h-screen bg-split-light dark:bg-split-dark bg-fixed text-black dark:text-white">
                <title>Matías Baeza Graf</title>
                <Navbar
                    setLoadOut={() => setLoadOut(true)}
                    toggleDarkMode={toggleMode}
                />
                <div
                    className={`transform duration-300 flex flex-col px-5 py-10 laptop:px-32 laptop:py-12 ${
                        loadOut ? "opacity-0" : "opacity-1"
                    }`}
                >
                    <MainTitle
                        loaded={loaded}
                        darkModeActive={darkModeActive}
                    />
                    <div className="flex flex-col items-center laptop:items-start laptop:flex-row">
                        <div
                            className={`transform duration-1000 rounded-lg w-5/6 tablet:w-2/3 laptop:w-1/3 laptop:m-0 overflow-hidden shadow-lg shadow-stone-600 dark:shadow-black ${
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
                            className={`transform duration-1000 w-5/6 tablet:w-2/3 my-4 laptop:ml-4 laptop:my-0 ${
                                loaded
                                    ? "translate-x-0 opacity-1"
                                    : "translate-x-20 opacity-0"
                            }`}
                        >
                            <p className="font-main leading-relaxed text-xl mb-4 ml-2">
                                Hello there! I was born, raised and currently
                                based in Argentina. In December I become a{" "}
                                <span className="font-bold">
                                    Systems Engineer
                                </span>{" "}
                                and I&#39;m passionate for{" "}
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
                                        solving is one of my strengths.
                                    </p>
                                </li>
                                <li className={listItemClasses}>
                                    <ShuffleIcon height={30} width={30} />
                                    <p className={listParagraphClasses}>
                                        I&#39;m versatile and can efficiently
                                        work either by myself or as a part of a
                                        team.
                                    </p>
                                </li>
                                <li className={listItemClasses}>
                                    <SchoolIcon width={30} height={30} />
                                    <p className={listParagraphClasses}>
                                        I&#39;m a fast learner, so acquiring new
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
