import React, { useState } from "react";

//const API_URL = process.env.REACT_APP_API_URL || "https://lilumedia.com:5000";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "Submitting...", type: "loading" });

    try {
      const response = await fetch(`${API_URL}/api/submit-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({
          message: "✅ Form submitted successfully!",
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          message: "❌ Submission failed. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      setStatus({
        message: "❌ Network error. Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <form className="flex flex-col space-y-4" id="form" onSubmit={handleSubmit}>
      <input
        class="input input-bordered w-full"
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={formData.name}
        required
      />
      <input
        class="input input-bordered w-full"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
        required
      />
      <textarea
        class="textarea textarea-bordered w-full"
        name="message"
        placeholder="Your message"
        onChange={handleChange}
        value={formData.message}
        required
      ></textarea>
      <button class="btn btn-primary w-full" type="submit">Submit</button>
      {status.message && (
        <p className={`status ${status.type}`}>{status.message}</p>
      )}
    </form>
  );
}
