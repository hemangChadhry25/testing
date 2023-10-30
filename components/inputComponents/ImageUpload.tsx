import * as React from "react";
import { useRouter } from "next/router";
import {
  Dropzone,
  HelperText,
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui";
import { HelpCircle } from "../icons";

const ImageUploadPreview = ({
  label,
  hint,
  tooltip,
  optional,
  maxQuantity,
  allowedImageExtensions,
  event,
}: any) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="space-y-1.5">
      <div className="flex flex-grow items-center">
        <Label className="pointer-events-none text-gray-700" size="sm" asChild>
          <span>{label ? label : "Image Upload"}</span>
        </Label>

        {optional && (
          <span className="ml-1 text-sm font-medium text-gray-400">
            (optional)
          </span>
        )}

        <div className="ml-2">
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>{tooltip}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>

      {hint && <HelperText size="sm">{hint}</HelperText>}

      <div className="mt-3">
        <Dropzone
          icon
          maxFiles={maxQuantity}
          accepted={allowedImageExtensions}
          workflowId={slug}
          label={label}
          event={event}
        />
      </div>
    </div>
  );
};

export default ImageUploadPreview;
