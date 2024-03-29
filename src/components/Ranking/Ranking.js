import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Fireworks from "../Fireworks/Fireworks";
import "./Ranking.scss";

function Ranking({ players, onReset, onRestart }) {
  const [isTied, setIsTied] = useState(false);
  const rankingList = [...players].sort((player1, player2) => {
    return player2.points - player1.points;
  });

  const winner = rankingList[0];
  const isWinnerPlayer1 = rankingList[0].name === players[0].name;

  useEffect(() => {
    if (rankingList[0]?.points === rankingList[1]?.points) {
      setIsTied(true);
    }
  }, [rankingList, setIsTied]);

  return (
    <article className="ranking">
      <Fireworks />
      <div className="ranking__container">
        <div className="ranking__winner">
          {players.length === 1 ? (
            <h3>Congratulations!</h3>
          ) : isTied ? (
            <h3>Tied Game!</h3>
          ) : (
            <h3>{winner?.name} wins!</h3>
          )}
          {players.length === 1 ? (
            <p>Here are your results: </p>
          ) : (
            <p>Game over! Here are the results: </p>
          )}
        </div>
        <ul className="ranking__list">
          {rankingList.map((player) => (
            <li
              className={
                player?.name === winner.name
                  ? isWinnerPlayer1
                    ? "ranking__player ranking__player--player1 ranking__player--winner"
                    : "ranking__player ranking__player--player2 ranking__player--winner"
                  : player.name === players[0].name
                  ? "ranking__player ranking__player--player1"
                  : "ranking__player ranking__player--player2"
              }
              key={player?.name}
            >
              <h4>{player?.name}</h4>
              <p>{player?.points} points</p>
            </li>
          ))}
        </ul>
        <div className="ranking__menu">
          <button onClick={onReset}>Restart</button>
          <button onClick={onRestart}>New Game</button>
        </div>
      </div>
    </article>
  );
}

Ranking.propTypes = {
  onReset: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
};

export default Ranking;
