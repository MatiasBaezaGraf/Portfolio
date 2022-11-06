import { useRouter } from "next/router";
import Project from "../../components/Project";
import Image1 from "../../public/apps/Finances/Finances.png";
import Image2 from "../../public/apps/Finances/Finances2.png";
import Image3 from "../../public/apps/Finances/Finances3.png";
import Image4 from "../../public/apps/Finances/Finances4.png";

import translations from "../../public/locales.js";

const Project5 = () => {
    const { locale } = useRouter();
    const { title, info_p1_1, info_p1_2, info_p1_3 } =
        translations[locale].project5;
    return (
        <div>
            <Project
                title={title}
                languages={["Flutter", "Dart"]}
                images={[Image1, Image2, Image3, Image4]}
            >
                <p>
                    {info_p1_1}
                    <span className="font-bold">{info_p1_2}</span>
                    {info_p1_3}
                </p>
            </Project>
        </div>
    );
};

export default Project5;
