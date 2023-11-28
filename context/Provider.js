import React,{createContext,useState} from 'react';

export const Context = createContext();

export default function Provider({children})
{
    const [pokemons, setPokemons] = useState('vc tem 100 poks');

    return (
        <Context.Provider value={{pokemons, setPokemons}}>
            {children}
        </Context.Provider>
    )
}