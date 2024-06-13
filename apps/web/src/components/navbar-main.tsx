import { TreePine } from 'lucide-react';
import { Button } from './ui/button';

export default function NavbarMain() {

  return (
    <main className="w-full h-full">
      <div className="w-full flex justify-between bg-white shadow rounded ">
        <div className="left py-2 flex font-medium w-1/3">
          <TreePine />
          <p>Linkrypt</p>
        </div>
        <div className="center py-2 flex justify-between w-1/3">
          <p>Products</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Support</p>
        </div>
        <div className="right  flex justify-end space-x-2 w-1/3">
          <Button className='py-1' variant={'secondary'}>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </main>
  )
}