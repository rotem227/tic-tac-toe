
export default class TicTacToe {
    set board( arr ) {
        this._board = arr;
    }
    
    get board() {
        return this._board;
    }

    updateBoard( boardIndex ) {
        if ( ! this.winner ) {
            this._board[ boardIndex ] = this.currentPlayer;

            this.currentPlayer = this.getNextPlayer();
        }

        return {
            board: this._board,
            player: this.currentPlayer,
        };
    }
    
    isAllEqual( arr ) {
        return arr.every( ( value ) => value && value === arr[ 0 ] );
    }

    getRandomPlayer() {
        const rand = Math.ceil( Math.random() * 2 ) - 1;

        return this.players[ rand ];
    }

    getNextPlayer() {
        return this.currentPlayer === this.players[ 0 ] ? this.players[ 1 ] : this.players[ 0 ];
    }
    
    getRowsValue() {
        for ( let i = this.grid; i <= this.board.length; i+=this.grid ) {
            // [ 1, 2, 3 ] [ 4, 5, 6 ], [ 7, 8, 9 ]
            const slice = this.board.slice( i - this.grid, i );
        
            if ( this.isAllEqual( slice ) ) {
                return slice[ 0 ];
            }
        }

        return '';
    }

    getColumnsValue() {
        for ( let i = 0; i < this.grid; i++ ) {
            const slice = [ this.board[ i ] ];

            for ( let z = i + this.grid; z < this.board.length; z+=this.grid ) {
                slice.push( this.board[ z ] );
            }

            if ( this.isAllEqual( slice ) ) {
                return slice[ 0 ];
            }
        }

        return '';
    }

    getRightDiagonalValue() {
        const slice = [];

        for ( let i = 0; i < this.board.length; i=i+this.grid+1 ) {
            slice.push( this.board[ i ] )
        }

        if ( this.isAllEqual( slice ) ) {
            return slice[ 0 ];
        }

        return '';
    }

    getLeftDiagonalValue() {
        const slice = [];

        for ( let i = this.grid - 1; i < this.board.length - 1; i=i+this.grid-1 ) {
            slice.push(  this.board[ i ] )
        }

        if ( this.isAllEqual( slice ) ) {
            return slice[ 0 ];
        }

        return '';
    }

    getResult() {
        if ( this.winner ) {
            return this.winner;
        }
        
        const rowsValue = this.getRowsValue();

        if ( rowsValue ) {
            this.winner = rowsValue;

            return rowsValue;
        }

        const columnsValue = this.getColumnsValue();

        if ( columnsValue ) {
            this.winner = columnsValue;

            return columnsValue;
        }

        const rightDiagonalValue = this.getRightDiagonalValue();

        if ( rightDiagonalValue ) {
            this.winner = rightDiagonalValue;
            
            return rightDiagonalValue;
        }

        const leftDiagonalValue = this.getLeftDiagonalValue();

        if ( leftDiagonalValue ) {
            this.winner = leftDiagonalValue;

            return leftDiagonalValue;
        }

        return '';
    }

    init( config ) {
        const { grid = 3, players = [], currentPlayer = '' } = config || {};

        this._board = Array( grid * grid ).fill( '' );
        
        this.grid = grid;
        this.players = players;
        this.currentPlayer = currentPlayer || this.getRandomPlayer();
        this.winner = '';

        return {
            player: this.currentPlayer,
            board: this.board,
        };
    }
}
