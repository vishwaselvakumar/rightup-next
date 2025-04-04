import React, { useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    eventName: "",
    location: "",
    date: "",
   
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "+919159260221"; // Replace with your desired number
    const message = `Name: ${formData.name}%0AUsername: ${formData.eventName}%0ALocation: ${formData.location}%0ADate: ${formData.date}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen  p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Register for the Event
        </h1>
        <form className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            className="input-style"
          />
         
          <input
            type="text"
            name="eventName"
            placeholder="Event Type"
            value={formData.eventName}
            onChange={handleChange}
            className="input-style"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="input-style"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input-style"
          />
         
          <button
            type="button"
            onClick={sendToWhatsApp}
            className="w-full text-white bg-green-500 hover:bg-green-600 transition-transform transform hover:scale-105 rounded-lg py-3 text-center font-semibold shadow-md"
          >
            Send to WhatsApp
          </button>
        </form>
      </div>
      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 12px;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          background: #f8f8f8;
          transition: all 0.3s;
        }
        .input-style:focus {
          border-color: #6366f1;
          background: #fff;
          outline: none;
          box-shadow: 0px 0px 10px rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Forms;
