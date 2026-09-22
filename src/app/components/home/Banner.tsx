import { ArrowRight, BookOpen, Leaf } from 'lucide-react'
import bgImage from '@/assets/plantfy_banner.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Banner = () => {
  const style = {
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <section
      style={style}
      className='flex min-h-[500px] items-center justify-start sm:min-h-[550px] lg:min-h-[600px]'
    >
      <div className='mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 md:px-12 lg:px-6'>
        <div className='max-w-xl space-y-4 sm:space-y-5'>
          {/* Badge */}
          <div className='inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-[#8ec4a3] px-3 py-1 text-xs font-semibold text-[#0F5132] shadow-sm sm:px-4 sm:py-1.5 sm:text-sm'>
            <Leaf className='h-3.5 w-3.5 sm:h-4 sm:w-4' />
            <span>Discover Nature</span>
          </div>
          {/* Heading & Description */}
          <div>
            <h1 className='max-w-md text-4xl font-semibold leading-tight text-[#166534] sm:text-5xl lg:max-w-xl lg:text-6xl'>
              Bring{' '}
              <span className='text-[#0F5132]'>Greenery Into Your Life</span>
            </h1>

            <p className='max-w-md pt-3 text-sm font-medium leading-6 text-[#374151] sm:text-base sm:leading-7'>
              Discover a wide variety of indoor and outdoor plants that add
              beauty, freshness and positive vibes to your space.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2'>
            {/* Explore Collection */}
            <Button className='w-full sm:w-auto rounded-full px-8 py-6 bg-[#006543] text-white font-semibold shadow-lg transition-all hover:bg-brand-800 hover:-translate-y-0.5 hover:shadow-xl'>
              <Link
                href='#catalog'
                className='flex items-center justify-center gap-2 '
              >
                <span>Explore Collection</span>
                <ArrowRight className='h-5 w-5' />
              </Link>
            </Button>

            {/* Plant Care Guide */}
            <Button
              size='lg'
              variant='outline'
              className='w-full sm:w-auto rounded-full border-stone-300 bg-white px-8 py-6 text-stone-700 font-semibold transition-all hover:bg-stone-50'
            >
              <Link
                href='#care'
                className='flex items-center justify-center gap-2 '
              >
                <BookOpen className='h-5 w-5 text-brand-700' color='#006543' />
                <span>Plant Care Guide</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
