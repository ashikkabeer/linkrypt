import Hero from '@/components/hero';
import NavbarMain from '@/components/navbar-main';
import Particles from '@/components/particles';
export default function Home() {
  return (
    <main className=" h-screen w-screen flex-col flex  justify-center">
      
          <div className='p-5 w-full flex flex-col h-full justify-center items-center'>
          <div className=' navbar w-3/4 flex justify-center'>
            <NavbarMain />
          </div>
          
          <div className='w-full h-full flex justify-center items-center'>
            <Hero />
          </div>
          </div>
        {/* </div>

      </div> */}


    </main>
  );
}
