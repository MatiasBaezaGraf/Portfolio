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
import Router from "next/router";
import { useRouter } from "next/router";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/solid";

import translations from "../public/locales.js";

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

    const router = useRouter();

    //Load the language text
    const { locale } = useRouter();
    const {
        heading,
        skill1,
        skill2,
        skill3,
        skill4,
        skill5,
        footing_1,
        footing_2,
        footing_3,
        pdf_button,
    } = translations[locale].index;

    const handleRouting = (route: string) => {
        setTimeout(() => {
            Router.push(route);
        }, 300);
    };

    return (
        <div className={darkModeActive ? "dark" : ""}>
            <div className="min-h-screen bg-split-light dark:bg-split-dark bg-fixed dark:text-white text-black">
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
                            className={`transform duration-1000 rounded-lg w-5/6 tablet:w-2/3 laptop:w-1/3 laptop:m-0 overflow-hidden shadow-stone-600 dark:shadow-black ${
                                loaded
                                    ? "translate-x-0 shadow-lg opacity-1"
                                    : "-translate-x-[40rem] opacity-0"
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
                            <p className="font-main leading-relaxed text-center text-xl mb-4 ml-2">
                                {heading}
                            </p>
                            <ul>
                                <li className={listItemClasses}>
                                    <AppsIcon width={30} height={30} />
                                    <p className={listParagraphClasses}>
                                        {skill1}
                                    </p>
                                </li>
                                <li className={listItemClasses}>
                                    <PsychologyIcon height={30} width={30} />
                                    <p className={listParagraphClasses}>
                                        {skill2}
                                    </p>
                                </li>
                                <li className={listItemClasses}>
                                    <ShuffleIcon height={30} width={30} />
                                    <p className={listParagraphClasses}>
                                        {skill3}
                                    </p>
                                </li>
                                <li className={listItemClasses}>
                                    <SchoolIcon width={30} height={30} />
                                    <p className={listParagraphClasses}>
                                        {skill4}
                                    </p>
                                </li>
                                <li className={listItemClasses}>
                                    <ImportantDevicesIcon
                                        width="30px"
                                        height="30px"
                                    />
                                    <p className={listParagraphClasses}>
                                        {skill5}
                                    </p>
                                </li>
                            </ul>
                            <div className="flex flex-col tablet:flex-row items-center">
                                <p className={listParagraphClasses}>
                                    {footing_1}{" "}
                                    <span
                                        onClick={() => {
                                            if ("/info" != router.pathname) {
                                                setLoadOut(true);
                                            }
                                            handleRouting("/info");
                                        }}
                                        className="transform duration-200 font-bold cursor-pointer underline hover:-translate-y-1"
                                    >
                                        {footing_2}
                                    </span>{" "}
                                    {footing_3}
                                </p>
                                <a href="CV.pdf" download>
                                    <button className="transform duration-200 flex flex-row items-center font-main text-lg bg-blue-500 p-2 m-2 rounded hover:scale-110">
                                        {pdf_button}
                                        <ArrowDownOnSquareIcon className="w-6 h-6" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
