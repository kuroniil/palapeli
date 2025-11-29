const ModesTab = ({ handleExitClick, handleModeClick }) => {
  return (
    <div className="menu">
      <div className="exit-button" onClick={handleExitClick}>
        ×
      </div>
      <h1 className="mode-h1">change mode</h1>
      <button id="9" onClick={handleModeClick}>
        3x3
      </button>
      <button id="16" onClick={handleModeClick}>
        4x4
      </button>
      <button id="25" onClick={handleModeClick}>
        5x5
      </button>
    </div>
  );
};

export default ModesTab;
