import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useDarkMode } from "next-dark-mode";
import Image, { StaticImageData } from "next/future/image";

const Project1 = (propsWithType: {
    children: any;
    title: string;
    languages: Array<string>;
    images: Array<StaticImageData>;
}) => {
    const [loaded, setLoaded] = useState(false);
    const [loadOut, setLoadOut] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const {
        darkModeActive, // boolean - whether the dark mode is active or not
        switchToDarkMode, // function - toggles the dark mode on
        switchToLightMode, // function - toggles the light mode on
    } = useDarkMode();

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
                    className={`transform duration-300 p-16 ${
                        loadOut ? "opacity-0" : "opacity-1"
                    }`}
                >
                    <div
                        className={`transform duration-500 flex flex-col items-center ${
                            loaded
                                ? "opacity-1 translate-y-0"
                                : "opacity-0 -translate-y-20"
                        }`}
                    >
                        <h1 className="font-title font-bold text-4xl mb-9">
                            {propsWithType.title}
                        </h1>
                        <div className="flex flex-row justify-center font-second font-bold text-lg mb-9">
                            {propsWithType.languages.map((language) => (
                                <div className="flex flex-row justify-start items-center w-fit bg-stone-500 text-black rounded my-2 mr-4 py-1 px-2">
                                    <Image
                                        src={`/languages/${language}.png`}
                                        alt={language}
                                        width={35}
                                        height={35}
                                    />
                                    <h1 className="ml-2">{language}</h1>
                                </div>
                            ))}
                        </div>
                        <div className="font-title text-xl leading-relaxed text-center w-2/3 mb-7">
                            {propsWithType.children}
                        </div>
                        <div className="flex flex-row">
                            {propsWithType.images.map((image) => (
                                <div className="mx-1 border-black border-2">
                                    <Image
                                        src={image}
                                        placeholder="blur"
                                        alt="Project"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;
