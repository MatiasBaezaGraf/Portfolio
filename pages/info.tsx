import {
    BoltIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    ClockIcon,
    Cog6ToothIcon,
    UsersIcon,
} from "@heroicons/react/24/solid";

import { useDarkMode } from "next-dark-mode";
import { useState, useEffect } from "react";

//My components
import Navbar from "../components/Navbar";
import SocialTabs from "../components/SocialTabs";
import SkillInfo from "../components/SkillInfo";
import LanguageList from "../components/LanguageList";

import { useRouter } from "next/router";

import translations from "../public/locales.js";

const Info = () => {
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

    const { locale } = useRouter();
    const {
        main_title,
        about_p1,
        about_p2,
        skills_title,
        skill1,
        skill1_p,
        skill2,
        skill2_p,
        skill3,
        skill3_p,
        skill4,
        skill4_p,
        skill5,
        skill5_p,
        technologies_title,
        technologies_p_1,
        technologies_p_2,
        technologies_p_3,
    } = translations[locale].info;

    const textClasses = "font-main leading-relaxed text-xl mb-4 ml-2";

    return (
        <div className={darkModeActive && "dark"}>
            <div className="min-h-screen bg-split-light dark:bg-split-dark bg-fixed dark:text-white text-black">
                <title>Matías Baeza Graf</title>
                <Navbar
                    setLoadOut={() => setLoadOut(true)}
                    toggleDarkMode={toggleMode}
                />
                <div
                    className={`transform duration-500 flex flex-row ${
                        loadOut ? "opacity-0" : "opacity-1"
                    } ${
                        loaded
                            ? "opacity-1 translate-y-0"
                            : "opacity-0 -translate-y-10"
                    } `}
                >
                    <div className="flex flex-col justify-center h-screen -mt-12 sticky top-0 w-1">
                        <SocialTabs loaded={loaded} darkMode={darkModeActive} />
                    </div>
                    <div className="flex felx-row justify-center w-full">
                        <div className="flex flex-col items-center w-4/5 laptop:w-2/3 my-14 laptop:px-14">
                            <h1 className="font-second font-bold text-5xl mb-10">
                                {main_title}
                            </h1>
                            <p className={textClasses}>{about_p1}</p>
                            <p className={textClasses}>{about_p2}</p>
                            <h1 className="font-second font-bold text-3xl my-7">
                                {skills_title}
                            </h1>
                            <div className="flex flex-col items-center">
                                <SkillInfo description={skill1_p}>
                                    <Cog6ToothIcon className="w-6 h-6 mr-2" />
                                    {skill1}
                                </SkillInfo>
                                <SkillInfo description={skill2_p}>
                                    <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 mr-2" />{" "}
                                    {skill2}
                                </SkillInfo>
                                <SkillInfo description={skill3_p}>
                                    <UsersIcon className="w-6 h-6 mr-2" />
                                    {skill3}
                                </SkillInfo>
                                <SkillInfo description={skill4_p}>
                                    <BoltIcon className="w-6 h-6 mr-2" />{" "}
                                    {skill4}
                                </SkillInfo>
                                <SkillInfo description={skill5_p}>
                                    <ClockIcon className="w-6 h-6 mr-2" />{" "}
                                    {skill5}
                                </SkillInfo>
                            </div>
                            <h1 className="font-second font-bold text-3xl mt-9 mb-7">
                                {technologies_title}
                            </h1>
                            <p className={`mb-10 ${textClasses}`}>
                                {technologies_p_1}
                                <strong>{technologies_p_2}</strong>
                                {technologies_p_3}
                            </p>
                            <LanguageList darkModeActive={darkModeActive} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
