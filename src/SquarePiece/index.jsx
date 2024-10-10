
import React from "react";
import { GameContext } from "../context/GameContext";
export function SquarePiece({ children, index, isSelected }) {
    const { updateBoard } = React.useContext(GameContext);
    return (<div className={`square ${isSelected && 'is-selected'}`} onClick={()=>{updateBoard(index)}}>{children}</div>)
}