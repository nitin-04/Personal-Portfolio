import { useState } from "react";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState({ loading: false, message: "", type: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: "", type: "" });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "05d0483a-2f2f-4100-8f12-2f1b1a8b9724",
                    ...formData,
                }),
            });

            if (response.ok) {
                setStatus({
                    loading: false,
                    message: "Message sent successfully! Thank you for reaching out.",
                    type: "success",
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus({ loading: false, message: "Something went wrong. Please try again.", type: "error" });
            }
        } catch (err) {
            setStatus({ loading: false, message: "An error occurred. Please try again.", type: "error" });
        }
    };

    return (
        <section className="contact section">
            <h2 className="title">
                GET IN <span>TOUCH</span>
            </h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title"><span>Contact Me</span> Here</h3>
                    <p className="contact__description">
                        {`I’d love to hear from you ! Whether you have a job opportunity, a collaboration idea, or just
                        want to chat about web development, feel free to reach out.`}
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon" />
                            <div>
                                <span className="info__title">Mail Me</span>
                                <h4 className="info__desc">nitinbahuguna1251@gmail.com</h4>
                            </div>
                        </div>
                        <div className="info__item">
                            <FaPhoneSquareAlt className="info__icon" />
                            <div>
                                <span className="info__title">Call Me</span>
                                <h4 className="info__desc">9027280351</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <a href="https://github.com/nitin-04" className="contact__social-link" target="_blank">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/nitin-bahuguna-66624b176" className="contact__social-link" target="_blank">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
 
                <form onSubmit={handleSubmit} className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="form__control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form__input-div">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="form__control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="subject">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Enter Subject"
                                className="form__control"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea
                            name="message"
                            placeholder=" Message Here..."
                            className="form__control textarea"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="send_button" type="submit" disabled={status.loading}>
                        <div className="msg">{status.loading ? "Sending..." : "Send Message"}</div>
                        <span className="send_button__icon ">
                            <FiSend />
                        </span>
                    </button>

                    {status.message && (
                        <p className={`status-message ${status.type}`}>
                            {status.message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
