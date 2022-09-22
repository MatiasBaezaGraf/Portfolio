import Navbar from "../components/Navbar";
import Image from "next/future/image";
import portrait from "../public/portrait.png";
import apps from "../public/apps.png";
import cap from "../public/cap.png";
import idea from "../public/idea.png";
import shuffle from "../public/shuffle.png";
import ui from "../public/ui.png";
import { SocialIcon } from "react-social-icons";
import { useEffect, useState } from "react";

const Home = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    });

    const listItemClasses =
        "transform duration-1000 flex flex-row justify-start items-center ml-2";
    const listParagraphClasses = "font-main leading-relaxed text-lg my-4 ml-4";

    return (
        <div className="min-h-screen bg-split-dark bg-fixed">
            <title>Matías Baeza Graf</title>
            <Navbar />
            <div className="flex flex-col px-32 py-12">
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
                                fgColor="#3498DB"
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
                                fgColor="#FD5DFF"
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
                                fgColor="#58D68D "
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
                                fgColor="white"
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
                            loaded ? "translate-x-0" : "-translate-x-[40rem]"
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
                            Hello there! I was born, raised and currently based
                            in Argentina. In december I become a{" "}
                            <span className="font-bold">Systems Engineer</span>{" "}
                            and I'm passionate for{" "}
                            <span className="font-bold">
                                software development
                            </span>{" "}
                            and always willign to learn new ways to do so.
                        </p>
                        <ul>
                            <li
                                className={`${listItemClasses} delay-1000 ${
                                    loaded
                                        ? "translate-x-0 opacity-1"
                                        : "translate-x-20 opacity-0"
                                }`}
                            >
                                <Image
                                    className=""
                                    src={apps}
                                    alt={"apps"}
                                    width={30}
                                />
                                <p className={listParagraphClasses}>
                                    In the last 3 years, I fully developed or
                                    took part in mutiple web applications.
                                </p>
                            </li>
                            <li
                                className={`${listItemClasses} delay-[1500ms] ${
                                    loaded
                                        ? "translate-x-0 opacity-1"
                                        : "translate-x-20 opacity-0"
                                }`}
                            >
                                <Image
                                    src={idea}
                                    alt={"engineering"}
                                    width={30}
                                />
                                <p className={listParagraphClasses}>
                                    As an almost Systems Engineer, problem
                                    solving is one of my strenghts.
                                </p>
                            </li>
                            <li
                                className={`${listItemClasses} delay-[2000ms] ${
                                    loaded
                                        ? "translate-x-0 opacity-1"
                                        : "translate-x-20 opacity-0"
                                }`}
                            >
                                <Image
                                    src={shuffle}
                                    alt={"shuffle"}
                                    width={30}
                                />
                                <p className={listParagraphClasses}>
                                    I'm versatile and can efficiently work
                                    either by myself or as a part of a team.
                                </p>
                            </li>
                            <li
                                className={`${listItemClasses} delay-[2500ms] ${
                                    loaded
                                        ? "translate-x-0 opacity-1"
                                        : "translate-x-20 opacity-0"
                                }`}
                            >
                                <Image src={cap} alt={"cap"} width={30} />
                                <p className={listParagraphClasses}>
                                    I'm a fast learner, so acquiring new skills
                                    to work with always gets me.
                                </p>
                            </li>
                            <li
                                className={`${listItemClasses} delay-[3000ms] ${
                                    loaded
                                        ? "translate-x-0 opacity-1"
                                        : "translate-x-20 opacity-0"
                                }`}
                            >
                                <Image src={ui} alt={"ui"} width={30} />
                                <p className={listParagraphClasses}>
                                    I love designing and creating user friendly,
                                    nice looking and feeling apps.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
