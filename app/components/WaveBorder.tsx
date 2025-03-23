
const WaveBorder = () => {
    return (
      <div style={{ 
        position: "absolute", 
        bottom: "0", 
        left: "0", 
        width: "100%", 
        height: "100px", 
        overflow: "hidden" 
      }}>
        <svg 
          viewBox="0 0 500 150" 
          preserveAspectRatio="none" 
          style={{ 
            width: "100%", 
            height: "100%", 
            transform: "scaleX(-1)" 
          }}
        >
          <path 
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
            style={{ stroke: "none", fill: "#0073e6" }}
          ></path>
        </svg>
      </div>
    );
  };
  
  export default WaveBorder;