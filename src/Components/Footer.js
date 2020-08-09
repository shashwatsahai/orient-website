import React from "react";
import "./Footer.css";
import "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => (
  <div className="main-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-md-offset-3">
          <h4>SHOWCASE</h4>
          <ul className="list-unstyled">
            <li>Aldrops</li>
            <li>Latches</li>
            <li>Cabinet Handles</li>
            <li>Door Handles</li>
            <li>Concealed Handles</li>
            <li>Door Stopper</li>
            <li>Door Kit</li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-md-offset-3">
          <h4>FINISHES AVAILABLE</h4>
          <ul className="list-unstyled">
            <li>SS</li>
            <li>ANTIQUE</li>
            <li>GOLD SILVER</li>
            <li>ON DEMAND</li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-md-offset-3">
          <h4>SOCIAL</h4>
          <ul className="list-group list-unstyled list-group-horizontal">
            <a href="#">
              <li className="list-group-item">
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  style={{ fontSize: "50px" }}
                ></FontAwesomeIcon>
              </li>
            </a>
            <a href="#">
              <li className="list-group-item" href="#">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  style={{ fontSize: "50px" }}
                ></FontAwesomeIcon>
              </li>
            </a>
            <a href="#" style={{ color: "#3f729b" }}>
              <li className="list-group-item">
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  style={{ fontSize: "50px" }}
                ></FontAwesomeIcon>
              </li>
            </a>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 col-md-offset-3">
          <h4>WORKING HOURS</h4>
          <ul className="list-unstyled">
            <li>Monday-Friday: 10AM-4PM</li>
            <li>Sunday Closed</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-xs-center">&copy;2020 Orient Creation</p>
      </div>
    </div>
  </div>
);

export default Footer;
