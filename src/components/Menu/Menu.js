import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./Menu.scss";

function Menu({ onReset, onRestart }) {
  return (
    <ul className="menu">
      <li className="menu__element menu__element--new-game">
        {" "}
        <button onClick={onRestart}>New Game</button>
      </li>
      <li className="menu__element menu__element--restart">
        <button onClick={onReset}>
          <FontAwesomeIcon icon="redo" />
        </button>
      </li>
    </ul>
  );
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Menu;
