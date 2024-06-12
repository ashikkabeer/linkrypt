"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
  title: z.string().min(1),
  url: z.string().url(),
  description: z.string().min(1),
});

export default function LinkForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      url: "",
      description: "",
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const data = {
      name: values.title,
      url: values.url,
      description: values.description,
    }
    // id = workspace id
    // extract workspace id from the url
    const workspaceId = window.location.pathname.split("/").pop();
    const res = fetch(`http://localhost:5000/api/v1/link/create/${workspaceId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });
    console.log(res);
  }
  return (
    <main>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField control={form.control} name="title"
            render={({ field }) => (
              <FormItem>
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="enter title" {...field} />

                  </FormControl>
                  <FormMessage>{form.formState.errors.title?.message}</FormMessage>
                </FormItem>
              </FormItem>
            )} />


          <FormField control={form.control} name="url"
            render={({ field }) => (
              <FormItem>
                <FormItem>
                  <FormLabel>url</FormLabel>
                  <FormControl>
                    <Input placeholder="enter url" {...field} />

                  </FormControl>
                  <FormMessage>{form.formState.errors.title?.message}</FormMessage>
                </FormItem>
              </FormItem>
            )} />

          <FormField control={form.control} name="description"
            render={({ field }) => (
              <FormItem>
                <FormItem>
                  <FormLabel>description</FormLabel>
                  <FormControl>
                    <Input placeholder="enter description" {...field} />

                  </FormControl>
                  <FormMessage>{form.formState.errors.title?.message}</FormMessage>
                </FormItem>
              </FormItem>
            )} />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  )
}