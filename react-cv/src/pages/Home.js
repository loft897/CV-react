import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
      <div className="content">
        <h1>SLZ Scratch</h1>
        <h2>Dévéloppeur Full-Stack</h2>
        <div className="pdf">
          <a href="./media/CV.pdf" target="_blank" rel="noopener noreferrer">
            Télécharger le CV en PDF
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
