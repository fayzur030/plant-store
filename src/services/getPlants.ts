import { IPlants } from '@/types/Plants.type'
const BASE_URL = 'http://localhost:5000/plants'

const getPlants = async (): Promise<IPlants[]> => {
  const response = await fetch(`${BASE_URL}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch plants: ${response.status}`)
  }

  const plants = await response.json()

  return plants
}

export default getPlants
