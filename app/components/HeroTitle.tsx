import { handleClick } from "../page";

const HeroTitle = () => {
  return (
    <div className="hero-title-container">
      <p className="hero-title-tag">
        JUSTCOLD REFRIGERATION, MAINTENANCE & MORE
      </p>

      <h1 className="hero-title-heading">
        Keep Things <span className="hero-title-highlight">Fresh</span>
      </h1>

      <p className="hero-title-description" style={{ whiteSpace: "pre-line" }}>
        At JustCold Refrigeration LTD, we put our clients first by upholding 
        the highest industry standards through expertise, courtesy, and professionalism. 
        You&apos;ll be amazed by the results and glad you chose us— 
        here are just some of our services:
      </p>

      <div>
        <button className="estimate-btn"
        onClick={handleClick}>
          Get a Free Estimation
        </button>
      </div>
    </div>
  );
};

export default HeroTitle;
