import { EuiFieldText, EuiFormRow } from "@elastic/eui";
import React from "react";
import ThemeSelector from "../ThemeSelector";

function MeetingNameField({
  label,
  isInvalid,
  error,
  placeholder,
  value,
  setMeetingName,
}: {
  label: string;
  isInvalid: boolean;
  error: Array<string>;
  placeholder: string;
  value: string;
  setMeetingName: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <ThemeSelector>
      <EuiFormRow label={label} isInvalid={isInvalid} error={error}>
        <EuiFieldText
          placeholder={placeholder}
          value={value}
          onChange={(e) => setMeetingName(e.target.value)}
          isInvalid={isInvalid}
        />
      </EuiFormRow>
    </ThemeSelector>
  );
}

export default MeetingNameField;
