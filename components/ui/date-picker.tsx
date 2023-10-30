"use client";

import * as React from "react";
import { addDays, format, isValid, parse } from "date-fns";
import { Caption, SelectSingleEventHandler } from "react-day-picker";

import { Calendar as CalendarIcon } from "@/components/icons";
import {
  Calendar,
  Input,
  Select,
  Trigger,
  SelectValue,
  SelectContent,
  SelectItem,
  ButtonGroup,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  buttonVariants,
} from "@/components/ui";
import { useControllableState } from "@/lib/hooks";

export function DatePicker({
  selected,
  onSelected,
  placeholder,
  onApply,
  onCancel,
}: {
  selected?: Date;
  onSelected?: (value?: Date) => void;
  placeholder?: string;
  onApply?: () => void;
  onCancel?: () => void;
}) {
  const [internalSelected, setInternalSelected] = useControllableState<
    Date | undefined
  >({
    value: selected,
    onChange: onSelected,
  });
  const [inputValue, setInputValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState<string>();
  const [open, onOpenChange] = React.useState(false);

  const onChange = (value: string) => {
    setInputValue(value);
    const date = parse(value, "PP", new Date());

    if (isValid(date)) {
      setInternalSelected(date);
    } else {
      setInternalSelected(undefined);
    }
  };

  const onValueChange = (value: string) => {
    setSelectValue(value);
    const newDate = addDays(new Date(), parseInt(value));

    setInternalSelected(newDate);
    setInputValue(format(newDate, "PP"));
  };

  const onInternalSelected: SelectSingleEventHandler = (date) => {
    setInternalSelected(date);

    if (date) {
      setInputValue(format(date, "PP"));
    }
  };

  return (
    <Popover open={open} onOpenChange={onOpenChange} >
      <PopoverTrigger asChild>
        <Button variant="outlined" className="text-gray-400">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {internalSelected ? (
            format(internalSelected, "PP")
          ) : (
            <span >{placeholder ? placeholder : "Pick a date"}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="popCalender relative bg-white">
        <Calendar
          mode="single"
          selected={internalSelected}
          onSelect={onInternalSelected}
          initialFocus
          components={{
            Caption: (props) => (
              <>
                <Caption {...props} />
                <div className="flex items-center gap-x-3">
                  <Input
                    className="h-10 flex-auto py-2"
                    value={inputValue}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Select date"
                  />
                  <Select value={selectValue} onValueChange={onValueChange}>
                    <Trigger
                      className={buttonVariants({
                        variant: "outlined",
                        visual: "gray",
                        size: "md",
                      })}
                    >
                      <SelectValue placeholder="Select" />
                    </Trigger>
                    <SelectContent>
                      <SelectItem
                        className="pl-4 text-sm font-semibold"
                        value="0"
                      >
                        Today
                      </SelectItem>
                      <SelectItem
                        className="pl-4 text-sm font-semibold"
                        value="1"
                      >
                        Tomorrow
                      </SelectItem>
                      <SelectItem
                        className="pl-4 text-sm font-semibold"
                        value="7"
                      >
                        Week
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            ),
          }}
        />
        <ButtonGroup
          className="mt-5 border-t border-gray-200 p-4"
          // direction="horizontal"
        >
          <Button
            variant="outlined"
            visual="gray"
            onClick={() => {
              onOpenChange(false);
              onCancel?.();
            }}
          >
            Cancel
          </Button>
          <Button onChange={onApply}>Apply</Button>
        </ButtonGroup>
      </PopoverContent>
    </Popover>
  );
}
