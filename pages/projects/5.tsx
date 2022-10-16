import Project from "../../components/Project";
import Image1 from "../../public/apps/Finances/Finances.png";
import Image2 from "../../public/apps/Finances/Finances2.png";
import Image3 from "../../public/apps/Finances/Finances3.png";
import Image4 from "../../public/apps/Finances/Finances4.png";

const Project5 = () => {
    return (
        <div>
            <Project
                title="Finances"
                languages={["Flutter", "Dart"]}
                images={[Image1, Image2, Image3, Image4]}
            >
                <p>
                    This mobile Android app was developed as a final project for
                    a university subject. It&#39;s main purpose is to follow the
                    evolution of the Argentine general Consumer Price Index and
                    it&#39;s variation. The data comes from a government open
                    API. It uses Google&#39;s{" "}
                    <span className="font-bold">Material Design Theme</span> and
                    consists of a pair of graph charts and a table with the
                    detailed information shown in the charts.
                </p>
            </Project>
        </div>
    );
};

export default Project5;
