function Pokemoncard({pokemon}:any) {
  return (
    <div className='bg-white rounded-xl shadow-lg p-6 max-w-xs text-center'>
          {/* Header */}
          <h1 className='text-3xl font-bold text-gray-800 mb-1'>{pokemon.name}</h1>
          <p className='text-sm text-gray-500 mb-4'>{pokemon.type}</p>

          {/* Image */}
          <div className='flex justify-center mb-6'>
            <img src={pokemon.image} alt={pokemon.name} className='w-40 h-40 object-contain' />
          </div>

          {/* Info */}
          <div className='flex justify-around text-gray-700 text-sm'>
            <div>
              <p className='font-semibold'>{pokemon.height}m</p>
              <p className='text-gray-500 text-xs'>Altura</p>
            </div>
            <div className='border-l border-gray-200'></div>
            <div>
              <p className='font-semibold'>{pokemon.weight}kg</p>
              <p className='text-gray-500 text-xs'>Peso</p>
            </div>
          </div>
        </div>
  );
}
export default Pokemoncard;