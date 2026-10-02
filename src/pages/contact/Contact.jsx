import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  const [status, setStatus] = useState({
    message: '',
    type: '',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = async (data) => {
    setStatus({ message: '', type: '' });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus({
        message: 'Web3Forms access key is not configured in .env file.',
        type: 'error',
      });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          ...data,
        }),
      });

      if (response.ok) {
        setStatus({
          message: 'Message sent successfully! Thank you for reaching out.',
          type: 'success',
        });
        reset();
      } else {
        setStatus({
          message: 'Something went wrong. Please try again.',
          type: 'error',
        });
      }
    } catch {
      setStatus({
        message: 'A network error occurred. Please try again later.',
        type: 'error',
      });
    }
  };

  return (
    <section className="contact section">
      <h2 className="title">
        GET IN <span>TOUCH</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            <span>Contact Me</span> Here
          </h3>
          <p className="contact__description">
            {`I’d love to hear from you! Whether you have an engineering opportunity, a project to collaborate on, or want to discuss full-stack architecture, feel free to reach out.`}
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail</span>
                <h4 className="info__desc">
                  <a href="mailto:nitinbahuguna1251@gmail.com">
                    nitinbahuguna1251@gmail.com
                  </a>
                </h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call</span>
                <h4 className="info__desc">
                  <a href="tel:+919027280351">+91 9027280351</a>
                </h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://github.com/nitin-04"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nitin-bahuguna-66624b176"
              className="contact__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="contact__form" noValidate>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className={`form__control ${errors.name ? 'has-error' : ''}`}
                aria-invalid={errors.name ? 'true' : 'false'}
                {...register('name', {
                  required: 'Please enter your name',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
              />
              {errors.name && (
                <span className="field__error" role="alert">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className={`form__control ${errors.email ? 'has-error' : ''}`}
                aria-invalid={errors.email ? 'true' : 'false'}
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
              {errors.email && (
                <span className="field__error" role="alert">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="subject">
              <input
                type="text"
                placeholder="Enter Subject"
                className={`form__control ${errors.subject ? 'has-error' : ''}`}
                aria-invalid={errors.subject ? 'true' : 'false'}
                {...register('subject', {
                  required: 'Please enter a subject',
                  minLength: {
                    value: 3,
                    message: 'Subject must be at least 3 characters',
                  },
                })}
              />
              {errors.subject && (
                <span className="field__error" role="alert">
                  {errors.subject.message}
                </span>
              )}
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Message Here..."
              className={`form__control textarea ${
                errors.message ? 'has-error' : ''
              }`}
              aria-invalid={errors.message ? 'true' : 'false'}
              {...register('message', {
                required: 'Please enter a message',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
              })}
            />
            {errors.message && (
              <span className="field__error" role="alert">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            className="send_button"
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            <span className="msg">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <span className="send_button__icon">
              <FiSend />
            </span>
          </button>

          {status.message && (
            <p className={`status-message ${status.type}`} role="status">
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
