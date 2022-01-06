import { useState } from "react";
import Form from "../../components/Form/Form";
import useBoard from "../../hooks/useBoard";
import "./FormPage.scss";

function FormPage() {
  const { loadBoard } = useBoard();

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
    } else if (id === "4x4" || id === "6x6") {
      setSetup({ ...setup, gridSize: event.target.value });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    loadBoard(setup.theme);
    console.log(setup);
    if (setup.theme !== "" && setup.players !== "" && setup.gridSize !== "") {
    }
  };

  return (
    <>
      <header>
        <h1 className="title title--form">memory</h1>
      </header>
      <h2 className="subtitle">Choose your game!</h2>
      <Form onSubmit={onSubmit} onChange={onChange} />
    </>
  );
}

export default FormPage;
