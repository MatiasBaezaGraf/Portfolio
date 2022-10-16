import Image, { StaticImageData } from "next/future/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";

const ProjectGallery = (propsWithType: { images: Array<StaticImageData> }) => {
    const [isOpen, setOpenState] = useState(false);
    const [selectedImage, setSelectedImage] = useState();

    const scrollHandle = (direction: string) => {
        const sample = document.getElementById("0");
        const scrollElement = document.getElementById("scrollElement");
        if (direction === "forward") {
            scrollElement.scrollBy(sample.offsetWidth, 0);
        } else if (direction === "backwards") {
            scrollElement.scrollBy(-sample.offsetWidth, 0);
        }
    };

    const modalHandler = (image) => {
        setOpenState(true);
        setSelectedImage(image);
    };

    return (
        <div className="transform duration-300 flex flex-col min-w-full py-4 bg-stone-500/75 dark:bg-stone-700/50 backdrop-blur-sm">
            <h1 className="font-title text-xl pl-12 font-bold">Gallery</h1>
            <div className="flex flex-row items-center justify-center">
                <button onClick={() => scrollHandle("backwards")}>
                    <ChevronLeftIcon className="dark:text-white dark:hover:text-stone-300 text-black hover:text-stone-800 w-12 h-12" />
                </button>
                <div
                    id="scrollElement"
                    className="flex flex-row overflow-x-auto scroll-smooth scrollbar-hide bottom-0 snap-x"
                >
                    {propsWithType.images.map((image, index) => (
                        <div
                            onClick={() => modalHandler(image)}
                            id={`${index}`}
                            key={index}
                            className="transform duration-300 cursor-pointer flex-shrink-0 snap-center m-5 border-black border-2 hover:scale-110"
                        >
                            <Image
                                className="w-[250px] tablet:w-[400px]"
                                src={image}
                                placeholder="blur"
                                alt="Project"
                            />
                        </div>
                    ))}
                </div>
                <button className="" onClick={() => scrollHandle("forward")}>
                    <ChevronRightIcon className="dark:text-white dark:hover:text-stone-300 text-black hover:text-stone-800 w-12 h-12" />
                </button>
                <Modal
                    isOpen={isOpen}
                    openModal={() => setOpenState(true)}
                    closeModal={() => setOpenState(false)}
                    image={selectedImage}
                />
            </div>
        </div>
    );
};

export default ProjectGallery;
