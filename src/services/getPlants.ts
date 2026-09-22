import { IPlants } from '@/types/Plants.type'

const getPlants = async (): Promise<IPlants[]> => {
  const response = await fetch(
    'https://openapi.programming-hero.com/api/plants'
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch plants: ${response.status}`)
  }

  const plants: { plants: IPlants[] } = await response.json()

  return plants.plants
}

export default getPlants
