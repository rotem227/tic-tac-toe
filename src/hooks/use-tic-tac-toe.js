
import { useState, useCallback, useEffect, useRef } from 'react';

import TicTacToe from '../helpers/tic-tac-toe';

const ticTacToe = new TicTacToe();

export default function useTicTacToe( players ) {
    const [ board, setBoard ] = useState( [] );
    const [ winner, setWinner ] = useState( '' );

    const player = useRef( '' );

    const updateData = ( board, currentPlayer ) => {
        player.current = currentPlayer;

        setBoard( [ ...board ] );
    };

    const setCell = useCallback( ( index ) => {
        const { board, player } = ticTacToe.updateBoard( index );

        updateData( board, player );
    }, [] );

    useEffect( () => {
        const { board, player } = ticTacToe.init( { players } );

        updateData( board, player );

    }, [] );

    useEffect( () => {
        if ( board.length ) {
            const boardResult = ticTacToe.getResult( board );

            if ( boardResult ) {
                setWinner( boardResult );
            }
        }
    }, [ board ] );

    return {
        board,
        setCell,
        winner,
        player: player.current,
    };
}