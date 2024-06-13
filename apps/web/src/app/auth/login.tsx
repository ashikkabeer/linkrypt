"use client";


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
import { setCookie, getCookie } from 'cookies-next';
import { FormEvent } from 'react';
import { BASE_URL } from '../../../BASE_URL';
import { useRouter } from 'next/navigation';
export default function Login() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      console.log("formData: ", formData);

      const values = Object.fromEntries(formData.entries());
      console.log("values: ", values);

      const response = await fetch(BASE_URL + 'auth/signin', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(values)
      });
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      console.log("data: ", data.access_token);
      if (data) {
        console.log('data token is here')
        setCookie('access_token', data.access_token)
        console.log('cookies set', getCookie('access_token'));

        router.push('/home');
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <main>
      <Card className='bg-white/40'>
        <CardHeader>
          <CardTitle>Login to your Linkrypt</CardTitle>
          <CardDescription>
            Get back to your account. After saving, you'll be logged in.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-1">
              <Label htmlFor="email">email</Label>
              <Input name='email' id="email" type="email" placeholder='ashikkabeer@example.com' />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">password</Label>
              <Input name='password' id="password" type="password" placeholder='password' />
            </div>
            <div className='pt-2'>
              <Button type='submit'>Login to Linkrypt</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
