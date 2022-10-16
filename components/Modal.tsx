import { Dialog, Transition } from "@headlessui/react";
import Image, { StaticImageData } from "next/future/image";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "next-dark-mode";

const Modal = (propsWithType: {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    image: StaticImageData;
}) => {
    const {
        darkModeActive, // boolean - whether the dark mode is active or not, // function - toggles the light mode on
    } = useDarkMode();

    return (
        <div>
            <Transition appear show={propsWithType.isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className={`relative z-10 ${darkModeActive ? "dark" : ""}`}
                    onClose={propsWithType.closeModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto scrollbar-hide">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="mt-12 w-full max-w-laptop transform overflow-hidden rounded-lg dark:bg-stone-800 bg-stone-300 p-6 text-right align-middle shadow-xl transition-all">
                                    <div>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center text-sm font-medium text-black hover:text-stone-700 dark:text-white dark:hover:text-stone-300"
                                            onClick={propsWithType.closeModal}
                                        >
                                            <XMarkIcon className="w-6 h-6" />
                                        </button>
                                    </div>
                                    <div className="shadow-lg shadow-stone-800 dark:shadow-black">
                                        <Image
                                            className="border-stone-400 border-2"
                                            src={propsWithType.image}
                                            alt="image"
                                        />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Modal;
