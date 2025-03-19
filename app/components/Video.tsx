const Video = () => {
    return (
      <div style={{ 
        position: "relative", 
        width: "100vw", 
        height: "100vh", 
        overflow: "hidden" 
      }}>
        <iframe 
          src="https://drive.google.com/file/d/17lUTtdIINr8VgYtJxwwMhAeTthUB7R51/preview" 
          style={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            width: "110%", 
            height: "120%", 
            transform: "translate(-50%, -50%)"
          }}
          title="Embedded Video"
          allow="autoplay"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    );
  }
  
  export default Video;
  