import "./Overlay.scss";

const Overlay = ({ show }) => {
  return <div className={`overlay ${show ? "show" : ""}`}></div>;
};

export default Overlay;
