import { useRouter } from "next/router";
import Project from "../../components/Project";
import Image1 from "../../public/apps/Certificados/Certificados.png";
import Image2 from "../../public/apps/Certificados/Certificados2.png";
import Image3 from "../../public/apps/Certificados/Certificados3.png";

import translations from "../../public/locales.js";

const Project2 = () => {
    const { locale } = useRouter();
    const {
        title,
        info_p1,
        info_p2_1,
        info_p2_2,
        info_p2_3,
        info_p2_4,
        info_p2_5,
    } = translations[locale].project2;
    return (
        <div>
            <Project
                title={title}
                languages={["Rails", "Ruby", "PostgreSQL"]}
                images={[Image1, Image2, Image3]}
            >
                <p>{info_p1}</p>
                <br />
                <p>
                    {info_p2_1}
                    <span className="font-bold">{info_p2_2}</span>
                    {info_p2_3}
                    <span className="font-bold">{info_p2_4}</span>
                    {info_p2_5}
                </p>
            </Project>
        </div>
    );
};

export default Project2;
