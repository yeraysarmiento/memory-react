/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import PropTypes from "prop-types";
import GameContext from "./GameContext";

function GameContextProvider({ children }) {
  const list = [
    {
      id: 1,
      content: "🦊",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 2,
      content: "🐮",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 3,
      content: "🐷",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 4,
      content: "🦁",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 5,
      content: "🐯",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 6,
      content: "🐨",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 7,
      content: "🐙",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 8,
      content: "🐵",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 9,
      content: "🦊",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 10,
      content: "🐮",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 11,
      content: "🐷",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 12,
      content: "🦁",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 13,
      content: "🐯",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 14,
      content: "🐨",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 15,
      content: "🐙",
      isMatched: false,
      isHidden: true,
    },
    {
      id: 16,
      content: "🐵",
      isMatched: false,
      isHidden: true,
    },
  ];
  const gameList = list.sort(() => Math.random() - 0.5);

  const [boardList, setBoardList] = useState(gameList);

  return (
    <GameContext.Provider
      value={{
        boardList,
        setBoardList,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameContextProvider;
