import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Tab from "./tab";
import SendMail from "./sendMail";

const Contact = ({ children }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="w-fit p-2 text-black bg-[rgb(215,181,30)] rounded-md text-xl font-bold">
          {children}
        </DialogTrigger>
        <DialogContent className="bg-sky-800  border-none">
          <DialogHeader>
            <DialogTitle className="p-1 text-xl bg-[rgb(215,181,30)] w-fit">
              Contact
            </DialogTitle>
          </DialogHeader>
          <Tab
            icon={"/img/github.png"}
            socialMedia={"Arya0D"}
            href="https://github.com/Arya0D"
          />
          <Tab
            icon={"/img/instagram.png"}
            socialMedia={"@arya.dirham"}
            href="https://www.instagram.com/"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Contact;
