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

//tech icons

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
                        <div className="flex flex-col items-center w-4/5 laptop:w-2/3 laptop:p-14">
                            <h1 className="font-second font-bold text-5xl mb-10">
                                About Me
                            </h1>
                            <p className={textClasses}>
                                I was born in Argentina in 1999, in a family
                                where is almost like a second language. Since my
                                childhood I have been attracted to technology. I
                                love video games and always wanted to know how
                                on earth a metal box allowed me to play them.
                            </p>
                            <p className={textClasses}>
                                As I grew up, so did my interest in tech, so I
                                decided to study a tech-oriented carreer. When I
                                turned 18, I decided to study Systems
                                Engineering. During my student years I
                                discovered that what fascinated me the most was
                                software development, so I began to delve into
                                the subject on my own, learning various
                                technologies in addition to the ones the carreer
                                provided me. On top of that, becoming an
                                Engineer endowed me with several soft skills. My
                                goal is to keep learning and growing to become a
                                good professional and great human being.{" "}
                            </p>
                            <h1 className="font-second font-bold text-3xl my-7">
                                Soft skills
                            </h1>
                            <div className="flex flex-col items-center">
                                <SkillInfo description="Having studied engineering endowed me with the ability to solve any type of problems in a creative and logical way.">
                                    <Cog6ToothIcon className="w-6 h-6 mr-2" />
                                    Problem resolution and logical thinking.
                                </SkillInfo>
                                <SkillInfo description="Even though I'm Argentinian, I grew up with English as my second native langunage, therefore I have excellent understanding and communication skills with it.">
                                    <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 mr-2" />{" "}
                                    Communcation in english and spanish.
                                </SkillInfo>
                                <SkillInfo description="During my studies and work, I have learned to work with many people in many different ways and always achieve efectiveness.">
                                    <UsersIcon className="w-6 h-6 mr-2" />
                                    Team or invidual work, always effectively.
                                </SkillInfo>
                                <SkillInfo description="Throughout my experience, several times I had to learn new technologies or work in different ways that I was not used to, which gave me the ability to easily adapt to the needs.">
                                    <BoltIcon className="w-6 h-6 mr-2" />{" "}
                                    Adaptability, flexiblilty and quick
                                    learning.
                                </SkillInfo>
                                <SkillInfo description="Coding and especially debugging can be harsh sometimes, especially when you can't find out what's wrong. But there's always a solution, and the way to reach it is being patient and not giving up.">
                                    <ClockIcon className="w-6 h-6 mr-2" />{" "}
                                    Patience.
                                </SkillInfo>
                            </div>
                            <h1 className="font-second font-bold text-3xl mt-9 mb-7">
                                Technologies
                            </h1>
                            <p className={`mb-10 ${textClasses}`}>
                                Here is a list of all the technologies I work
                                with. Of course I have more knowledge with some
                                than with others, and I love learning new things
                                so I can adapt to what is required of me. My
                                preferred ones are <strong>Next JS</strong> and{" "}
                                <strong>React</strong>, technologies with which
                                this page is built.
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
