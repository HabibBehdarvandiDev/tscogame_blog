"use client";

import LicenseDraftIcon from "@/components/icons/license-draft-stroke-rounded";
import RefreshIcon from "@/components/icons/refresh-stroke-rounded";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const ReloadButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={() => window.location.reload()}
          >
            <RefreshIcon className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>ریلود صفحه</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ReloadButton;
