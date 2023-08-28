import React, { useState, useEffect } from "react";
import "../Style/ContactFrom.css";
import Img from "../img/Logo2.png";
import "../App.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { PopupWidget } from "react-calendly";
import { InlineWidget } from "react-calendly";
import { GrClose } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { serviceAreas } from "../utils/FooterData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const calendlyLinkStyle = {
  color: "blue",
  fontSize: "14px", // Adjust font size
  padding: "5px 10px", // Adjust padding
};
const ConsultantRow = ({ name, position }) => {
  const handleGetAppointment = (url) => {
    window.Calendly.showPopupWidget(url);
  };

  return (
    <tr>
      <td className="space">{name}</td>
      <td className="space">{position}</td>
      <td className="space">
        <Link
          href="#"
          style={calendlyLinkStyle}
          onClick={() =>
            handleGetAppointment(
              "https://calendly.com/shoolin-consultancy/30min"
            )
          }
        >
          <p style={{ color: "blue" }}>Get Appointment</p>
        </Link>
      </td>
    </tr>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const consultants = [
    { name: "Akash Shetty", position: "Managing Director" },
    { name: "B M Gaonkar", position: "Managing Director" },
    { name: "Surya" },
    { name: "Sridevi" },
    { name: "Pavan" },
  ];

  const handleConfirmationOpen = () => {
    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can use an API or send the form data to a server
    // Reset form fields after submission if needed
    setName("");
    setEmail("");
    setMessage("");
    setIsOpen(false); // Close the modal after form submission
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleTopBtnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleGetAppointment = (url) => {
    window.Calendly.initPopupWidget({ url });
  };
  return (
    <div className="color">
      <nav>
        <div className={`nav-bar ${isSticky ? "sticky" : ""}`}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <Link to="/" className="navbar-brand">
                <div className="logo">
                  <h1>
                    <img src={Img} alt="Logo" />
                  </h1>
                </div>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <FaBars className="bars-color" />
              </button>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto">
                  <div className="logos">
                    <h1>
                      <Link to="/">
                        <img src={Img} alt="Logo" />
                      </Link>
                    </h1>
                  </div>
                </div>
                <div className="Nav_center">
                  <Link
                    to="/"
                    onClick={handleTopBtnClick}
                    className="nav-item nav-link active"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="nav-item nav-link"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    onClick={handleTopBtnClick}
                  >
                    About Us
                  </Link>

                  <NavDropdown title="Services" id="basic-nav-dropdown">
                    {serviceAreas.map((item, index) => (
                      <NavDropdown.Item key={index}>
                        <Link
                          to={item.to}
                          className="colo"
                          data-toggle="collapse"
                          data-target="#navbarCollapse"
                          onClick={handleTopBtnClick}
                        >
                          {item.label}
                        </Link>
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>

                  <Link
                    to="/blog"
                    onClick={handleTopBtnClick}
                    href=""
                    className="nav-item nav-link"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/testimonials"
                    onClick={handleTopBtnClick}
                    href=""
                    className="nav-item nav-link"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    Testimonials
                  </Link>
                  <Link
                    to="/contactUs"
                    onClick={handleTopBtnClick}
                    href=""
                    className="nav-item nav-link"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="ml-auto">
                  <Button
                    onClick={openModal}
                    style={{
                      color: "rgb(170, 145, 102)",
                      fontSize: "16px",
                      border: "3px solid white",
                      fontWeight: "bolder",
                      borderRadius: "5px",
                    }}
                  >
                    Get An Appointment
                  </Button>
                  <Modal
                    open={isOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        textAlign: "center", // Center content horizontally
                      }}
                    >
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Our Consultants
                      </Typography>
                      <table>
                        <thead>
                          <tr>
                            <th className="space">Name</th>
                            <th className="space">Position</th>
                            <th className="space">Our Appointments</th>
                          </tr>
                        </thead>
                        <tbody>
                          {consultants.map((consultant, index) => (
                            <ConsultantRow
                              key={index}
                              name={consultant.name}
                              position={consultant.position}
                            />
                          ))}
                        </tbody>
                      </table>
                      <Button onClick={handleClose}>Close</Button>
                    </Box>
                  </Modal>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
