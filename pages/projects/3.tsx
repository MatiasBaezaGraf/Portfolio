import { useRouter } from "next/router";
import Project from "../../components/Project";
import Image1 from "../../public/apps/Wallet/Wallet.png";
import Image2 from "../../public/apps/Wallet/Wallet2.png";
import Image3 from "../../public/apps/Wallet/Wallet3.png";
import Image4 from "../../public/apps/Wallet/Wallet4.png";
import Image5 from "../../public/apps/Wallet/Wallet5.png";

import translations from "../../public/locales.js";

const Project3 = () => {
    const { locale } = useRouter();
    const {
        title,
        info_p1_1,
        info_p1_2,
        info_p1_3,
        info_p2_1,
        info_p2_2,
        info_p2_3,
        info_p2_4,
        info_p2_5,
        info_p2_6,
        info_p2_7,
        info_p3_1,
        info_p3_2,
        info_p3_3,
        info_p3_4,
        info_p3_5,
    } = translations[locale].project3;
    return (
        <div>
            <Project
                title={title}
                languages={[
                    "React",
                    "Typescript",
                    "Python",
                    "Tailwind",
                    "SQLite",
                ]}
                images={[Image1, Image2, Image3, Image4, Image5]}
            >
                <p>
                    {info_p1_1}
                    <span className="italic">{info_p1_2}</span>
                    {info_p1_3}
                </p>
                <br />
                <p>
                    {info_p2_1}
                    <span className="font-bold">{info_p2_2}</span>
                    {info_p2_3}
                    <span className="font-bold">{info_p2_4}</span>
                    {info_p2_5}
                    <span className="font-bold">{info_p2_6}</span>
                    {info_p2_7}
                </p>
                <br />
                <p>
                    {info_p3_1}
                    <span className="font-bold">{info_p3_2}</span>
                    {info_p3_3}
                    <span className="font-bold">{info_p3_4}</span>
                    {info_p3_5}
                </p>
            </Project>
        </div>
    );
};

export default Project3;
