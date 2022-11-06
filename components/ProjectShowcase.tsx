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

import translations from "../public/locales.js";

const ProjectShowcase = (propsWithType: {
    loaded: boolean;
    fadeOutHandler: () => void;
}) => {
    const { locale } = useRouter();
    const {
        title,
        project_1_description,
        project_2_description,
        project_3_description,
        project_4_description,
        project_5_description,
        project_6_description,
    } = translations[locale].projects;

    const [projectHovering, setProjectHovering] = useState(0);

    const projects = [
        {
            id: 1,
            name: "Weather",
            description: `${project_1_description}`,
            languages: ["Python"],
            image: Weather,
        },
        {
            id: 2,
            name: "UAP Certificados",
            description: `${project_2_description}`,
            languages: ["Rails", "Ruby", "PostgreSQL"],
            image: Certificados,
        },
        {
            id: 3,
            name: "Wallet",
            description: `${project_3_description}`,
            languages: ["React", "Typescript", "Python", "Tailwind", "SQLite"],
            image: Wallet,
        },
        {
            id: 4,
            name: "UAP Constacias",
            description: `${project_4_description}`,
            languages: [
                "Rails",
                "Ruby",
                "Javascript",
                "Bootstrap",
                "PostgreSQL",
            ],
            image: Constancias,
        },
        {
            id: 5,
            name: "Finances",
            description: `${project_5_description}`,
            languages: ["Flutter", "Dart"],
            image: Finances,
        },
        {
            id: 6,
            name: "AllPlast",
            description: `${project_6_description}`,
            languages: ["Rails", "Ruby", "Tailwind", "SQLite"],
            image: AllPlast,
        },
    ];

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
                    {title}
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
