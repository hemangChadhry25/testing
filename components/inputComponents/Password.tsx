import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HelperText, Input, InputGroup, InputRightElement, Label } from "../ui";
import { Eye, EyeOff, HelpCircle } from "../icons";
import { useToggle } from "@/lib/hooks";
import { SAVE_TRIGGER_DATA } from "../../store/workflow/workflowTypes";

export const PasswordPreview = ({
  label,
  hint,
  optional,
  placeholder,
  event,
}: any) => {
  const id = React.useId();
  const [show, { toggle }] = useToggle();
  const dispatch = useDispatch();
  const { selectedTrigger } = useSelector((state: any) => state.workflow);
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    if (
      selectedTrigger.configurations &&
      selectedTrigger.configurations.inputs.hasOwnProperty(label)
    ) {
      setValue(selectedTrigger.configurations.inputs[label]);
    }
  }, []);
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-x-2">
        <Label className="text-gray-700" size="sm" htmlFor={id}>
          {label ? label : "Password"}
        </Label>
        {optional && <HelpCircle className="flex-none text-gray-400" />}
      </div>

      {hint && <HelperText size="sm">{hint}</HelperText>}

      <InputGroup>
        <Input
          placeholder={placeholder ? placeholder : "Enter text here"}
          type={show ? "text" : "password"}
          value={value}
          id={id}
          onChange={(e) => {
            setValue(e.target.value);
            dispatch({
              type: SAVE_TRIGGER_DATA,
              payload: {
                triggerId: selectedTrigger.id,
                eventId: event,
                label: label,
                value: e.target.value,
              },
            });
          }}
        />
        <InputRightElement>
          <button className="flex-none focus:outline-none" onClick={toggle}>
            {show ? (
              <EyeOff className="h-5 w-5 text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};
