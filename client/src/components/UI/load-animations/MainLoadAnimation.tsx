import "./MainLoadAnimation.css";

export default function MainLoadAnimation({
  dot1Color = "#000",
  dot2Color = "#000",
  dot3Color = "#000",
  backColor = "rgba(0, 0, 0, 0.7)",
}): JSX.Element {
  return (
    <div style={{ background: backColor }} className="loader ">
      <div className="loader-background">
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
     
    </div>
  );
}
