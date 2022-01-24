import { memo } from 'react';

function Cell( { value, index, handleClick } ) {
    
    return (
        <div className="board-cell" onClick={ () => handleClick( index ) }>
            <span>{ value }</span>
        </div>
    );
}

export default memo( Cell );