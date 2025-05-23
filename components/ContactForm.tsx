"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Loader } from "lucide-react";
//Form schema
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),

  email: z.string().email({
    message: "Invalid email address. Please enter a valid email.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

export default function ContactForm() {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmiting(true);

    emailjs
      .sendForm(
        "service_i9u1zy5",
        "template_5dzpj17",
        "#my-form",
        "KBMwY4REo2bDCuKMh",
      )

      .then((response) => {
        console.log("Email sent successfully:", response);

        toast({
          description: "Your message has been sent.",
        });

        form.reset({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });

        setIsSubmiting(false);
      })

      .catch((error) => {
        console.error("Error sending email:", error);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Your message was not sent.",
        });
      });
  }

  const { toast } = useToast();

  return (
    <div className="h-full w-full flex flex-col px-0 md:px-10 xl:px-0 xl:items-end">
      <h2 className="text-2xl text-center xl:text-right mb-5">Get In Touch</h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-auto w-full flex flex-col gap-4 max-w-[800px] mx-auto xl:mx-0"
          id="my-form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <div className="hidden sm:block">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <div className="hidden sm:block">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <div className="hidden sm:block">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your message here" {...field} />
                </FormControl>
                <div className="hidden sm:block">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full  md:w-28 ml-auto">
            {isSubmiting ? <Loader className="animate-spin" /> : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
