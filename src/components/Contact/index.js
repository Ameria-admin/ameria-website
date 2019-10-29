import React from "react";
import styles from "./styles.css";

const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault();

    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" placeholder="Your name..." required />
        </div>
        <div>
          <label>Email</label>
          <input type="text" placeholder="Your email..." required />
        </div>
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default Contact;
