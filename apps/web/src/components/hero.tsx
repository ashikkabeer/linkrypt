import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className='hero flex flex-col justify-center h-full space-y-3 w-2/4 '>
      <p className='flex justify-center text-secondary-background'>Private Linsk</p>
      <p className='flex justify-center text-4xl font-bold'>Sharing link made easier</p>
      <p className='flex justify-center text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quas, animi, exercitationem, officiis vel possimus consequuntur minima accusamus et dignissimos debitis qui reprehenderit.</p>
      <div className="cta flex justify-center space-x-9">
        <Button>Get Started</Button>
        <Button variant='secondary'>Learn More</Button>
      </div>
    </div>
  )
}