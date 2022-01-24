import React, { useState } from 'react';

export const Context = React.createContext();

export default function ContextProvider( { children } ) {
    const [ board, setBoard ] = useState( [] );

    return (
        <Context.Provider value={ { board, setBoard } }>
            { children }
        </Context.Provider>
    );
}