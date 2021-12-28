function GamePage() {
  return (
    <div className="game-container">
      <header>
        <h1 className="title">memory</h1>
        <ul className="menu">
          <li className="menu__element menu__element--restart">Restart</li>
          <li className="menu__element menu__element--new-game">New Game</li>
        </ul>
      </header>
      <body>
        <div className="board-container">
          <ul className="board">
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
            <li className="cell">
              <span>1</span>
            </li>
          </ul>
        </div>
        <section className="players">
          <div className="player">
            <p className="player__name">Player 1</p>
            <p className="player__points">2</p>
            <div className="player__pointer" />
          </div>
          <div className="player">
            <p className="player__name">Player 2</p>
            <p className="player__points">2</p>
            <div className="player__pointer" />
          </div>
        </section>
      </body>
    </div>
  );
}

export default GamePage;
