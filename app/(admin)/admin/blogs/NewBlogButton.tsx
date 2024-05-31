import LicenseDraftIcon from "@/components/icons/license-draft-stroke-rounded";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NewBlogButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button size={"icon"} asChild>
            <Link href={"/admin/blogs/new"}>
              <LicenseDraftIcon className="w-5 h-5"/>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>نوشته جدید</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NewBlogButton;
