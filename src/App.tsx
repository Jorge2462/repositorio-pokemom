import { useState } from 'react'
import './App.css'
import Pokemoncard from './pokemoncard'
const pokemonData = [{
    name: 'Pikachu',
    type: 'Eléctrico',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    height: 0.4,
    weight: 6
  },
{
    name: 'Miau',
    type: 'Agua',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
    height: 0.4,
    weight: 4
  }]

function App() {

  return (
    <>

      <div className='flex items-center justify-center min-h-screen bg-gray-50 gap-2'>      
        {pokemonData.map((pokemon, index) => (
          <Pokemoncard key={index} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}

export default App
