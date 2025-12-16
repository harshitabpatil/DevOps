import React, { useState } from "react";
import "./GeneralDonataionForm.css";

import CONFIG from "../backend_config/backend_config";

const GeneralDonationForm = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    contact_number: "",
    amount: "",
    account_number: "",
    ifsc_code: "",
    branch_name: "",
    mode_of_payment: "",
    purpose_of_donation: ""
  });

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Full Name validation
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required!";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format!";
      isValid = false;
    }

    // Contact Number validation
    const contact_number = formData.contact_number.trim();
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!contact_number) {
      newErrors.contact_number = "Contact number is required!";
      isValid = false;
    } else if (!mobileRegex.test(contact_number)) {
      newErrors.contact_number = "number starting with 6, 7, 8, or 9.";
      isValid = false;
    }

    const amount = parseFloat(formData.amount);

    if (!formData.amount) {
      newErrors.amount = "Amount is required!";
      isValid = false;
    } else if (isNaN(amount)) {
      newErrors.amount = "Amount must be a number!";
      isValid = false;
    } else if (amount < 1000) {
      newErrors.amount = "Amount must be at least ₹1000!";
      isValid = false;
    } else if (amount > 10000000) {
      newErrors.amount = "Amount cannot exceed ₹1 Crore!";
      isValid = false;
    }

    // Account number validation
    if (!formData.account_number.trim()) {
      newErrors.account_number = "Account number is required!";
      isValid = false;
    } else if (!/^\d{9,18}$/.test(formData.account_number)) {
      newErrors.account_number = "Account number must be 9 to 18 digits!";
      isValid = false;
    }

    // IFSC Code validation (e.g., SBIN0001234)
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!formData.ifsc_code.trim()) {
      newErrors.ifsc_code = "IFSC code is required!";
      isValid = false;
    } else if (!ifscRegex.test(formData.ifsc_code.toUpperCase())) {
      newErrors.ifsc_code = "Invalid IFSC code format!";
      isValid = false;
    }

    // Branch name validation
    if (!formData.branch_name.trim()) {
      newErrors.branch_name = "Branch name is required!";
      isValid = false;
    }

    // Mode of payment validation
    if (!formData.mode_of_payment) {
      newErrors.mode_of_payment = "Mode of payment is required!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (name === 'contact_number') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numericValue.slice(0, 10) // Limit to 10 digits
      }));
    } else if (name === 'amount') {
      const numericValue = value.replace(/[^0-9.]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else if (name === 'ifsc_code') {
      setFormData(prev => ({
        ...prev,
        [name]: value.toUpperCase() // Convert IFSC to uppercase
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const response = await axios.post(
        `${CONFIG.BASE_URL}/donation-form`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          full_name: "",
          email: "",
          contact_number: "",
          amount: "",
          account_number: "",
          ifsc_code: "",
          branch_name: "",
          mode_of_payment: "",
          purpose_of_donation: ""
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      let errorMessage = 'An error occurred. Please try again.';

      if (error.response) {
        // Server responded with a status code outside 2xx
        if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = `Server error: ${error.response.status}`;
        }
      } else if (error.request) {
        // Request was made but no response received
        errorMessage = 'No response from server. Please check your connection.';
      }

      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Only allow closing if not submitting
    if (!isSubmitting) {
      onClose();
    }
  };

  const handleResetForm = () => {
    setSubmitSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        overflowY: "auto",
        padding: "20px",
        height: "100vh",
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {submitSuccess ? "Thank You for Your Donation" : "Make a Donation"}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              disabled={isSubmitting}
            ></button>
          </div>
          <div className="modal-body">
            {submitSuccess ? (
              <div className="text-center pt-3 py-2">
                <div className="alert alert-success">
                  <h4>Thank You for Your Generous Donation!</h4>
                  <p>We truly appreciate your support.</p>
                  <div className="mt-4">
                    <button
                      className="btn-black-cover me-2"
                      onClick={handleResetForm}
                    >
                      Make Another Donation
                    </button>
                    <button
                      className="btn-black"
                      onClick={onClose}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Full Name */}
                  <div className="col-md-6">
                    <label className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.full_name ? 'is-invalid' : ''}`}
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                    {errors.full_name && (
                      <div className="invalid-feedback">{errors.full_name}</div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label className="form-label">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="col-md-6">
                    <label className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${errors.contact_number ? 'is-invalid' : ''}`}
                      name="contact_number"
                      value={formData.contact_number}
                      onChange={handleChange}
                      maxLength="10"
                    />
                    {errors.contact_number && (
                      <div className="invalid-feedback">{errors.contact_number}</div>
                    )}
                  </div>

                  {/* Amount */}
                  <div className="col-md-6">
                    <label className="form-label">
                      Amount (INR) <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                    {errors.amount && (
                      <div className="invalid-feedback">{errors.amount}</div>
                    )}
                  </div>

                  {/* Account Number */}
                  <div className="col-md-6">
                    <label className="form-label">
                      Account Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.account_number ? 'is-invalid' : ''}`}
                      name="account_number"
                      value={formData.account_number}
                      onChange={handleChange}
                    />
                    {errors.account_number && (
                      <div className="invalid-feedback">{errors.account_number}</div>
                    )}
                  </div>

                  {/* IFSC Code */}
                  <div className="col-md-6">
                    <label className="form-label">
                      IFSC Code <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.ifsc_code ? 'is-invalid' : ''}`}
                      name="ifsc_code"
                      value={formData.ifsc_code}
                      onChange={handleChange}
                      placeholder="SBIN0001234"
                    />
                    {errors.ifsc_code && (
                      <div className="invalid-feedback">{errors.ifsc_code}</div>
                    )}
                  </div>

                  {/* Branch Name */}
                  <div className="col-md-6">
                    <label className="form-label">
                      Branch Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.branch_name ? 'is-invalid' : ''}`}
                      name="branch_name"
                      value={formData.branch_name}
                      onChange={handleChange}
                    />
                    {errors.branch_name && (
                      <div className="invalid-feedback">{errors.branch_name}</div>
                    )}
                  </div>

                  {/* Mode of Payment */}
                  <div className="col-md-6">
                    <label className="form-label">
                      Mode of Payment <span className="text-danger">*</span>
                    </label>
                    <select
                      className={`form-select ${errors.mode_of_payment ? 'is-invalid' : ''}`}
                      name="mode_of_payment"
                      value={formData.mode_of_payment}
                      onChange={handleChange}
                    >
                      <option value="">Select mode</option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="UPI">UPI</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                    {errors.mode_of_payment && (
                      <div className="invalid-feedback">{errors.mode_of_payment}</div>
                    )}
                  </div>

                  {/* Purpose of Donation */}
                  <div className="col-12">
                    <label className="form-label">Purpose of Donation</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      name="purpose_of_donation"
                      value={formData.purpose_of_donation}
                      onChange={handleChange}
                      placeholder="Optional: Specify the purpose of your donation"
                    ></textarea>
                  </div>
                </div>

                <div className="text-end mt-4">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={handleClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit Donation"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDonationForm;