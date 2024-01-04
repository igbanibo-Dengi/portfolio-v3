import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <div className="h-full w-full flex flex-col px-0 md:px-10 xl:px-0 xl:items-end">
      <h2 className="text-2xl text-center xl:text-right mb-5">Get In Touch</h2>

      <div className="my-auto w-full flex flex-col gap-4 max-w-[800px] mx-auto xl:mx-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            className="min-h-[100px] max-h-[250px]"
            id="message"
            placeholder="Enter your message"
          />
        </div>
        <Button type="submit" className="w-fit ml-auto">
          Submit
        </Button>
      </div>
    </div>
  );
}
