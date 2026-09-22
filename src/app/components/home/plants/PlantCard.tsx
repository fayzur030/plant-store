import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { IPlants } from '@/types/Plants.type'
import Image from 'next/image'

interface PlantCardProps {
  plant: IPlants
}

const PlantCard = ({ plant }: PlantCardProps) => {
  return (
    <div>
      <Card className='relative mx-auto w-full max-w-md pt-0 hover:shadow-lg transform duration-300'>
        <div />
        <Image
          src={plant.image}
          alt={plant.name}
          className='relative z-20 aspect-video w-full object-cover'
          width={400}
          height={300}
          unoptimized
        />
        <CardHeader>
          <CardAction>
            <Badge variant='secondary'>$ {plant.price}</Badge>
          </CardAction>
          <CardTitle>{plant.name}</CardTitle>
          <CardDescription>{plant.description}</CardDescription>
        </CardHeader>
        <CardFooter className='flex items-center justify-between gap-4'>
          <Button className='bg-[#006543] hover:bg-green-900 cursor-pointer'>
            Add to cart
          </Button>
          <Button className=' bg-[#76C457] text-black hover:bg-green-700 cursor-pointer'>
            View Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default PlantCard
