import actionTypes from "../actions/actionTypes";

const iconsList = [
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
// const numbersList = [
//   {
//     id: 1,
//     content: "1",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 2,
//     content: "2",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 3,
//     content: "3",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 4,
//     content: "4",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 5,
//     content: "5",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 6,
//     content: "6",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 7,
//     content: "7",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 8,
//     content: "8",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 9,
//     content: "1",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 10,
//     content: "2",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 11,
//     content: "3",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 12,
//     content: "4",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 13,
//     content: "5",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 14,
//     content: "6",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 15,
//     content: "7",
//     isMatched: false,
//     isHidden: true,
//   },
//   {
//     id: 16,
//     content: "8",
//     isMatched: false,
//     isHidden: true,
//   },
// ];
const gameList = iconsList.sort(() => Math.random() - 0.5);

const boardReducer = (cells = gameList, action = {}) => {
  let cellsList;

  switch (action.type) {
    case actionTypes.setMatched:
      cellsList = cells.map((cell) =>
        cell.id === action.cell.id ? { ...cell, isMatched: true } : cell
      );
      break;
    case actionTypes.resetBoard:
      cellsList = [...gameList].sort(() => Math.random() - 0.5);
      break;
    default:
      cellsList = cells;
  }

  return cellsList;
};

export default boardReducer;
