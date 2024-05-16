import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let&apos;s talk about everything!</h1>
        <p>
          Don&apos;t like forms? Send me an{" "}
          <a href="yourname20161202@outlook.com">email</a>. 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img src={`/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div>
        </p>
        <div>
          <p className="contact-links">
            <MdEmail />
            yourname20161202@outlook.com 
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +64 0226811799 
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
             🇳🇿 New Zealand 
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
