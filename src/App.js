import GamePage from "./pages/GamePage/GamePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import FormPage from "./pages/FormPage/FormPage";
import useBoard from "./hooks/useBoard";

library.add(fab, faRedo);

function App() {
  const { boardList } = useBoard();

  return (
    <div className="app">
      {boardList.length === 0 ? <FormPage /> : <GamePage />}
    </div>
  );
}

export default App;
