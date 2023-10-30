import * as React from "react";
import { SAVE_TRIGGER_DATA } from "../../store/workflow/workflowTypes";
import { HelperText, Input, InputGroup, Label } from "../ui";
import { HelpCircle } from "../icons";
import { useDispatch, useSelector } from "react-redux";

export const NumbersPreview = ({
  label,
  hint,
  optional,
  placeholder,
  event,
}: any) => {
  const id = React.useId();
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
          {label ? label : "Numbers"}
        </Label>
        {optional && <HelpCircle className="flex-none text-gray-400" />}
      </div>

      {hint && <HelperText size="sm">{hint}</HelperText>}

      <InputGroup>
        <Input
          value={value}
          placeholder={placeholder ? placeholder : "Enter quantity here"}
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
      </InputGroup>
    </div>
  );
};
export default NumbersPreview;
