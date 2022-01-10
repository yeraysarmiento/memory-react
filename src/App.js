import GamePage from "./pages/GamePage/GamePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faRedo, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import FormPage from "./pages/FormPage/FormPage";
import useBoard from "./hooks/useBoard";
import usePlayers from "./hooks/usePlayers";
import Menu from "./components/Menu/Menu";
import { useEffect, useState } from "react";
import Ranking from "./components/Ranking/Ranking";

library.add(fab, faRedo, faSyncAlt);

function App() {
  const { players, setTurn, resetPoints, deletePlayers } = usePlayers();
  const { boardList, resetBoard, deleteBoard } = useBoard();
  const [isRanking, setIsRanking] = useState(false);

  const resetGame = () => {
    resetBoard(boardList);
    resetPoints();
    setTurn(players[0]);
    setIsRanking(false);
  };

  const restartGame = () => {
    deleteBoard();
    deletePlayers();
    setIsRanking(false);
  };

  useEffect(() => {
    const checkedBoard = boardList.map((cell) =>
      cell.isMatched ? true : false
    );
    if (checkedBoard.includes(false) || boardList.length === 0) {
      setIsRanking(false);
    } else {
      setIsRanking(true);
    }
  }, [boardList, isRanking]);

  return (
    <div className="app">
      <Menu
        onReset={resetGame}
        onRestart={restartGame}
        isPlaying={boardList.length !== 0}
      />
      {boardList.length === 0 ? <FormPage /> : <GamePage />}
      {isRanking && (
        <>
          <Ranking
            players={players}
            onReset={resetGame}
            onRestart={restartGame}
          />
        </>
      )}
    </div>
  );
}

export default App;
