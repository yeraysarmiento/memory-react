import Board from "../../components/Board/Board";
import Player from "../../components/Player/Player";
import useBoard from "../../hooks/useBoard";
import useSelected from "../../hooks/useSelected";
import usePlayers from "../../hooks/usePlayers";
import { useEffect } from "react";
import "./GamePage.scss";
import { Howl } from "howler";
import wrongAnswer from "../../assets/soundEffects/wrongAnswer.mp3";
import rightAnswer from "../../assets/soundEffects/rightAnswer.mp3";

function GamePage() {
  const { boardList, setMatchedCell } = useBoard();
  const { selectedCells, addSelectedCell, removeSelectedCell } = useSelected();
  const { players, setTurn, addPoints } = usePlayers();

  const soundPlay = (sound) => {
    const audioToPlay = new Howl({
      src: [sound],
    });

    audioToPlay.play();
  };

  const setPair = (cell) => {
    if (!cell.isMatched) {
      if (!selectedCells.includes(cell)) {
        if (selectedCells.length < 2) {
          addSelectedCell(cell);
        }
      }
    }
  };

  const checkPair = (cells) => {
    const cellOne = cells[0];
    const cellTwo = cells[1];

    if (cellOne.content !== cellTwo.content) {
      soundPlay(wrongAnswer);
      removeSelectedCell(cellOne);
      removeSelectedCell(cellTwo);

      if (players.length > 1) {
        if (players[0].isPlaying) {
          setTurn(players[1]);
        } else {
          setTurn(players[0]);
        }
      }
    } else {
      soundPlay(rightAnswer);

      setMatchedCell(cellOne);
      setMatchedCell(cellTwo);
      removeSelectedCell(cellOne);
      removeSelectedCell(cellTwo);
      if (players[0].isPlaying) {
        addPoints(players[0]);
      } else {
        addPoints(players[1]);
      }
    }
  };

  useEffect(() => {
    if (selectedCells.length === 2) {
      setTimeout(() => {
        checkPair(selectedCells);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCells]);

  return (
    <>
      <main>
        <div className="board-container">
          <Board boardList={boardList} onPair={setPair} />
        </div>
      </main>

      <footer>
        <ul
          className={
            players.length === 1 ? "players players--1-player" : "players"
          }
        >
          {players.map((player) => (
            <Player player={player} key={player.name} />
          ))}
        </ul>
      </footer>
    </>
  );
}

export default GamePage;
