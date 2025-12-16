import React, { useEffect, useRef, useState } from "react";

const backgrounds = [
  "url('/assets/imageslp/scrollinbg1.jpg')",
  "url('/assets/imageslp/scrollinbg2.jpg')",
  "url('/assets/imageslp/scrollinbg3.jpg')",
];

const ScrollBackgroundSection = () => {
  const sectionRef = useRef(null);
  const [bgImage, setBgImage] = useState(backgrounds[0]);
  const [formData, setFormData] = useState({
    topic: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const sectionOffset = section.offsetTop;
      const index = Math.floor(
        ((scrollTop - sectionOffset) / height) * backgrounds.length
      );

      if (index >= 0 && index < backgrounds.length) {
        setBgImage(backgrounds[index]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Restrict phone input to numbers only
    if (name === "phone") {
      newValue = value.replace(/[^0-9]/g, ""); // Allow only digits
      // Limit to 10 digits
      if (newValue.length > 10) {
        newValue = newValue.slice(0, 10);
      }
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.topic) newErrors.topic = "Please select a reason for enquiry";
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setFormData({
        topic: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
      alert("Form submitted successfully!");
    } else {
      setErrors(newErrors);
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="scrollingform"
      ref={sectionRef}
      style={{
        backgroundImage: bgImage,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        transition: "background-image 0.5s ease-in-out",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
      }}
    >
      <div className="form_overlay">
        <div className="py-5 m-auto">
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              width: "100%",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            <h2
              className="text-white"
              style={{ marginBottom: "1.5rem", textAlign: "center" }}
            >
              Have Questions?
            </h2>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="topic"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                Reason for enquiry
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="">Select a Reason* </option>
                <option value="Donate">Want to Donate</option>
                <option value="Associate">Want to Associate</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Treatment">Need Treatment</option>
                <option value="Support">Education Support</option>
              </select>
              {errors.topic && (
                <span style={{ color: "red", fontSize: "0.875rem" }}>
                  {errors.topic}
                </span>
              )}
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
              >
                <div style={{ flex: "1" }}>
                  <label
                    htmlFor="firstName"
                    style={{ display: "block", marginBottom: "0.5rem" }}
                  >
                    First Name :
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                  {errors.firstName && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div style={{ flex: "1" }}>
                  <label
                    htmlFor="lastName"
                    style={{ display: "block", marginBottom: "0.5rem" }}
                  >
                    Last Name :
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                  {errors.lastName && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div
                style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
              >
                <div style={{ flex: "1" }}>
                  <label
                    htmlFor="email"
                    style={{ display: "block", marginBottom: "0.5rem" }}
                  >
                    Enter Your Email :
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                  {errors.email && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.email}
                    </span>
                  )}
                </div>
                <div style={{ flex: "1" }}>
                  <label
                    htmlFor="phone"
                    style={{ display: "block", marginBottom: "0.5rem" }}
                  >
                    Enter Your Contact :
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Contact"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                    }}
                  />
                  {errors.phone && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="message"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              ></textarea>
              {errors.message && (
                <span style={{ color: "red", fontSize: "0.875rem" }}>
                  {errors.message}
                </span>
              )}
            </div>

            <div className="py-3 text-center m-auto">
              <button
                className="scrollingbtn y-bg"
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: "0.75rem 2.5rem",
                  color: "#000",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "1rem",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.6 : 1,
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="whitebg-petternwrap d-flex">
          <div className="yellowtopleft"></div>
          <div className="yellowtopright"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollBackgroundSection;