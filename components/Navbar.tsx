import Brightness4Icon from "@mui/icons-material/Brightness4";
import Router from "next/router";
import { useRouter } from "next/router";

const Navbar = (propsWithType: {
    setLoadOut: () => void;
    toggleDarkMode: () => void;
}) => {
    const router = useRouter();

    const buttonClasses =
        "translate duration-300 font-second font-bold text-lg m-3 text-white hover:-translate-y-1";

    const handleRouting = (route: string) => {
        setTimeout(() => {
            Router.push(route);
        }, 300);
    };

    return (
        <div className="sticky top-0 z-50 flex flex-row justify-between items-center w-full h-12 bg-black/40 backdrop-blur-sm">
            <div>
                <button
                    className={buttonClasses}
                    onClick={() => {
                        if ("/" != router.pathname) {
                            propsWithType.setLoadOut();
                        }
                        handleRouting("/");
                    }}
                >
                    Home
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
                    Contact
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
                    Projects
                </button>
            </div>
            <div className="self-end">
                <button
                    className="translate duration-300 font-second font-bold text-lg m-3 text-black dark:text-white hover:scale-125"
                    onClick={propsWithType.toggleDarkMode}
                >
                    <Brightness4Icon width={35} height={35} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
