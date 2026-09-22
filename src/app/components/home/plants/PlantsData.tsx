import React from 'react'
import PlantCard from './PlantCard'
import getPlants from '@/services/getPlants'

const PlantsData = async () => {
  const fetchPlants = await getPlants()

  return (
    <div className='max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-12 gap-2'>
      {/* Category Sidebar */}
      <aside className='lg:col-span-3'>
        <div className='bg-[#F6F7FB] p-4 rounded-lg lg:sticky lg:top-24'>
          category
        </div>
      </aside>

      {/* Plants */}
      <div className='lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {fetchPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  )
}

export default PlantsData
