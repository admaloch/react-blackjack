import "./MainLoadAnimation.css";

export default function MainLoadAnimation({
  dot1Color = "#d1495b",
  dot2Color = "#00798c",
  dot3Color = "#edae49",
  backColor = "rgba(255, 255, 255, .1)",
}): JSX.Element {
  return (
    <div style={{ background: backColor }} className="loader ">
      <div className="dots">
        <span style={{ background: dot1Color }}></span>
        <span style={{ background: dot2Color }}></span>
        <span style={{ background: dot3Color }}></span>
      </div>
  
        <p className="loading">
          <span style={{ color: dot1Color }}>L</span>
          <span style={{ color: dot2Color }}>o</span>
          <span style={{ color: dot3Color }}>a</span>
          <span style={{ color: dot1Color }}>d</span>
          <span style={{ color: dot2Color }}>i</span>
          <span style={{ color: dot3Color }}>n</span>
          <span style={{ color: dot1Color }}>g</span>
        </p>
     
      
    </div>
  );
}
