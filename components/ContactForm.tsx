import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "contact_service",
                "contact_form",
                form.current,
                "YyEb3_VNU-U4iB7xg"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <button type="submit" value="Send">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
