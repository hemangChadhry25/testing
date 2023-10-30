import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui";
import { HelpCircle } from "../icons";
import { SAVE_TRIGGER_DATA } from "../../store/workflow/workflowTypes";

export const WebsitePreview = (props: any) => {
  const { label, hint, tooltip, event } = props;
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
          {label ? label : "Website"}
        </Label>

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

      {hint && <HelperText size="sm">{hint}</HelperText>}

      <InputGroup>
        <InputLeftAddon>http://</InputLeftAddon>
        <Input
          placeholder="www.untitledui.com"
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
      </InputGroup>
    </div>
  );
};

export default WebsitePreview;
