import { handleClick } from "../page";

const HeroTitle = () => {
  return (
    <div className="hero-title-container">
      <h2 className="hero-title-tag">
        JUSTCOLD REFRIGERATION, MAINTENANCE & MORE
      </h2>

      <h1 className="hero-title-heading" aria-label="JustCold Hero Tile">
        Keep Things <span className="hero-title-highlight">Fresh</span>
      </h1>

      <p className="hero-title-description">
        &quot;At JustCold Refrigeration LTD, we prioritize our clients by delivering the highest industry standards—through expertise, courtesy, and professionalism.
        You’ll be impressed by the results and confident you made the right choice.
        Here’s a glimpse of what we offer:&quot;
      </p>

      <div>
        <button className="estimate-btn pointer-events-auto"
        onClick={handleClick}>
          Get a Free Estimation
        </button>
      </div>
    </div>
  );
};

export default HeroTitle;
