import Brightness4Icon from "@mui/icons-material/Brightness4";

import UK from "../public/flags/uk.png";
import Spain from "../public/flags/spain.png";

import Image from "next/future/image";
import Router from "next/router";
import { useRouter } from "next/router";

import translations from "../public/locales.js";
import NavRoutesDropdown from "./NavRoutesDropdown";

const Navbar = (propsWithType: {
    setLoadOut: () => void;
    toggleDarkMode: () => void;
}) => {
    const router = useRouter();

    const { locale } = useRouter();
    const { index, info, projects, contact } = translations[locale].navbar;

    const buttonClasses =
        "translate duration-300 font-second font-bold text-lg m-3 text-white hover:-translate-y-1";

    const changeLocale = (locale) => {
        router.push(router.pathname, router.asPath, { locale });
    };

    const handleRouting = (route: string) => {
        setTimeout(() => {
            Router.push(route);
        }, 300);
    };

    return (
        <div className="sticky top-0 z-50 flex flex-row justify-between items-center w-full h-12 bg-black/40 backdrop-blur-sm">
            <div>
                <NavRoutesDropdown
                    handleRouting={handleRouting}
                    setLoadOut={propsWithType.setLoadOut}
                />
                <div className="hidden tablet:flex">
                    <button
                        className={buttonClasses}
                        onClick={() => {
                            if ("/" != router.pathname) {
                                propsWithType.setLoadOut();
                            }
                            handleRouting("/");
                        }}
                    >
                        {index}
                    </button>

                    <button
                        className={buttonClasses}
                        onClick={() => {
                            if ("/info" != router.pathname) {
                                propsWithType.setLoadOut();
                            }
                            handleRouting("/info");
                        }}
                    >
                        {info}
                    </button>

                    <button
                        className={buttonClasses}
                        onClick={() => {
                            if ("/projects" != router.pathname) {
                                propsWithType.setLoadOut();
                            }
                            handleRouting("/projects");
                        }}
                    >
                        {projects}
                    </button>

                    <button
                        className={buttonClasses}
                        onClick={() => {
                            if ("/contact" != router.pathname) {
                                propsWithType.setLoadOut();
                            }
                            handleRouting("/contact");
                        }}
                    >
                        {contact}
                    </button>
                </div>
            </div>
            <div className="flex flex-row">
                <Image
                    onClick={() => changeLocale("es-ES")}
                    className="translate duration-300 m-3 justify-self-end cursor-pointer hover:scale-125"
                    src={Spain}
                    alt="Spain flag"
                    width={35}
                    height={35}
                />

                <Image
                    onClick={() => changeLocale("en-UK")}
                    className="translate duration-300 m-3 justify-self-end cursor-pointer hover:scale-125"
                    src={UK}
                    alt="UK flag"
                    width={35}
                    height={35}
                />
                <button
                    className="translate duration-300 font-second font-bold text-lg m-3 justify-self-end text-black dark:text-white hover:scale-125"
                    onClick={propsWithType.toggleDarkMode}
                >
                    <Brightness4Icon width={35} height={35} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
