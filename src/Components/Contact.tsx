import "./Contact.css";

function Contact() {
  return (
    <div className="world">
      <h1>Get in touch with me</h1>

      <p>
        I love connecting with people! You can reach me through any of the platforms below:
      </p>

      <div className="contacts">
        <a href="mailto:govinth.v20@gmail.com" className="contact-link">📧 Email Me</a>
        <a href="https://www.instagram.com/cubic_crusader_" target="_blank" className="contact-link">📸 Instagram</a>
        <a href="https://www.linkedin.com/in/Govinthv" target="_blank" className="contact-link">💼 LinkedIn</a>
      </div>

      <p className="note">
        I usually reply within 24 hours. Can't wait to hear from you! 🚀
      </p>
    </div>
  );
}

export default Contact;
