import { SocialIcon } from "react-social-icons";
import ProjectShowcase from "./ProjectShowcase";

const SocialTabs = (propsWithType: { loaded: boolean; darkMode: boolean }) => {
    return (
        <div className="flex flex-col">
            <div className="group transform duration-500 hover:translate-x-2">
                <SocialIcon
                    className={`transform duration-500 my-2 delay-[2100ms] ${
                        propsWithType.loaded
                            ? "translate-x-0 opacity-1"
                            : "-translate-x-6 opacity-0"
                    }`}
                    fgColor={`${
                        propsWithType.darkMode ? "#3498DB" : "#1773b3"
                    }`}
                    bgColor="transparent"
                    url="https://twitter.com/matibaezagraf"
                    target="blank"
                />
            </div>
            <div className="group transform duration-500 hover:translate-x-2">
                <SocialIcon
                    className={`transform duration-500 my-2 delay-[2300ms] ${
                        propsWithType.loaded
                            ? "translate-x-0 opacity-1"
                            : "-translate-x-6 opacity-0"
                    }`}
                    fgColor={`${
                        propsWithType.darkMode ? "#FD5DFF" : "#b31db5"
                    }`}
                    bgColor="transparent"
                    url="https://ig.me/m/matibaezagraf"
                    network="instagram"
                    target="blank"
                />
            </div>
            <div className="group transform duration-500 hover:translate-x-2">
                <SocialIcon
                    className={`transform duration-500 my-2 delay-[2500ms] ${
                        propsWithType.loaded
                            ? "translate-x-0 opacity-1"
                            : "-translate-x-6 opacity-0"
                    }`}
                    fgColor={`${
                        propsWithType.darkMode ? "#58D68D " : "#14b356"
                    }`}
                    bgColor="transparent"
                    url="https://wa.me/2235440115"
                    network="whatsapp"
                    target="blank"
                />
            </div>
            <div className="group transform duration-500 hover:translate-x-2">
                <SocialIcon
                    className={`transform duration-500 my-2 delay-[2700ms] ${
                        propsWithType.loaded
                            ? "translate-x-0 opacity-1"
                            : "-translate-x-6 opacity-0"
                    }`}
                    fgColor={`${propsWithType.darkMode ? "white" : "black"}`}
                    bgColor="transparent"
                    url="https://github.com/MatiasBaezaGraf"
                    target="blank"
                />
            </div>
            <div className="group transform duration-500 hover:translate-x-2">
                <SocialIcon
                    className={`transform duration-500 my-2 delay-[2900ms] ${
                        propsWithType.loaded
                            ? "translate-x-0 opacity-1"
                            : "-translate-x-6 opacity-0"
                    }`}
                    fgColor="#207FFF "
                    bgColor="transparent"
                    url="https://www.linkedin.com/in/matias-baeza-graf-28781a224"
                    target="blank"
                />
            </div>
        </div>
    );
};

export default SocialTabs;
