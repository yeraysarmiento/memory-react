import PropTypes from "prop-types";
import "./Player.scss";

function Player({ player }) {
  return (
    <div className={player.isPlaying ? "player" : "player player--playing"}>
      <p className="player__name">{player.name}</p>
      <p className="player__points">{player.points}</p>
      <div className="player__pointer" />
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    points: PropTypes.bool,
    isPlaying: PropTypes.bool,
  }).isRequired,
};

export default Player;
