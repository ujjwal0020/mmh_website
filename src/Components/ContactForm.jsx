import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const naviget = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !mobileNumber || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!isEmailValid(email)) {
      toast.error("Email id is not valid.");
      return;
    }

    if (mobileNumber.length < 10) {
      toast.error("Phone number is not valid.");
      return;
    }

    setLoading(true);
    const templateParams = {
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      message: message,
    };
    console.log(templateParams);

    emailjs
      .send(
        "service_ykqiirq",
        "template_qfb6bjp",
        templateParams,
        "whhcLtvoNXqvE1aQx"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setName("");
          setMobileNumber("");
          setMessage("");
          naviget("/thanks");
          setLoading(false);
        },
        (err) => {
          setLoading(false);
          console.log("FAILED...", err);
        }
      );
  };
  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className=" md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6 "
      >
        <div>
          <input
            type="text"
            className=" from-control"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            className=" from-control"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="md:col-span-2 col-span-1">
          <input
            type="tel"
            className=" from-control"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="md:col-span-2 col-span-1">
          <textarea
            className=" from-control"
            placeholder="Your Message*"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button class="btn btn-primary mt-[10px]" type="submit" name="submit">
          {loading ? "sending.." : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
