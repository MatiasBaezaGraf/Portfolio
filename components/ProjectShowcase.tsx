import { useRouter } from "next/router";
import { useState } from "react";
import Router from "next/router";
import Image from "next/future/image";

//Project Images
import Wallet from "../public/apps/Wallet/Wallet.png";
import Weather from "../public/apps/Weather/Weather.png";
import AllPlast from "../public/apps/AllPlast/AllPlast.png";
import Certificados from "../public/apps/Certificados/Certificados.png";
import Constancias from "../public/apps/Constancias/Constancias.png";
import Finances from "../public/apps/Finances/Finances.png";

const projects = [
    {
        id: 1,
        name: "Weather",
        description: "Weather forecast website made to learn Flask",
        languages: ["Python"],
        image: Weather,
    },
    {
        id: 2,
        name: "UAP Certificados",
        description:
            "Website developet to easily verify the validity of UAP student records",
        languages: ["Rails", "Ruby", "PostgreSQL"],
        image: Certificados,
    },
    {
        id: 3,
        name: "Wallet",
        description: "Simple expense tracker web app",
        languages: ["React", "Typescript", "Python", "Tailwind", "SQLite"],
        image: Wallet,
    },
    {
        id: 4,
        name: "UAP Constacias",
        description:
            "Web app for the UAP students to self-manage their student records",
        languages: ["Rails", "Ruby", "Javascript", "Bootstrap", "PostgreSQL"],
        image: Constancias,
    },
    {
        id: 5,
        name: "Finances",
        description:
            "Mobile Anroid app used to follow the monthly evolution of some economic indicators",
        languages: ["Flutter", "Dart"],
        image: Finances,
    },
    {
        id: 6,
        name: "AllPlast",
        description: "Web app made for stock control of a local shop",
        languages: ["Rails", "Ruby", "Tailwind", "SQLite"],
        image: AllPlast,
    },
];

const ProjectShowcase = (propsWithType: {
    loaded: boolean;
    fadeOutHandler: () => void;
}) => {
    const [projectHovering, setProjectHovering] = useState(0);

    const openProject = (id: number) => {
        propsWithType.fadeOutHandler();
        setTimeout(() => {
            Router.push(`/projects/${id}`);
        }, 300);
    };

    return (
        <div>
            <div
                className={`transform duration-1000 text-center pt-14 pb-8 mx-4 ${
                    propsWithType.loaded
                        ? "opacity-1 translate-y-0"
                        : "opacity-0 -translate-y-12"
                }`}
            >
                <h1 className="transform duration-1000 text-6xl font-second font-bold text-center text-black dark:text-white">
                    My projects
                </h1>
            </div>
            <div
                className={`relative transform duration-1000 grid laptop:grid-cols-2 desktop:grid-cols-3 mb-10 mx-6 tablet:mx-10 ${
                    propsWithType.loaded
                        ? "opacity-1 translate-y-0"
                        : "opacity-0 translate-y-12"
                }`}
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => openProject(project.id)}
                        onMouseEnter={() => {
                            setProjectHovering(project.id);
                        }}
                        onMouseLeave={() => {
                            setProjectHovering(0);
                        }}
                        className={`transform duration-300 cursor-pointer border-4 border-stone-700 shadow-stone-700 dark:shadow-black m-6  ${
                            projectHovering == project.id
                                ? "scale-105 shadow-xl"
                                : "shadow-lg"
                        }`}
                    >
                        <div
                            className={`absolute z-20 transform duration-300 w-full p-2 h-full bg-project text-white ${
                                projectHovering == project.id
                                    ? "opacity-1"
                                    : "opacity-0"
                            }`}
                        >
                            <h1 className="font-main font-bold text-xl">
                                {project.name}
                            </h1>
                            <p className="font-main text-sm mt-1">
                                {project.description}
                            </p>
                            <div className="flex flex-row">
                                {project.languages.map((language, index) => (
                                    <div key={index} className="mr-4 mt-2">
                                        <Image
                                            src={`/languages/${language}.png`}
                                            alt={language}
                                            width={33}
                                            height={33}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Image
                            src={project.image}
                            placeholder="blur"
                            className={`transform duration-300 z-10 max-w-full max-h-full`}
                            alt="Project"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectShowcase;
