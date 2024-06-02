import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/ui/navbar'
export default function Home() {
  return (
    <main className="flex min-h-screen w-screen  bg-[#254F1A] flex-col justify-between ">
      <div className="px-5  navbar">
        <div className="w-full"><Navbar /></div>
      </div>
      <div className="md:w-2/3  bg-[#254F1A]  h-screen px-10 py-40">
        <p className="md:text-6xl text-4xl text leading-[1.1] font-sans font-medium text-[#d2e823]">Sharing and storing links made easier <br />Claim your linkript now</p>

        <p className="pt-3 text-[#d2e823]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vel voluptates consequatur aliquid minus possimus alias labore aspernatur molestiae dolore eaque, at, maiores neque sunt dicta ullam doloribus autem assumenda repellendus! Nisi?</p>
        <div className="inp w-full pt-5 md:flex flex-row">
          <Input className='mr-3 border-2 w-1/2 border-black' placeholder="linkrypt.com/ashikkabeer" />
          <Button className='md:mt-0 bg-[#e9c0e9] mt-2 text-black'>Claim Your Linkrypt</Button>
        </div>
      </div>
      <div className="bg-blue-200 w-screen h-screen secondpage item-center flex justify-between flex-row">
        <div className="p-10">
          <p>Open Source</p>
          <p>End-2-End Encrypter</p>
        </div>
      </div>
      <div className="bg-red-200 w-screen h-screen secondpage">
        <div className="p-10"></div>
      </div>
    </main>
  );
}
