import useTicTacToe from '../hooks/use-tic-tac-toe';

import Cell from './Cell';

export default function Board() {
    const { board, setCell, player, winner } = useTicTacToe( [ 'x', 'o' ] );

    return (
        <>
            { ! winner && <p>Current player: { player }</p> }
            { winner && <p><strong>The winner is: { winner }</strong></p> }

            <div className="board">
                {
                    board.map( ( value, index ) => (
                        <Cell key={ index } value={ value } index={ index } handleClick={ setCell } />
                    ) )
                }
            </div>
        </>
    );
}