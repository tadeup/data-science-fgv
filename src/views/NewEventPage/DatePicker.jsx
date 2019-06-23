import React, { Fragment, useState } from "react";
import MomentUtils from "@date-io/moment"; // choose your lib
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers';

function BasicDateTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePicker
          label="DateTimePicker"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
        />

        <DateTimePicker
          autoOk
          ampm={false}
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
          label="24h clock"
          showTodayButton
        />

        <DateTimePicker
          value={selectedDate}
          onChange={handleDateChange}
          label="With Today Button"
          showTodayButton
        />
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}

export default BasicDateTimePicker;