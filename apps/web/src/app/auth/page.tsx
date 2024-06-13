
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import SignUp from './signup'
import Login from './login'

export default function AuthTab() {
  return (
    <main className='w-screen h-screen'>
      <div className='flex justify-center  items-center align-middle self-center h-full'>
        <Tabs defaultValue="signup" className="w-[400px] ">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="signin">Signin</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <SignUp/>


          </TabsContent>
          <TabsContent value="signin">
            <Login/>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
