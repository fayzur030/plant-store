import { Suspense } from 'react'
import PlantsData from './components/home/plants/PlantsData'
import Loading from './loading'
import Banner from './components/home/Banner'

const Home = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<Loading />}>
        <PlantsData />
      </Suspense>
    </div>
  )
}

export default Home
