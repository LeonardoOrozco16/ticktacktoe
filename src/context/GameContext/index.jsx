import React from "react";
const GameContext = React.createContext();
function GameProvider({ children }) {
    const TURN = { X: "x", O: "o" };
    const [board, setBoard] = React.useState(Array(9).fill(null));
    const [currentTurn, setCurrentTurn] = React.useState(TURN.X);
    const [winner, setWinner] = React.useState(null);
    const Draws = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const checkWinner = (boardToCheck) => {
        for (const [a, b, c] of Draws) {
            if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
                return boardToCheck[a];
            }
        }
        return null;
    }
    const updateBoard = (index) => {
        if (board[index] || winner) return; //si hay un ganador o la casilla esta ocupada, no sigue
        const newBoard = [...board]; // Recuerda siempre copiar los arrays para no fallar el rederizado
        newBoard[index] = currentTurn;
        setBoard(newBoard);
        const haveWinner = checkWinner(newBoard);
        const nextTurn = currentTurn === TURN.X ? TURN.O : TURN.X;
        setCurrentTurn(nextTurn);
        if (haveWinner) {
            setWinner(haveWinner);
        } else if (checkEndGame(newBoard)) {
            setWinner(false);
        }
    }
    const restartGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentTurn(TURN.X);
        setWinner(null)
    }
    function checkEndGame(newBoard) {
        console.log(newBoard.every((position) => position !== null))
        return newBoard.every((position) => position !== null);
    }
    return (<GameContext.Provider value={{ board, setBoard, TURN, currentTurn, setCurrentTurn, winner, setWinner, updateBoard,restartGame}}>
        {children}
    </GameContext.Provider>)
}
export {GameContext,GameProvider}