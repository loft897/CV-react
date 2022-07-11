import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/billGates.jpg" alt="profil" />
          <h3>SLZ Scratch</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "#4FEDD2" : "" };
              }}
            >
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="/competences"
              style={({ isActive }) => {
                return { color: isActive ? "#4FEDD2" : "" };
              }}
            >
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="/portfolio"
              style={({ isActive }) => {
                return { color: isActive ? "#4FEDD2" : "" };
              }}
            >
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="/contact"
              style={({ isActive }) => {
                return { color: isActive ? "#4FEDD2" : "" };
              }}
            >
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.google.fr"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.fr"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.fr"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.fr"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      <div className="signature">
        <p> Scratch - 2022</p>
      </div>
      </div>

    </div>
  );
};

export default Navigation;
