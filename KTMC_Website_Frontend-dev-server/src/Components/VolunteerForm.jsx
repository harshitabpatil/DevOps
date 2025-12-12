import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import logo from "../assets/ktmclogo.png";

const peelIn = keyframes`
  from {
    right: -100%;
    transform: skewY(-5deg);
    opacity: 0;
  }
  to {
    right: 0;
    transform: skewY(0);
    opacity: 1;
  }
`;

const peelOut = keyframes`
  from {
    right: 0;
    transform: skewY(0);
    opacity: 1;
  }
  to {
    right: -100%;
    transform: skewY(-5deg);
    opacity: 0;
  }
`;

// === Styled Components ===
const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;

  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.show ? 1 : 0)};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.2s ease;
  z-index: 9998;
  overflow: scroll;
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;

  right: 0;
  left: 0;
  height: 100%;
  width: 80%;
  margin: auto;
  justify-content: center;
  align-items: center;

  background: #fff;
  padding: 30px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  overflow: auto;

  animation: ${(props) =>
    props.animateOut
      ? css`
          ${peelOut} 0.3s forwards
        `
      : css`
          ${peelIn} 0.5s forwards
        `};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  select {
    margin: 5px 0;
    padding: 10px;
    font-size: 14px;
    border-radius: 0;
    background: #f2f2f2;
    color: #333333;
    border: 1px solid #eee;
  }

  button.submit {
    margin-top: 10px;
    background-color: rgb(0, 0, 0);
    color: white;
    padding: 10px 30px;
    border: none;
    cursor: pointer;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ANIMATION_DURATION = 500;

const VolunteerForm = ({ show, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setAnimateOut(false);
    } else if (isVisible) {
      setAnimateOut(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setAnimateOut(false);
      }, ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!isVisible) return null;

  return (
    <div className="popwrap">
      <Overlay show={!animateOut} onClick={onClose} />
      <Popup animateOut={animateOut}>
        <div className="col-md-12 pop-formgroup">
          <h5 className="formtitle">Please fill out the form below</h5>
          <p className="text-center">
            If you would like to volunteer for our NGO to aid the
            underprivileged
          </p>
        </div>

        <Form onSubmit={(e) => e.preventDefault()}>
          <div className="col-md-12 popoforminner">
            <div className="d-flex">
              <div className="col-md-6 formwrap p-2">
                <div className=" pop-formgroup">
                  <input type="text" placeholder="First name" required />
                </div>
                <div className="pop-formgroup">
                  <input type="text" placeholder="Last name" required />
                </div>
                <div className="pop-formgroup">
                  <input type="email" placeholder="Enter email" required />
                </div>

                <div className="pop-formgroup">
                  <input type="tel" placeholder="Enter Contact" required />
                </div>

                <div className="pop-formgroup">
                  {" "}
                  <select required>
                    <option value="">Select State</option>
                    <option>Tamilnadu</option>
                    <option>Kerala</option>
                  </select>
                </div>
                <div className="pop-formgroup">
                  {" "}
                  <select required>
                    <option value="">Select Distric</option>
                    <option>Coimbatore</option>
                    <option>Tirupur</option>
                  </select>
                </div>
                <div className="pop-formgroup">
                  {" "}
                  <select required>
                    <option value="">Area of Interest</option>
                    <option>Eduaction</option>
                    <option>Child protection</option>
                  </select>
                </div>
                <div className="pop-formgroup">
                  {" "}
                  <select required>
                    <option value="">Skill Set</option>
                    <option>Doctor</option>
                    <option>Teacher</option>
                  </select>
                </div>
                <div className="pop-formgroup">
                  {" "}
                  <select required>
                    <option value="">Availablity</option>
                    <option>Part Time</option>
                    <option>Full Time</option>
                    <option>Weekend</option>
                  </select>
                </div>
                <div className="col-md-12 pop-buttonwrap">
                  <button className="submit cta" type="submit">
                    Submit
                  </button>
                </div>
              </div>
              <div className="col-md-6 volunteerimag p-2">
                <img src="/assets/testimonial/testimoanial2.png" alt="" />
              </div>
            </div>
          </div>
        </Form>
        <CloseBtn className="popclosecta" onClick={onClose}>
          ×
        </CloseBtn>
      </Popup>
    </div>
  );
};

export default VolunteerForm;
