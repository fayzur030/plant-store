import getPlants from '@/services/getPlants'
import Banner from './components/home/Banner'
import { Suspense } from 'react'
import PlantsData from './components/home/plants/PlantsData '

const Home = async () => {
  const fetchPlants = await getPlants()
  return (
    <div>
      <Banner />
      <Suspense>
        <PlantsData plants={fetchPlants} />
      </Suspense>
    </div>
  )
}

export default Home
