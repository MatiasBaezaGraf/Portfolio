import Project from "../../components/Project";
import Image1 from "../../public/apps/Constancias/Constancias.png";
import Image2 from "../../public/apps/Constancias/Constancias2.png";
import Image3 from "../../public/apps/Constancias/Constancias3.png";
import Image4 from "../../public/apps/Constancias/Constancias4.png";
import Image5 from "../../public/apps/Constancias/Constancias5.png";

const Project4 = () => {
    return (
        <div>
            <Project
                title="UAP Constancias"
                languages={[
                    "Rails",
                    "Ruby",
                    "Javascript",
                    "Bootstrap",
                    "PostgreSQL",
                ]}
                images={[Image1, Image2, Image3, Image4, Image5]}
            >
                <p>
                    This functionality is part of the larger app, UAP Student
                    Portal. It gives students a way to self-manage the process
                    of creating a student and admission certificates in an
                    instant, replacing a process that required paperwork and
                    time. It includes the option to download the document in PDF
                    and an easy QR validation in conjuntion with the app UAP
                    Certificados, to check it's validity.
                </p>
                <br />
                <p>
                    The app is connected directly to the organization's
                    database, which runs on{" "}
                    <span className="font-bold">PostgreSQL</span>, so it can
                    easily retrieve the required data to tell if a student is
                    eligible to get a certificate. Since the database is
                    enormous, this web app takes benefit from the{" "}
                    <span className="italic">
                        Rails Object Relational Mapping
                    </span>
                    , <span className="font-bold">Active Record</span>, to
                    define the main models. However, I had to design some
                    queries to get specific data that was needed. For the
                    visuals, I took advantage of{" "}
                    <span className="font-bold">Bootstrap</span> to match the
                    design with the one used in the Student Portal.
                </p>
            </Project>
        </div>
    );
};

export default Project4;
