import Project from "../../components/Project";
import Image1 from "../../public/apps/AllPlast/AllPlast.png";

const Project6 = () => {
    return (
        <div>
            <Project
                title="AllPlast"
                languages={["Rails", "Ruby", "Tailwind", "SQLite"]}
                images={[Image1]}
            >
                <p>
                    This web app was built for a local disposable plastic
                    supplies shop, as a stock control tool. It allows to create
                    categories and products within them. It also keeps track of
                    the clients, detailed sales and supplier shipments. The
                    amount of stock available is shown in number but also as a
                    status bar that changes color depending on the remaining
                    units of each product.
                </p>
                <br />
                <p>
                    As it was built with{" "}
                    <span className="font-bold">Ruby on Rails</span>, this app
                    takes advantage of the{" "}
                    <span className="font-bold">Active Record</span>{" "}
                    <span className="italic">Object Relational Mapping</span>{" "}
                    for fast, simple and secure interactions with the database,
                    which for the moment runs on{" "}
                    <span className="font-bold">SQLite</span>. I developed this
                    project alongside with Santiago Paul and Jonathan Amse.
                </p>
            </Project>
        </div>
    );
};

export default Project6;
