import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/utils/db";
import { AuthorSchema } from "@/schemas/AuthorScheam";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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

          <p className="text-xl text-right font-semibold">
            {author?.username} @
          </p>
        </div>
        <p className="text-gray-400">
          {author?.fisrtName} {author?.lastname}
        </p>
        <Badge className="w-fit">{author?.role}</Badge>

        <AuthorRank />
      </CardContent>
    </Card>
  );
};

export default AuthorDetail;
