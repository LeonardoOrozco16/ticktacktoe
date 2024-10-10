import React from 'react';
import { GameContext } from './context/GameContext';
import {SquarePiece} from "./SquarePiece";
function AppUI() {
    const {board,TURN,currentTurn,winner,restartGame} = React.useContext(GameContext);
    return (<main className="board">
        <h1>Es Tic Tac Toe, no Tick Tack Toe... Es Leviosa no Leviosá</h1>
        <section className='game'>
            {board.map((value,index) => (
                <SquarePiece key={index} index={index}>
                    {value}
                </SquarePiece>
            ))}
        </section>
        <section className='turn'>
            <h2>Es turno de:</h2>
            <SquarePiece isSelected={currentTurn == TURN.X}>{TURN.X}</SquarePiece>
            <SquarePiece isSelected={currentTurn == TURN.O}>{TURN.O}</SquarePiece>
        </section>
        {winner !== null && (
            <section className='winner'>
                <div className='text'>
                    <h2>
                        { winner === false ? 'Empate': 'Gano: '}
                    </h2>
                    <header className='win'>
                        {winner && <SquarePiece>{winner}</SquarePiece>}
                    </header>
                    <button type='button' onClick={restartGame}>¿Jugamos de nuevo?</button>
                </div>
            </section>
        )}
      </main>);
}
export { AppUI };