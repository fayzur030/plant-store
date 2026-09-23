import { getPlantById } from '@/services/getPlants'
import Image from 'next/image'
import React from 'react'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
interface DetailsProps {
  params: Promise<{ plantId: string }>
}

const DetailsPage = async ({ params }: DetailsProps) => {
  const { plantId } = await params
  const plant = await getPlantById(plantId)

  return (
    <div className='flex justify-center items-center h-screen'>
      <Card className='relative mx-auto w-full max-w-2xl overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
        {/* Plant Image */}
        <Image
          src={plant.image}
          alt={plant.name}
          className='aspect-video w-full object-cover'
          width={200}
          height={120}
          unoptimized
        />

        <CardHeader className='space-y-2 py-4'>
          {/* Price + Category */}
          <div className='flex items-center justify-between'>
            <Badge variant='secondary' className='text-sm'>
              {plant.category}
            </Badge>

            <span className='text-lg font-bold text-green-600'>
              ${plant.price}
            </span>
          </div>

          {/* Name */}
          <div>
            <CardTitle className='text-xl'>{plant.name}</CardTitle>

            <p className='mt-0.5 text-sm italic text-muted-foreground'>
              {plant.scientificName}
            </p>
          </div>

          {/* Description */}
          <CardDescription className='line-clamp-1'>
            {plant.description}
          </CardDescription>

          {/* Plant Details */}
          <div className='grid grid-cols-2 gap-2 pt-1'>
            <div className='rounded-md bg-muted/50 p-2'>
              <p className='text-xs text-muted-foreground'>☀️ Sunlight</p>
              <p className='mt-0.5 text-sm font-medium'>{plant.sunlight}</p>
            </div>

            <div className='rounded-md bg-muted/50 p-2'>
              <p className='text-xs text-muted-foreground'>💧 Watering</p>
              <p className='mt-0.5 text-sm font-medium'>{plant.watering}</p>
            </div>

            <div className='rounded-md bg-muted/50 p-2'>
              <p className='text-xs text-muted-foreground'>🌱 Growth</p>
              <p className='mt-0.5 text-sm font-medium'>{plant.growthRate}</p>
            </div>

            <div className='rounded-md bg-muted/50 p-2'>
              <p className='text-xs text-muted-foreground'>⭐ Rating</p>
              <p className='mt-0.5 text-sm font-medium'>{plant.rating}/5</p>
            </div>
          </div>
        </CardHeader>

        <CardFooter className='flex items-center justify-between gap-4 pt-0 pb-4'>
          <Button className='w-full py-4 cursor-pointer hover:bg-[#006543] bg-green-700 text-white'>
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default DetailsPage
