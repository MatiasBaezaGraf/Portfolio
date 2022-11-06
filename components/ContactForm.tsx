import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PaperAirplaneIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

import translations from "../public/locales.js";

const ContactForm = (propsWithType: { loaded: boolean }) => {
    const [sent, setSent] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSetName = (name: any) => {
        setName(name.target.value);
    };
    const onSetEmail = (email: any) => {
        setEmail(email.target.value);
    };
    const onSetMessage = (message: any) => {
        setMessage(message.target.value);
    };

    const form = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        setSent(true);

        setName("");
        setEmail("");
        setMessage("");

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

    const { locale } = useRouter();
    const {
        title,
        name_placeholder,
        email_placeholder,
        message_placeholder,
        sent_message,
        button,
    } = translations[locale].contact;

    return (
        <div className="flex flex-col items-center w-full py-12">
            <div className="flex flex-row justify-start w-4/5 tablet:w-2/3">
                <h1
                    className={`transform duration-1000 font-second font-bold text-center tablet:text-start text-6xl p-2 text-black dark:text-white ${
                        propsWithType.loaded
                            ? "translate-y-0 opacity-1"
                            : "-translate-y-12 opacity-0"
                    } `}
                >
                    {title}
                </h1>
            </div>
            <form
                className="flex flex-col w-4/5 tablet:w-2/3 font-second text-xl"
                ref={form}
                onSubmit={sendEmail}
            >
                <input
                    className={`transform duration-1000 delay-200 m-2 p-2 bg-input-form rounded ${
                        propsWithType.loaded
                            ? "translate-y-0 opacity-1"
                            : "translate-y-12 opacity-0"
                    }`}
                    onChange={onSetName}
                    value={name}
                    placeholder={name_placeholder}
                    type="text"
                    name="user_name"
                />
                <input
                    className={`transform duration-1000 delay-[700ms] m-2 p-2 bg-input-form rounded ${
                        propsWithType.loaded
                            ? "translate-y-0 opacity-1"
                            : "translate-y-12 opacity-0"
                    }`}
                    onChange={onSetEmail}
                    value={email}
                    placeholder={email_placeholder}
                    type="email"
                    name="user_email"
                />
                <textarea
                    className={`transform duration-1000 delay-[1200ms] m-2 p-2 bg-input-form rounded resize-none ${
                        propsWithType.loaded
                            ? "translate-y-0 opacity-1"
                            : "translate-y-12 opacity-0"
                    }`}
                    onChange={onSetMessage}
                    value={message}
                    placeholder={message_placeholder}
                    name="message"
                    rows={15}
                />
                <div className="flex flex-row items-center">
                    <button
                        className={`group transform duration-1000 delay-[1700ms] flex flex-row w-min items-center text-xl m-2 p-2 pr-3 rounded text-white bg-gray-800 ${
                            propsWithType.loaded
                                ? "translate-y-0 opacity-1"
                                : "translate-y-12 opacity-0"
                        }`}
                        type="submit"
                        value="Send"
                        disabled={
                            name.length == 0 ||
                            email.length == 0 ||
                            message.length == 0
                        }
                    >
                        {button}
                        <PaperAirplaneIcon
                            className={`transform duration-500 w-5 h-5 ml-2  ${
                                name.length == 0 ||
                                email.length == 0 ||
                                message.length == 0 ||
                                "group-hover:translate-x-2"
                            }`}
                        />
                    </button>
                    <h1
                        className={`transform duration-1000 flex flex-row items-center font-main ml-2 ${
                            sent
                                ? "translate-y-0 opacity-1"
                                : "translate-y-4 opacity-0"
                        }`}
                    >
                        {sent_message}
                        <FaceSmileIcon className="w-7 h-7 ml-2 text-yellow-500" />
                    </h1>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
