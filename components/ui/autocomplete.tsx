"use client";

import * as React from "react";
import { Combobox as AutocompletePrimitives } from "@headlessui/react";
import { CheckIcon } from "lucide-react";
import { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { labelVariants } from "./label";

const AutocompleteRoot = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives>,
  React.ComponentPropsWithoutRef<typeof AutocompletePrimitives>
>(({ ...props }, ref) => <AutocompletePrimitives ref={ref} {...props} />);

AutocompleteRoot.displayName = "AutocompleteRoot";

const Autocomplete = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("relative w-[320px]", className)} ref={ref} {...props} />
));

Autocomplete.displayName = "Autocomplete";

const AutocompleteLabel = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives.Label>,
  React.ComponentProps<typeof AutocompletePrimitives.Label> &
    VariantProps<typeof labelVariants>
>(({ className, size, ...props }, ref) => (
  <AutocompletePrimitives.Label
    className={cn(labelVariants({ className, size }))}
    ref={ref}
    {...props}
  />
));

AutocompleteLabel.displayName = "AutocompleteLabel";

const AutocompleteTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("relative z-10", className)} ref={ref} {...props} />
));

AutocompleteTrigger.displayName = "AutocompleteTrigger";

const AutocompleteInput = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives.Input>,
  React.ComponentProps<typeof AutocompletePrimitives.Input>
>(({ className, ...props }, ref) => (
  <AutocompletePrimitives.Input
    className={cn(
      "h-11 w-full rounded-[5px] border-gray-300 bg-white px-3 py-2.5 text-base leading-6 text-gray-black shadow-xs ui-open:rounded-b-none ui-open:rounded-t-lg ui-open:border-0 ui-open:pl-[42px] ui-open:text-sm ui-open:shadow-[0px_-14px_25px_0px_rgba(0,0,0,0.10)] ui-open:ring-0 ui-not-open:pr-[42px] focus:border-primary-500 focus:ui-not-open:ring-4 focus:ui-not-open:ring-primary-50",
      className
    )}
    ref={ref}
    {...props}
  />
));

AutocompleteInput.displayName = "AutocompleteInput";

const AutocompleteButton = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives.Button>,
  React.ComponentProps<typeof AutocompletePrimitives.Button>
>(({ className, ...props }, ref) => (
  <AutocompletePrimitives.Button
    className={cn(
      "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 ui-open:left-3.5 ui-open:right-auto ui-open:text-gray-400",
      className
    )}
    ref={ref}
    {...props}
  />
));

AutocompleteButton.displayName = "AutocompleteButton";

const AutocompleteOptions = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives.Options>,
  React.ComponentProps<typeof AutocompletePrimitives.Options>
>(({ className, ...props }, ref) => (
  <AutocompletePrimitives.Options
    className={cn(
      "absolute top-full z-10 h-[320px] w-full overflow-y-auto rounded-b-lg bg-white shadow-xs scrollbar-thin scrollbar-thumb-gray-200 scrollbar-thumb-rounded-[13px] ui-open:shadow-[0px_22px_25px_0px_rgba(0,0,0,0.10)]",
      className
    )}
    ref={ref}
    {...props}
  />
));

AutocompleteOptions.displayName = "AutocompleteOptions";

const AutocompleteOption = React.forwardRef<
  React.ComponentRef<typeof AutocompletePrimitives.Option>,
  React.ComponentProps<typeof AutocompletePrimitives.Option> & {
    children: React.ReactNode;
  }
>(({ className, children, ...props }, ref) => (
  <AutocompletePrimitives.Option
    className={cn(
      "flex h-10 cursor-pointer items-center gap-x-3 px-3.5 py-2 text-sm text-gray-500",
      className
    )}
    ref={ref}
    {...props}
  >
    {({ selected, active }) => (
      <>
        <div
          className={cn(
            "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border-[1.5px] border-gray-300 bg-white",
            {
              "border-primary-400 ring-4 ring-primary-50": active,
              "border-primary-500 bg-primary-500": selected,
            }
          )}
        >
          <CheckIcon
            className={cn("hidden h-3 w-3 shrink-0 stroke-[2.5px] text-white", {
              block: selected,
            })}
          />
        </div>
        {children}
      </>
    )}
  </AutocompletePrimitives.Option>
));

AutocompleteOption.displayName = "AutocompleteOption";

export {
  AutocompleteRoot,
  AutocompleteLabel,
  Autocomplete,
  AutocompleteTrigger,
  AutocompleteInput,
  AutocompleteButton,
  AutocompleteOptions,
  AutocompleteOption,
};
