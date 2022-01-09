import { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import useBoard from "../../hooks/useBoard";
import usePlayers from "../../hooks/usePlayers";
import "./FormPage.scss";

function FormPage() {
  const { loadBoard } = useBoard();
  const { addPlayer } = usePlayers();
  const [presentationPage, setPresentationPage] = useState(true);

  const data = {
    theme: "",
    players: "",
    gridSize: "",
  };

  const [setup, setSetup] = useState(data);

  const onChange = (event) => {
    const id = event.target.id;

    if (id === "icons" || id === "numbers") {
      setSetup({ ...setup, theme: event.target.value });
    } else if (id === "1-player" || id === "2-players") {
      setSetup({ ...setup, players: event.target.value });
    } else if (id === "4x4" || id === "5x5") {
      setSetup({ ...setup, gridSize: event.target.value });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (setup.theme !== "" && setup.players !== "" && setup.gridSize !== "") {
      loadBoard(setup.theme, +setup.gridSize);
      addPlayer(+setup.players);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setPresentationPage(false);
    }, 1000);
  });

  return presentationPage ? (
    <div className="presentation-container">
      <img
        className="presentation-icon"
        src="./icon-512x512.png"
        alt="memory logo"
        width="100"
      />
    </div>
  ) : (
    <Form onSubmit={onSubmit} onChange={onChange} />
  );
}

export default FormPage;
