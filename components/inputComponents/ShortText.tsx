import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HelperText, Input, Label } from "../ui";
import { HelpCircle } from "../icons";
import { saveTriggerData } from "../../store";
import { SAVE_TRIGGER_DATA } from "../../store/workflow/workflowTypes";
export const ShortTextPreview = (props: any) => {
  const { label, hint, optional, placeholder, event } = props;
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
          {label ? label : "Short Text"}
        </Label>
        {optional && <HelpCircle className="flex-none text-gray-400" />}
      </div>

      {hint && <HelperText size="sm">{hint}</HelperText>}

      <Input
        placeholder={placeholder ? placeholder : "Enter text here"}
        id={id}
        value={value}
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
    </div>
  );
};
export default ShortTextPreview;
