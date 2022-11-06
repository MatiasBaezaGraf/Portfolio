import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import {
    Bars3Icon,
    EnvelopeIcon,
    HomeIcon,
    RectangleStackIcon,
    UserIcon,
} from "@heroicons/react/24/solid";

import translations from "../public/locales.js";
import { Fragment } from "react";

const NavRoutesDropdown = (propsWithType: {
    handleRouting: (route: string) => void;
    setLoadOut: () => void;
}) => {
    const router = useRouter();
    const { locale } = useRouter();
    const { index, info, projects, contact } = translations[locale].navbar;

    const buttonClasses =
        "translate duration-300 flex flex-row font-second font-bold text-2xl m-3 text-black dark:text-white hover:translate-x-1";

    return (
        <div className="tablet:hidden">
            <Menu>
                <Menu.Button className="transform duration-200 inline-flex w-full justify-center rounded-md px-1 py-2 text-white hover:scale-125">
                    <Bars3Icon className="mx-3 h-6 w-6 text-black dark:text-white" />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute left-0 flex flex-col w-56 mt-1 bg-stone-300/95 dark:bg-stone-800/95 items-start rounded-sm">
                        <Menu.Item>
                            <button
                                className={buttonClasses}
                                onClick={() => {
                                    if ("/" != router.pathname) {
                                        propsWithType.setLoadOut();
                                    }
                                    propsWithType.handleRouting("/");
                                }}
                            >
                                <HomeIcon className="h-7 w-7 mr-4" />
                                {index}
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                            <button
                                className={buttonClasses}
                                onClick={() => {
                                    if ("/info" != router.pathname) {
                                        propsWithType.setLoadOut();
                                    }
                                    propsWithType.handleRouting("/info");
                                }}
                            >
                                <UserIcon className="h-7 w-7 mr-4" />
                                {info}
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                            <button
                                className={buttonClasses}
                                onClick={() => {
                                    if ("/projects" != router.pathname) {
                                        propsWithType.setLoadOut();
                                    }
                                    propsWithType.handleRouting("/projects");
                                }}
                            >
                                <RectangleStackIcon className="h-7 w-7 mr-4" />
                                {projects}
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                            <button
                                className={buttonClasses}
                                onClick={() => {
                                    if ("/contact" != router.pathname) {
                                        propsWithType.setLoadOut();
                                    }
                                    propsWithType.handleRouting("/contact");
                                }}
                            >
                                <EnvelopeIcon className="h-7 w-7 mr-4" />
                                {contact}
                            </button>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

export default NavRoutesDropdown;
