import React, { useRef, useEffect, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import "../style.css";

const SignupButton = () => {
  const [showHoverCard, setShowHoverCard] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    resume: null,
  });
  const [errors, setErrors] = useState({});
  const cardRef = useRef(null);
  const firstname = useRef(null);

  const handleButtonClick = () => {
    setShowHoverCard(!showHoverCard);
    setSubmitted(false);
    setErrors({});
  };

  const handleCloseButtonClick = () => {
    setShowHoverCard(false);
    resetForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phoneNumber, resume } = formData;
    const newErrors = {};
    if (!firstName) newErrors.firstName = "*required";
    if (!lastName) newErrors.lastName = "*required";
    if (!email) newErrors.email = "*required";
    if (!phoneNumber) newErrors.phoneNumber = "*required";
    if (!resume) newErrors.resume = "*required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      resetForm();
      setTimeout(() => {
        setShowHoverCard(false);
      }, 10000);
    }
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      resume: null,
    });
    setErrors({});
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowHoverCard(false);
        resetForm();
      }
    };

    if (showHoverCard) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
      if (cardRef.current) {
        cardRef.current.scrollIntoView({ behavior: "smooth" });
        cardRef.current.focus();
        firstname.current.focus();
      }
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [showHoverCard]);

  const align = {
    textAlign: "center",
  };

  return (
    <>
      <Button className="Signup" onClick={handleButtonClick}>
        <strong>Sign Up</strong>
      </Button>
      {showHoverCard && (
        <>
          <div className="overlay"></div>
          <Card className="SignupCard" ref={cardRef} tabIndex="-1">
            <Card.Body>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Card.Title style={align}>
                  <strong>Sign Up</strong>
                </Card.Title>

                <AiOutlineClose
                  onClick={handleCloseButtonClick}
                  style={{ cursor: "pointer", fontSize: "1.5em" }}
                />
              </div>
              {submitted ? (
                <Alert variant="success" style={{ marginTop: "10px" }}>
                  Successfully Submitted!
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label className="left-align">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      ref={firstname}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formLastName">
                    <Form.Label className="left-align">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label className="left-align">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label className="left-align">Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      isInvalid={!!errors.phoneNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phoneNumber}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formResume">
                    <Form.Label className="left-align">
                      Upload Resume
                    </Form.Label>
                    <Form.Control
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      isInvalid={!!errors.resume}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.resume}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
};

export default SignupButton;
