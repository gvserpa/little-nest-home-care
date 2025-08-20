import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200,
  once: true
});

import bgSection from "../assets/bg-section.png";

function FormSection() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert("Form sent!");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="form-section" id="form-section">
      <div className="form-section-right" data-aos="zoom-in">
        <p>Get in touch</p>
        <h2>
          Let's discuss how
          <br /> we can help.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          voluptas, laboriosam explicabo, ut odit optio adipisci deserunt
          consequuntur culpa eos, excepturi velit doloribus. Reiciendis, qui.
        </p>
      </div>
      <div className="form-section-left" data-aos="zoom-in">
        <form onSubmit={handleSubmit}>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          Phone number:
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          Message:
          <textarea
            placeholder="Write your message here..."
            rows="4"
            cols="50"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
