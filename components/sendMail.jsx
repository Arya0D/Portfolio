import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";

const SendMail = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size="wide">Send Me an Email</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Email</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SendMail;
