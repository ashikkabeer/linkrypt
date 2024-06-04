
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export default function AuthTab() {
  return (
    <main className='w-screen h-screen'>
      <div className='flex justify-center items-center align-middle self-center h-full'>
        <Tabs defaultValue="signup" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="signin">Signin</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create your Linkrypt</CardTitle>
                <CardDescription>
                  Create your account here. After saving, you'll be logged in.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">username</Label>
                  <Input id="username" placeholder="ashikkabeer" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">email</Label>
                  <Input type='email' id="email" placeholder="johndoe@example.com" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">password</Label>
                  <Input id="password" type='password' placeholder="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Claim Linkrypt</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signin">
            <Card>
              <CardHeader>
                <CardTitle>Login to your Linkrypt</CardTitle>
                <CardDescription>
                  Get back to your account. After saving, you'll be logged in.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">email</Label>
                  <Input id="email" type="email" placeholder='johndoe@example.com' />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">password</Label>
                  <Input id="password" type="password" placeholder='password' />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Login to Linkrypt</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
