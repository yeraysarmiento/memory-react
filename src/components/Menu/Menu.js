import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./Menu.scss";

function Menu({ onClick }) {
  return (
    <ul className="menu">
      {/* <li className="menu__element menu__element--new-game">New Game</li> */}
      <li className="menu__element menu__element--restart">
        <button onClick={onClick}>
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
