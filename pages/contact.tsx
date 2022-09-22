import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <div className="min-h-screen bg-split-dark bg-fixed">
            <title>Matías Baeza Graf</title>
            <Navbar />
            <ContactForm />
        </div>
    );
};

export default Contact;
