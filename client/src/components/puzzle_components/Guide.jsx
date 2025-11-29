import gridIcon from "/images/grid.png";

const Guide = ({ handleExitClick }) => (
  <div className="menu">
    <div className="exit-button" onClick={handleExitClick}>
      ×
    </div>
    <h2>sort the pieces by number</h2>
    <img src={gridIcon} alt="grid" />
  </div>
);

export default Guide;
