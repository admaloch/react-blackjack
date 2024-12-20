import "./MainLoadAnimation.css";

export default function MainLoadAnimation({
  dot1Color = "#d1495b",
  dot2Color = "#00798c",
  dot3Color = "#edae49",
  textColor = "#003049",
  backColor = "rgba(255, 255, 255, .5)",
}): JSX.Element {
  return (
    <div style={{ background: backColor }} className="loader ">
      <div className="dots">
        <span style={{ background: dot1Color }}></span>
        <span style={{ background: dot2Color }}></span>
        <span style={{ background: dot3Color }}></span>
      </div>
  
        <p style={{ color: textColor }}className="loading">Loading</p>
     
      
    </div>
  );
}
