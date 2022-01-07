import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./Menu.scss";

function Menu({ onReset, onRestart, isPlaying }) {
  return (
    <header>
      <h1 className={isPlaying ? "title" : "title title--form"}>memory</h1>
      {isPlaying && (
        <ul className="menu">
          <li className="menu__element menu__element--new-game">
            <button onClick={onRestart}>New Game</button>
          </li>
          <li className="menu__element menu__element--restart">
            <button onClick={onReset}>
              <FontAwesomeIcon icon="redo" />
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}

Menu.propTypes = {
  onReset: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default Menu;
