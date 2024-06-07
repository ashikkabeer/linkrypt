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
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField control={form.control} name="title"
          render={({ field }) => (
            <FormItem>
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="enter title" {...field} />
                  <FormMessage>{form.formState.errors.title?.message}</FormMessage>
                </FormControl>
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
                  <FormMessage>{form.formState.errors.title?.message}</FormMessage>
                </FormControl>
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
                  <FormMessage>{form.formState.errors.title?.message}</FormMessage>
                </FormControl>
              </FormItem>
            </FormItem>
          )} />

          <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}