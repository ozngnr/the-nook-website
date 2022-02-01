import React, { useState } from "react"
import { DatePicker, TimePicker } from "@mui/lab"
import { TextField, MenuItem, Stack } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from "yup"

const BASE_URL =
  "https://www.opentable.com/restref/client/?rid=215409&restref=215409"

const validationSchema = Yup.object().shape({
  partySize: Yup.string().required(),
  date: Yup.date()
    .nullable()
    .required("Date is required.")
    .typeError("Invalid date"),
  time: Yup.date()
    .nullable()
    .required("Time is required")
    .typeError("Invalid time"),
})

export default function BookingForm() {
  //style
  const errorTextStyle = {
    fontSize: "0.75rem",
    margin: "0",
    marginBottom: "-1.125em",
    color: "red",
  }
  //functions
  const addZero = num => {
    if (num < 10) {
      num = "0" + num
    }
    return num
  }
  //format date and time as url parameter
  const getDateTime = (date, time) => {
    const yyyy = addZero(date.getFullYear())
    const mm = addZero(date.getMonth() + 1)
    const dd = addZero(date.getDate())
    const hh = addZero(time.getHours())
    const min = addZero(time.getMinutes())

    return `${yyyy}-${mm}-${dd}T${hh}%3A${min}`
  }

  return (
    <Formik
      initialValues={{
        partySize: "2",
        date: null,
        time: null,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        const dateTime = getDateTime(values.date, values.time)
        window.open(
          `${BASE_URL}&partysize=${values.partySize}&datetime=${dateTime}`
        )
      }}
    >
      {({ errors, touched, values, setFieldValue, handleChange }) => (
        <Form>
          <Stack spacing={2}>
            <TextField
              select
              id="partySize"
              name="partySize"
              label="Party Size"
              value={values.partySize}
              onChange={handleChange}
            >
              <MenuItem value={"1"}>1 Person</MenuItem>
              <MenuItem value={"2"}>2 People</MenuItem>
              <MenuItem value={"3"}>3 People</MenuItem>
              <MenuItem value={"4"}>4 People</MenuItem>
              <MenuItem value={"5"}>5 People</MenuItem>
              <MenuItem value={"6"}>6 People</MenuItem>
            </TextField>
            {errors.partySize && touched.partySize ? (
              <div style={errorTextStyle}>{errors.partySize}</div>
            ) : null}
            <DatePicker
              disablePast
              id="date"
              name="date"
              label="Date"
              value={values.date}
              onChange={value => setFieldValue("date", value)}
              renderInput={params => (
                <TextField autoComplete="off" {...params} />
              )}
            />
            {errors.date && touched.date ? (
              <div style={errorTextStyle}>{errors.date}</div>
            ) : null}
            <TimePicker
              id="time"
              name="time"
              label="Time"
              value={values.time}
              onChange={value => setFieldValue("time", value)}
              renderInput={params => (
                <TextField autoComplete="off" {...params} />
              )}
            />
            {errors.time && touched.time ? (
              <div style={errorTextStyle}>{errors.time}</div>
            ) : null}
            <button type="submit" className="btn">
              RESERVE
            </button>
          </Stack>
        </Form>
      )}
    </Formik>
  )
}
