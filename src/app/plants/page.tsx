import React from 'react'

import getPlants from '@/services/getPlants'
import PlantCard from '../components/home/plants/PlantCard'

const Plant = async () => {
  const fetchPlants = await getPlants()

  return (
    <div className='max-w-7xl mx-auto mt-10 px-4 sm:px-6'>
      {/* Plants */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-10'>
        {fetchPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  )
}

export default Plant
