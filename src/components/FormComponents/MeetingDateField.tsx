import { EuiDatePicker, EuiFormRow } from "@elastic/eui";
import moment from "moment";
import React from "react";

function MeetingDateField({
  selected,
  setStartDate,
}: {
  selected: moment.Moment;
  setStartDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
}) {
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
