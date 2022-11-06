import { useRouter } from "next/router";
import Project from "../../components/Project";
import Image1 from "../../public/apps/Weather/Weather.png";
import Image2 from "../../public/apps/Weather/Weather2.png";
import Image3 from "../../public/apps/Weather/Weather3.png";
import Image4 from "../../public/apps/Weather/Weather4.png";
import Image5 from "../../public/apps/Weather/Weather5.png";
import Image6 from "../../public/apps/Weather/Weather6.png";
import Image7 from "../../public/apps/Weather/Weather7.png";

import translations from "../../public/locales.js";

const Project1 = () => {
    const { locale } = useRouter();
    const { title, info_p1_1, info_p1_2 } = translations[locale].project1;
    return (
        <div>
            <Project
                title={title}
                languages={["Python"]}
                images={[
                    Image1,
                    Image2,
                    Image3,
                    Image4,
                    Image5,
                    Image6,
                    Image7,
                ]}
            >
                <p>
                    {info_p1_1} <span className="font-bold">{info_p1_2}</span>
                </p>
            </Project>
        </div>
    );
};

export default Project1;
