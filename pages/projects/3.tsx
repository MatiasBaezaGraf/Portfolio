import Project from "../../components/Project";
import Image1 from "../../public/apps/Wallet/Wallet.png";
import Image2 from "../../public/apps/Wallet/Wallet2.png";
import Image3 from "../../public/apps/Wallet/Wallet3.png";
import Image4 from "../../public/apps/Wallet/Wallet4.png";
import Image5 from "../../public/apps/Wallet/Wallet5.png";

const Project3 = () => {
    return (
        <div>
            <Project
                title="Wallet"
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
                    With this web{" "}
                    <span className="italic">Single Page Application</span> you
                    can easily calculate your monthly expenses in total and
                    divided by category. You can create as many categories and
                    expenses as you want.
                </p>
                <br />
                <p>
                    The front end was built with{" "}
                    <span className="font-bold">React</span> along with{" "}
                    <span className="font-bold">Typescript</span> in conjuntion
                    with <span className="font-bold">TailwindCSS</span> to have
                    a fully responsive design and avoid having stylesheets
                    everywhere.
                </p>
                <br />
                <p>
                    The backend functionality was developed with the{" "}
                    <span className="font-bold">Python</span> framework,{" "}
                    <span className="font-bold">Django Rest Framework</span>.
                    This last one was chosen for it's simplicity, felxibility
                    and powerful serialization engine.
                </p>
            </Project>
        </div>
    );
};

export default Project3;
