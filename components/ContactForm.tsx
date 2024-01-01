import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div className="h-full w-full flex">
      <div className="my-auto w-full flex flex-col gap-4">
        <h2 className="text-4xl text-center mb-5 underline">Get In Touch</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="Enter your first name" />
          </div>
          <div>
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Enter your last name" />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            className="min-h-[100px]"
            id="message"
            placeholder="Enter your message"
          />
        </div>
        <Button type="submit" className="w-fit">
          Submit
        </Button>
      </div>
    </div>
  );
}
