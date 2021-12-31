import GamePage from "./pages/GamePage/GamePage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faRedo);

function App() {
  return (
    <div className="app">
      <GamePage />
    </div>
  );
}

export default App;
