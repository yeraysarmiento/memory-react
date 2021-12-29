import { useState } from "react";
import PropTypes from "prop-types";

function Cell({ isMatched, content }) {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      {isHidden ? (
        <li className="cell">
          <button onClick={toggleHidden} type="button">
            {content}
          </button>
        </li>
      ) : (
        <li className="cell cell--showing">
          <button onClick={toggleHidden} type="button">
            {content}
          </button>
        </li>
      )}
      {isMatched && <li className="cell cell-matched">{content}</li>}
    </>
  );
}

Cell.defaultProps = {
  isMatched: false,
};

Cell.propTypes = {
  isMatched: PropTypes.bool,
  content: PropTypes.string.isRequired,
};

export default Cell;
