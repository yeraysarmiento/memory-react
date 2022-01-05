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
        <div className="game-form__type">
          <p>Select theme:</p>
          <input type="radio" name="board-type" value="icons" id="icons" />
          <label htmlFor="icons">icons</label>
          <input type="radio" name="board-type" value="numbers" id="numbers" />
          <label htmlFor="numbers">numbers</label>
        </div>
        <div className="game-form-size">
          <p>Select size</p>
          <input type="radio" name="board-size" value="4x4" id="4x4" />
          <label htmlFor="4x4">4x4</label>
          <input type="radio" name="board-size" value="6x6" id="6x6" />
          <label htmlFor="6x6">6x6</label>
        </div>
        <div className="game-form__type">
          <p>Select players:</p>
          <input type="radio" name="board-players" value="1" id="1-player" />
          <label htmlFor="1-player">1 Player</label>
          <input type="radio" name="board-players" value="2" id="2-players" />
          <label htmlFor="2-players">2 Players</label>
        </div>
        <button type="submit">Start</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
