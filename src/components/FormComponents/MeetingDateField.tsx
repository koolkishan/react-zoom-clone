import { EuiDatePicker, EuiFormRow } from "@elastic/eui";
import React from "react";

function MeetingDateField({ selected, setStartDate }: any) {
  return (
    <EuiFormRow label="Set Meeting Date">
      <EuiDatePicker
        selected={selected}
        onChange={(date) => setStartDate(date!)}
      />
    </EuiFormRow>
  );
}

export default MeetingDateField;
