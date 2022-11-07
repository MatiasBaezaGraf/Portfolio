import { useRouter } from "next/router.js";
import { SocialIcon } from "react-social-icons";

import translations from "../public/locales.js";

// For mobile view, the social icons are displayed in a different div, so the code block is repeated
const MainTitle = (propsWithType: {
    loaded: boolean;
    darkModeActive: boolean;
}) => {
    const { locale } = useRouter();
    const { title } = translations[locale].index;

    return (
        <div className="flex flex-col pb-4 items-center laptop:items-start">
            <h1
                className={` transform duration-1000 flex flex-col items-center text-center laptop:flex-row font-second font-bold text-7xl ${
                    propsWithType.loaded
                        ? "opacity-1 translate-y-0"
                        : "opacity-0 -translate-y-12"
                }`}
            >
                <span className="mb-5 laptop:mb-0 laptop:mr-6">
                    Matias Baeza Graf
                </span>
                <div className="hidden laptop:block">
                    <span
                        className={`transform duration-500 delay-1000 mr-3 ${
                            propsWithType.loaded ? "opacity-1" : "opacity-0"
                        }`}
                    >
                        <SocialIcon
                            className="transform duration-500 hover:-translate-y-2"
                            fgColor={`${
                                propsWithType.darkModeActive
                                    ? "#3498DB"
                                    : "#1773b3"
                            }`}
                            bgColor="transparent"
                            url="https://twitter.com/matibaezagraf"
                            target="blank"
                        />
                    </span>
                    <span
                        className={`transform duration-500 delay-[1200ms] mr-3 ${
                            propsWithType.loaded ? "opacity-1" : "opacity-0"
                        }`}
                    >
                        <SocialIcon
                            className="transform duration-500 hover:-translate-y-2"
                            fgColor={`${
                                propsWithType.darkModeActive
                                    ? "#FD5DFF"
                                    : "#b31db5"
                            }`}
                            bgColor="transparent"
                            url="https://ig.me/m/matibaezagraf"
                            network="instagram"
                            target="blank"
                        />
                    </span>
                    <span
                        className={`transform duration-500 delay-[1400ms] mr-3 ${
                            propsWithType.loaded ? "opacity-1" : "opacity-0"
                        }`}
                    >
                        <SocialIcon
                            className="transform duration-500 hover:-translate-y-2"
                            fgColor={`${
                                propsWithType.darkModeActive
                                    ? "#58D68D "
                                    : "#14b356"
                            }`}
                            bgColor="transparent"
                            url="https://wa.me/2235440115"
                            network="whatsapp"
                            target="blank"
                        />
                    </span>
                    <span
                        className={`transform duration-500 delay-[1600ms] mr-3 ${
                            propsWithType.loaded ? "opacity-1" : "opacity-0"
                        }`}
                    >
                        <SocialIcon
                            className="transform duration-500 hover:-translate-y-2"
                            fgColor={`${
                                propsWithType.darkModeActive ? "white" : "black"
                            }`}
                            bgColor="transparent"
                            url="https://github.com/MatiasBaezaGraf"
                            target="blank"
                        />
                    </span>
                    <span
                        className={`transform duration-500 delay-[1800ms] mr-3 ${
                            propsWithType.loaded ? "opacity-1" : "opacity-0"
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
                </div>
            </h1>
            <h1
                className={`transform duration-1000 font-second text-center text-4xl ${
                    propsWithType.loaded
                        ? "opacity-1 translate-y-0"
                        : "opacity-0 -translate-y-12"
                }`}
            >
                {title}
            </h1>
            <div className="py-5 laptop:hidden">
                <span
                    className={`transform duration-500 delay-1000 mr-3 ${
                        propsWithType.loaded ? "opacity-1" : "opacity-0"
                    }`}
                >
                    <SocialIcon
                        className="transform duration-500 hover:-translate-y-2"
                        fgColor={`${
                            propsWithType.darkModeActive ? "#3498DB" : "#1773b3"
                        }`}
                        bgColor="transparent"
                        url="https://twitter.com/matibaezagraf"
                        target="blank"
                    />
                </span>
                <span
                    className={`transform duration-500 delay-[1200ms] mr-3 ${
                        propsWithType.loaded ? "opacity-1" : "opacity-0"
                    }`}
                >
                    <SocialIcon
                        className="transform duration-500 hover:-translate-y-2"
                        fgColor={`${
                            propsWithType.darkModeActive ? "#FD5DFF" : "#b31db5"
                        }`}
                        bgColor="transparent"
                        url="https://www.instagram.com/matibaezagraf/"
                        target="blank"
                    />
                </span>
                <span
                    className={`transform duration-500 delay-[1400ms] mr-3 ${
                        propsWithType.loaded ? "opacity-1" : "opacity-0"
                    }`}
                >
                    <SocialIcon
                        className="transform duration-500 hover:-translate-y-2"
                        fgColor={`${
                            propsWithType.darkModeActive
                                ? "#58D68D "
                                : "#14b356"
                        }`}
                        bgColor="transparent"
                        url="https://wa.me/2235440115"
                        network="whatsapp"
                        target="blank"
                    />
                </span>
                <span
                    className={`transform duration-500 delay-[1600ms] mr-3 ${
                        propsWithType.loaded ? "opacity-1" : "opacity-0"
                    }`}
                >
                    <SocialIcon
                        className="transform duration-500 hover:-translate-y-2"
                        fgColor={`${
                            propsWithType.darkModeActive ? "white" : "black"
                        }`}
                        bgColor="transparent"
                        url="https://github.com/MatiasBaezaGraf"
                        target="blank"
                    />
                </span>
                <span
                    className={`transform duration-500 delay-[1800ms] mr-3 ${
                        propsWithType.loaded ? "opacity-1" : "opacity-0"
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
            </div>
        </div>
    );
};

export default MainTitle;
