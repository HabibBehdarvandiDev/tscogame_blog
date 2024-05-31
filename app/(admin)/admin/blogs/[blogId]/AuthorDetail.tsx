import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { AuthorSchema } from "@/schemas/AuthorScheam";
import prisma from "@/utils/db";
import AuthorRank from "./AuthorRank";

const AuthorDetail = async ({ authorId }: { authorId: number }) => {
  const author: AuthorSchema | null = await prisma.user.findUnique({
    where: {
      id: authorId,
    },
  });

  return (
    <Card className="border-none shadow-sm">
      <CardHeader>
        <CardTitle>نویسنده</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-start align-middle gap-3">
          <Avatar>
            <AvatarImage src={author?.profileUrl} />
            <AvatarFallback>کاربر</AvatarFallback>
          </Avatar>

          <p className="text-xl text-right font-semibold text-nowrap">
            {author?.username}
          </p>
        </div>
        <p className="text-gray-400">
          {"نام  : "}{" "}
          {author?.fisrtName} {author?.lastname}
        </p>
        <Badge className="w-fit" >{author?.role}</Badge>

        <AuthorRank />
      </CardContent>
    </Card>
  );
};

export default AuthorDetail;
