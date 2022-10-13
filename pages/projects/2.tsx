import Project from "../../components/Project";
import Image1 from "../../public/apps/Certificados/Certificados.png";
import Image2 from "../../public/apps/Certificados/Certificados2.png";
import Image3 from "../../public/apps/Certificados/Certificados3.png";

const Project2 = () => {
    return (
        <div>
            <Project
                title="UAP Certificados"
                languages={["Rails", "Ruby", "PostgreSQL"]}
                images={[Image1, Image2, Image3]}
            >
                <p>
                    This web app was built for the UAP students, to easily
                    verify the validity of their Student Certificates, and for
                    the UAP itself, to prevent forgery of certificates. It
                    consists of a form in which you put a certificate's unique
                    code, and it shows, if it exists, to who it belongs, if it
                    is currently valid and it's validity period. It also
                    provides easy QR validation. If you scan the certificate's
                    QR code, it redirects you to a page with all the mentioned
                    information.
                </p>
                <br />
                <p>
                    The app talks directly with the database, which runs on{" "}
                    <span className="font-bold">PostgreSQL</span>, to retrieve
                    all the required information related to the provided
                    certificate code. The form is protected with Google's{" "}
                    <span className="font-bold">reCAPTCHA</span>, to counter
                    DDOS attacks.
                </p>
            </Project>
        </div>
    );
};

export default Project2;
