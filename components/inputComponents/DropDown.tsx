import React from "react";
import { Check2, ChevronDown, HelpCircle, Search, X } from "../icons";
import {
  Badge,
  DropdownCommand,
  DropdownCommandEmpty,
  DropdownCommandGroup,
  DropdownCommandInput,
  DropdownCommandItem,
  DropdownPopover,
  DropdownPopoverContent,
  DropdownPopoverTrigger,
  HelperText,
  InputGroup,
  InputLeftElement,
  Label,
} from "../ui";
const DropDown = ({
  label,
  optional,
  selected,
  setSelected,
  placeholder,
  hint,
  noResults,
  options,
  hasServiceName,
  hasPersonal,
  hasServiceType,
  hasType,
  hasId,
  hasService,
  hasLastDateAndTime,
  badges,
  hasCountryCode,
  style,
}: any) => {
  return (
    <div>
      <Label className="flex items-center gap-x-2 text-gray-700" size="sm">
        {label ? label : "Dropdown"}

        {optional && <HelpCircle className="text-gray-400" />}
      </Label>

      {hint && (
        <HelperText className="mt-y-1.5" size="sm">
          {hint}
        </HelperText>
      )}

      <div className="mt-1.5">
        <DropdownPopover selected={selected} onSelectedChange={setSelected}>
          <DropdownPopoverTrigger>
            {selected ? (
              selected.serviceName
            ) : (
              <span className="text-gray-400">
                {placeholder ? placeholder : "Select a tag"}
              </span>
            )}
            <ChevronDown className="ml-auto h-5 w-5 text-gray-500" />
          </DropdownPopoverTrigger>
          <DropdownPopoverContent className="w-[--width]" style={{ ...style }}>
            <DropdownCommand className="overflow-hidden">
              <InputGroup>
                <InputLeftElement className="w-8">
                  <Search className="h-[15] w-[15] text-gray-500" />
                </InputLeftElement>
                <DropdownCommandInput
                  placeholder="Search..."
                  className="pl-8"
                />
              </InputGroup>

              <DropdownCommandEmpty className="text-sm text-gray-900">
                No results found.
              </DropdownCommandEmpty>
              <DropdownCommandGroup>
                {noResults ? (
                  <span className="flex justify-center py-3 text-center text-sm text-gray-900">
                    No results found
                  </span>
                ) : (
                  options.map((option: any) => (
                    <DropdownCommandItem key={option.id} itemValue={option}>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-x-1.5">
                          {hasServiceName && (
                            <span className="text-sm font-medium text-gray-700">
                              {option.serviceName}
                            </span>
                          )}

                          {hasPersonal && (
                            <>
                              <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-700" />
                              <span className="text-sm font-medium text-gray-700">
                                {option.personal}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-x-1.5">
                          {hasServiceType && (
                            <span className="text-sm text-gray-500">
                              {option.serviceType}
                            </span>
                          )}

                          {hasType && (
                            <>
                              <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-400" />
                              <span className="text-sm text-gray-500">
                                {option.type}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-x-1.5">
                          {hasId && (
                            <span className="text-sm text-gray-500">
                              {option.id}
                            </span>
                          )}

                          {hasService && (
                            <>
                              <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-400" />
                              <span className="text-sm text-gray-500">
                                {option.service}
                              </span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-x-1.5">
                          {hasLastDateAndTime && (
                            <span className="text-sm text-gray-500">
                              {option.lastDateAndTime}
                            </span>
                          )}

                          {hasCountryCode && (
                            <>
                              <span className="inline-flex h-1 w-1 flex-none rounded-full bg-gray-400" />
                              <span className="text-sm text-gray-500">
                                {option.countryCode}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <Check2 className="ml-auto text-primary-500 opacity-0 group-data-[state=selected]:opacity-100" />
                    </DropdownCommandItem>
                  ))
                )}
              </DropdownCommandGroup>
            </DropdownCommand>
          </DropdownPopoverContent>
        </DropdownPopover>
      </div>

      {badges && (
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((badge: any, index: any) => (
            <Badge
              className="gap-x-1 rounded-2xl px-1.5 py-1"
              size="lg"
              visual="primary"
              key={index}
            >
              {badge}
              <button
                className="flex-none focus-visible:outline-none"
                // onClick={() => remove(index)}
              >
                <X />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {badges && (
        <button
          className="mt-4 text-sm font-semibold text-primary-500"
          //   onClick={clear}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default DropDown;
