import React from "react";
import "../css/contact.css";
import avatarImage from "../assets/images/me.svg";

function Contact() {
    return (
        <div className="main-container">
            <div className="contact-container">
                <div className="contact-img-container">
                    <img src={avatarImage} alt="Avatar" />
                </div>
                <div className="contact-text-container">
                    <h1 className="heading">
                        You can contact me via email or direct message on
                        LinkedIn!
                    </h1>
                    <p className="para-text">
                        Feel free to contact me if you have any questions about
                        my portfolio or projects I have worked on!
                    </p>
                    <p className="para-text">
                        My email is{" "}
                        <a
                            className="contact-email"
                            href="mailto:lumnicaelvis@gmail.com"
                        >
                            lumnicaelvis@gmail.com
                        </a>{" "}
                        and I usually respond within 24 hours. Looking forward
                        to speaking with you!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
