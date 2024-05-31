import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import MailIcon from "./icons/MailIcon";
import prisma from "@/utils/db";
import MessageToWriterForm from "./MessageToWriterForm";

type AuthorType = {
  id: number;
  fisrtName: string;
  lastname: string;
  username: string;
  password: string;
  role: string;
  profileUrl: string;
} | null;

const MessageToWriter = async ({ authorId }: { authorId: number }) => {
  const author: AuthorType = await prisma.user.findUnique({
    where: {
      id: authorId,
    },
  });

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"} className="flex items-center gap-2">
          <MailIcon className="w-5 h-5" />{" "}
          <span>پیام به نویسنده</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-right mr-5">
            شما درحال ارسال پیام به {author?.fisrtName} {author?.lastname} هستید
          </DialogTitle>
        </DialogHeader>
        <MessageToWriterForm authorId={author?.id!} />
      </DialogContent>
    </Dialog>
  );
};

export default MessageToWriter;
