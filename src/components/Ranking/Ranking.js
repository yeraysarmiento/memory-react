import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./Ranking.scss";

function Ranking({ players, onReset, onRestart }) {
  const [isTied, setIsTied] = useState(false);
  const rankingList = players.sort((player1, player2) => {
    return player2.points - player1.points;
  });

  const winner = rankingList[0];

  useEffect(() => {
    if (rankingList[0]?.points === rankingList[1]?.points) {
      setIsTied(true);
    }
  }, [rankingList, setIsTied]);

  return (
    <section className="ranking">
      <div className="ranking__container">
        <div className="ranking__winner">
          {isTied ? <h3>Tied Game!</h3> : <h3>{winner?.name} wins!</h3>}
          <p>Game over! Here are the results: </p>
        </div>
        <ul className="ranking__list">
          {rankingList.map((player) => (
            <li
              className={
                player?.name === winner.name
                  ? "ranking__player ranking__player--winner"
                  : "ranking__player"
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
    </section>
  );
}

Ranking.propTypes = {
  onReset: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
};

export default Ranking;
