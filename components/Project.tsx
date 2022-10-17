import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useDarkMode } from "next-dark-mode";
import Image, { StaticImageData } from "next/future/image";
import ProjectGallery from "./ProjectGallery";

const Project = (propsWithType: {
    children: any;
    title: string;
    languages: Array<string>;
    images: Array<StaticImageData>;
}) => {
    const [loaded, setLoaded] = useState(false);
    const [loadOut, setLoadOut] = useState(false);

    console.log(propsWithType.languages);

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
        <div className={darkModeActive ? "dark" : ""}>
            <div className="flex flex-col min-h-screen bg-split-light dark:bg-split-dark bg-fixed text-black dark:text-white">
                <title>Matías Baeza Graf</title>
                <Navbar
                    setLoadOut={() => setLoadOut(true)}
                    toggleDarkMode={toggleMode}
                />
                <div
                    className={`transform duration-300 flex flex-col justify-between pt-14 laptop:p-14 ${
                        loadOut ? "opacity-0" : "opacity-1"
                    }`}
                >
                    <div className={``}>
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
                            <div className="flex flex-col tablet:flex-row justify-center font-second font-bold items-center text-md mb-9">
                                {propsWithType.languages.map(
                                    (language, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-row justify-start items-center w-fit bg-stone-500 text-black rounded my-2 mr-4 py-1 px-2"
                                        >
                                            <Image
                                                src={`/languages/${language}.png`}
                                                alt={language}
                                                width={27}
                                                height={27}
                                            />
                                            <h1 className="ml-2">{language}</h1>
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="font-title text-xl leading-relaxed text-center w-5/6 tablet:w-4/5 laptop:w-2/3 mb-7">
                                {propsWithType.children}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`transform duration-300 flex flex-grow items-end justify-center ${
                        loadOut ? "opacity-0" : "opacity-1"
                    } ${
                        loaded
                            ? "opacity-1 translate-y-0"
                            : "opacity-0 translate-y-20"
                    }`}
                >
                    <ProjectGallery images={propsWithType.images} />
                </div>
            </div>
        </div>
    );
};

export default Project;
