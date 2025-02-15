import { useState } from "react";

import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    } else {
      setErrors({});
      //setIsSending(true);
    }

    setIsSending(true);
    emailjs
      .sendForm(
        "service_1y1t4q9",
        "template_1j5zj3g",
        e.target,
        "user_9bC6s8Bj2wHrQ3mJZ5Q9n"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setErrors({});
        },
        (error) => {
          toast.error("An error occurred, Please try again");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="bg-stone-50 p-4">
        <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="mx-auto mb-20 lg:max-w-3xl p-4 bg-white shadow-md rounded">
  <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
  <div className="mb-4 flex flex-col space-y-4">
    <div className="w-full">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Name"
      />
      {errors.name && (
        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
      )}
    </div>
    <div className="w-full">
      <input
        type="email"
        name="email"
        value={formData.email} // Fixed: should be formData.email
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Email"
      />
      {errors.email && (
        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
      )}
    </div>
    <div className="w-full">
      <textarea
        rows="5"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your Message"
      />
      {errors.message && (
        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
      )}
    </div>
  </div>
  <button
    type="submit"
    className={`w-full mb-8 rounded border bg-emerald-950 px-4 py-2 text-white hover:bg-emerald-900
        ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
    disabled={isSending}>
        <div className="flex justify-center items-center gap-2">
            {isSending ? "Sending..." : "Send Message"}
            <FiSend />
        </div>
  
  </button>
</form>
    </section>
  );
};

export default Contact;
