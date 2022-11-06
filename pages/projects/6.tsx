import { useRouter } from "next/router";
import Project from "../../components/Project";
import Image1 from "../../public/apps/AllPlast/AllPlast.png";
import Image2 from "../../public/apps/AllPlast/AllPlast2.png";
import Image3 from "../../public/apps/AllPlast/AllPlast3.png";
import Image4 from "../../public/apps/AllPlast/AllPlast4.png";
import Image5 from "../../public/apps/AllPlast/AllPlast5.png";

import translations from "../../public/locales.js";

const Project6 = () => {
    const { locale } = useRouter();
    const {
        title,
        info_p1,
        info_p2_1,
        info_p2_2,
        info_p2_3,
        info_p2_4,
        info_p2_5,
        info_p2_6,
        info_p2_7,
        info_p2_8,
    } = translations[locale].project6;
    return (
        <div>
            <Project
                title={title}
                languages={["Rails", "Ruby", "Tailwind", "SQLite"]}
                images={[Image1, Image2, Image3, Image4, Image5]}
            >
                <p>{info_p1}</p>
                <br />
                <p>
                    {info_p2_1}
                    <span className="font-bold">{info_p2_2}</span>
                    {info_p2_3}
                    <span className="font-bold">{info_p2_4}</span>
                    <span className="italic">{info_p2_5}</span>
                    {info_p2_6}
                    <span className="font-bold">{info_p2_7}</span>
                    {info_p2_8}
                </p>
            </Project>
        </div>
    );
};

export default Project6;
