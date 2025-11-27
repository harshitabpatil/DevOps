import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";

const FooterVideoslide = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    amount: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateAmount = (amount) => {
    const numericAmount = parseFloat(amount);
    return !isNaN(numericAmount) && numericAmount > 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // For amount field, only allow numbers and decimal point
    if (name === 'amount') {
      const numericValue = value.replace(/[^0-9.]/g, '');
      // Prevent multiple decimal points
      const decimalCount = (numericValue.match(/\./g) || []).length;
      if (decimalCount > 1) return;
      
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }

    // Clear success message when user starts editing
    if (submitSuccess) {
      setSubmitSuccess(false);
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      amount: ""
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Amount validation
    if (!formData.amount.trim()) {
      newErrors.amount = "Amount is required";
    } else if (!validateAmount(formData.amount)) {
      newErrors.amount = "Please enter a valid amount greater than 0";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        amount: ""
      });
      
      setSubmitSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="footervideo_wrap">
      {/* Left: Form */}
      <div className="form-section">
        <h3 className="pb-3 fw-600">Donate Now</h3>
        <form>

        
        {submitSuccess && (
          <div style={{
            backgroundColor: '#d4edda',
            color: '#155724',
            padding: '12px',
            borderRadius: '4px',
            marginBottom: '20px',
            border: '1px solid #c3e6cb'
          }}>
            Thank you for your donation! Your contribution has been received.
          </div>
        )}
        
        <div onSubmit={handleSubmit}>        
          <div className="input-icon">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {errors.name && (
              <div style={{
                color: '#dc3545',
                fontSize: '0.875rem',
                marginTop: '0.25rem',
                marginLeft: '30px'
              }}>
                {errors.name}
              </div>
            )}
          </div>

          <div className="input-icon">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && (
              <div style={{
                color: '#dc3545',
                fontSize: '0.875rem',
                marginTop: '0.25rem',
                marginLeft: '30px'
              }}>
                {errors.email}
              </div>
            )}
          </div>

          <div className="input-icon">
            <FontAwesomeIcon icon={faMoneyBillTransfer} />
            <input
              type="text"
              name="amount"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleInputChange}
              required
            />
            {errors.amount && (
              <div style={{
                color: '#dc3545',
                fontSize: '0.875rem',
                marginTop: '0.25rem',
                marginLeft: '30px'
              }}>
                {errors.amount}
              </div>
            )}
          </div>
          
          <div className="cause_cta_banner ml-auto">
            <button 
              type="submit" 
              onClick={handleSubmit}
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.6 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? 'Processing...' : 'Donate Now'}
            </button>
          </div>
        </div>
        </form>
      </div>

      {/* Right: Video with overlay */}
      <div className="video-section">
        <div className="video-wrapper">
          {!isPlaying && (
            <div className="video-overlay" onClick={handlePlay}>
              <div className="play-button">&#9658;</div>
            </div>
          )}
          {isPlaying ? (
            <iframe
              src="https://www.youtube.com/embed/bimysAl81Vw?autoplay=1"
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src="/assets/causes/cause-item3.jpg"
              alt="Video thumbnail"
              className="video-thumbnail"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterVideoslide;