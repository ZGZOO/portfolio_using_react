import React, { useState } from "./node_modules/react";
import "./Contact.scss";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <div className="contact_me" id="contact">
      <p>Contact Me</p>
      <form
        className="contact_form"
        action="https://formspree.io/xgenrbbn"
        method="POST"
        onSubmit={handleContactSubmit}
      >
        <input
          type="text"
          className="contact_form_text name_input"
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
        <input
          type="submit"
          className="contact_form_button"
          value="Send"
        />
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
