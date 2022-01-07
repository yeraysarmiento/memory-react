import GamePage from "./pages/GamePage/GamePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import FormPage from "./pages/FormPage/FormPage";
import useBoard from "./hooks/useBoard";
import usePlayers from "./hooks/usePlayers";
import Menu from "./components/Menu/Menu";
import "@fontsource/karla";

library.add(fab, faRedo);

function App() {
  const { players, setTurn, resetPoints, deletePlayers } = usePlayers();
  const { boardList, resetBoard, deleteBoard } = useBoard();

  const resetGame = () => {
    resetBoard(boardList);
    resetPoints();
    setTurn(players[0]);
  };

  const restartGame = () => {
    deleteBoard();
    deletePlayers();
  };

  return (
    <div className="app">
      <Menu
        onReset={resetGame}
        onRestart={restartGame}
        isPlaying={boardList.length !== 0}
      />
      {boardList.length === 0 ? <FormPage /> : <GamePage />}
    </div>
  );
}

export default App;
