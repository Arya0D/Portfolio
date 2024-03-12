import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Tab from "./tab";

const Contact = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/120310980?v=4" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
        </DialogTrigger>
        <DialogContent className="bg-sky-800  border-none">
          <DialogHeader>
            <DialogTitle className="p-1 text-xl bg-[rgb(215,181,30)] w-fit">
              Contact
            </DialogTitle>
          </DialogHeader>
          <Tab
            icon={"/img/github.png"}
            socialMedia={"Github"}
            href="https://github.com/Arya0D"
          />
          <Tab
            icon={"/img/instagram.png"}
            socialMedia={"Instagram"}
            href="https://www.instagram.com/"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Contact;
