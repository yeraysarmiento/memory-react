import PropTypes from "prop-types";
import "./Player.scss";

function Player({ player, index }) {
  console.log("index: ", index);
  return (
    <article
      className={
        !player.isPlaying
          ? `player player--${index}`
          : `player player--playing player--${index}`
      }
    >
      <p className="player__name">{player.name}</p>
      <p className="player__points">{player.points}</p>
      <div className={`player__pointer player__pointer--${index}`} />
    </article>
  );
}

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    points: PropTypes.number,
    isPlaying: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number,
};

export default Player;
