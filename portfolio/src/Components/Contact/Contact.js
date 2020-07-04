import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact_me" id="contact">
      <p>Contact Me</p>
      <form className="contact_form" action="index.html" method="post">
        {/* Have 'required' to make it required */}
        <input
          id="input1"
          type="text"
          className="contact_form_text"
          placeholder="Name (First & Last)"
          required
        />
        <input
          type="email"
          className="contact_form_text"
          placeholder="Email"
          required
        />
        <input
          type="tel"
          className="contact_form_text"
          placeholder="Phone (optional)"
        />
        <textarea
          className="contact_form_text"
          placeholder="Message"
          required
        ></textarea>
        <input type="submit" className="contact_form_button" value="Send" />
      </form>

      <nav class="contactinfo">
        <a href="mailto:jennyxu000@gmail.com" target="_blank" id="email">
          <img
            src="images/email.svg"
            alt="Jenny Xu's Gmail"
            title="Jenny Xu's Gmail"
          />
        </a>

        <a href="https://github.com/ZGZOO" target="_blank" id="github">
          <img
            src="images/github.svg"
            alt="Jenny Xu's GitHub page"
            title="Jenny Xu's GitHub page"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/jennyzhijiexu/"
          target="_blank"
          id="linkedin"
        >
          <img
            src="images/linkedin.svg"
            alt="Jenny Xu's LinkedIn page"
            title="Jenny Xu's LinkedIn page"
          />
        </a>
      </nav>
    </div>
  );
}
