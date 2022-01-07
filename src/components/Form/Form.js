import PropTypes from "prop-types";
import "./Form.scss";

function Form({ onSubmit, onChange }) {
  return (
    <div className="game-form">
      <form
        className="game-form__container"
        onSubmit={onSubmit}
        onChange={onChange}
      >
        <p>Select Theme</p>
        <div className="game-form__box">
          <input type="radio" name="board-type" value="icons" id="icons" />
          <label htmlFor="icons">Icons</label>
          <input type="radio" name="board-type" value="numbers" id="numbers" />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <p>Number of Players</p>
        <div className="game-form__box">
          <input type="radio" name="board-players" value="1" id="1-player" />
          <label htmlFor="1-player">1 Player</label>
          <input type="radio" name="board-players" value="2" id="2-players" />
          <label htmlFor="2-players">2 Players</label>
        </div>
        <p>Grid Size</p>
        <div className="game-form__box">
          <input type="radio" name="board-size" value="16" id="4x4" />
          <label htmlFor="4x4">4x4</label>
          <input type="radio" name="board-size" value="25" id="5x5" />
          <label htmlFor="5x5">5x5</label>
        </div>
        <button type="submit">Start Game</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
