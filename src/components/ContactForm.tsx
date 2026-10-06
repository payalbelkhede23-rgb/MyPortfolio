import { useState } from "react";
import styles from "../styles/ContactForm.module.css";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.heading}>
        <p>GET IN TOUCH</p>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <div className={styles.line}></div>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h3>Have a project or opportunity?</h3>

          <p>
            I am always interested in learning, collaborating, and exploring
            new opportunities in the IT field.
          </p>

          <div className={styles.infoItem}>
            <span>Email</span>
            <p>payalbelkhede23@gmail.com</p>
          </div>

          <div className={styles.infoItem}>
            <span>Location</span>
            <p>Maharashtra, India</p>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter subject"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>

          {submitted && (
            <p className={styles.successMessage}>
              Thank you! Your message has been submitted.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;