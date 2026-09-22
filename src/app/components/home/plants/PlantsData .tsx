import { IPlants } from '@/types/Plants.type'
import React from 'react'
import PlantCard from './PlantCard'
interface PlantsProps {
  plants: IPlants[]
}

const PlantsData = ({ plants }: PlantsProps) => {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  )
}

export default PlantsData
