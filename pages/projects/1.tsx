import Project from "../../components/Project";
import Image1 from "../../public/apps/Weather/Weather.png";
import Image2 from "../../public/apps/Weather/Weather2.png";
import Image3 from "../../public/apps/Weather/Weather3.png";
import Image4 from "../../public/apps/Weather/Weather4.png";
import Image5 from "../../public/apps/Weather/Weather5.png";
import Image6 from "../../public/apps/Weather/Weather6.png";
import Image7 from "../../public/apps/Weather/Weather7.png";

const Project1 = () => {
    return (
        <div>
            <Project
                title="Weather"
                languages={["Python", "Python"]}
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
                    This simple app consists of a form that makes requests to
                    two <a href="https://openweathermap.org/">Openweathermap</a>{" "}
                    APIs in order to get the current daily and hourly forecasts
                    and some other weather details of locations all around the
                    globe and depending on the moment of the day of the searched
                    location, the background shows one of four different images.
                    With this project I learnt how to use{" "}
                    <span className="font-bold">Flask</span>, a{" "}
                    <span className="font-bold">Python Web framework</span>.
                </p>
            </Project>
        </div>
    );
};

export default Project1;
