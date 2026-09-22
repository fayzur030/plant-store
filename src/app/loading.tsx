import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
  return (
    <div className='flex min-h-100 items-center justify-center'>
      <div className='flex items-center gap-6'>
        <Skeleton className='h-20 w-20 rounded-full' />

        <div className='space-y-3'>
          <Skeleton className='h-6 w-87.5' />
          <Skeleton className='h-6 w-70' />
        </div>
      </div>
    </div>
  )
}

export default Loading
