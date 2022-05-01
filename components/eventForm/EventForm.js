import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { addEvent } from "../../helpers/eventsDB";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import styles from "./EventForm.module.css";

function EventForm() {
  const defaultValues = {
    title: "",
    eventType: "",
    date: "",
    venue: "",
    description: "",
    details: "",
    images: "",
    link: "",
    scheduleType: "",
  };
  const { formState, getValues, watch, control, register, handleSubmit } =
    useForm({
      defaultValues,
    });
  const { errors } = formState;

  const [data, setData] = useState();
  console.log(data);

  const createEvent = async (data) => {
    console.log("running");
    await addEvent({
      title: data.title,
      eventType: data.eventType,
      date: data.date,
      venue: data.venue,
      description: data.description,
      details: data.details,
      images: data.images,
      link: data.link,
      scheduleType: data.scheduleType,
    });
  };

  const onSubmit = (data) => {
    setData(data);
    // createEvent(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              render={({ field }) => (
                <TextField
                  sx={{ width: "100%" }}
                  {...field}
                  variant="filled"
                  label="Title"
                  type="text"
                  inputProps={register("title", {
                    required: "Please enter user title",
                  })}
                  error={errors.title}
                  helperText={errors.title?.message}
                />
              )}
              name="title"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              render={({ field }) => (
                <TextField
                  sx={{ width: "100%" }}
                  {...field}
                  variant="filled"
                  label="Venue"
                  inputProps={register("venue", {
                    required: "Please enter venue",
                  })}
                  error={errors.venue}
                  helperText={errors.venue?.message}
                />
              )}
              name="venue"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              render={({ field }) => (
                <TextField
                  sx={{ width: "100%" }}
                  {...field}
                  variant="filled"
                  label="Description"
                  inputProps={register("description", {
                    required: "Please enter description",
                  })}
                  error={errors.description}
                  helperText={errors.description?.message}
                />
              )}
              name="description"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              render={({ field }) => (
                <TextField
                  sx={{ width: "100%" }}
                  {...field}
                  variant="filled"
                  label="Registration Link"
                  inputProps={register("link", {
                    required: "Please enter link",
                  })}
                  error={errors.link}
                  helperText={errors.link?.message}
                />
              )}
              name="link"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              render={({ field }) => (
                <TextField
                  sx={{ width: "100%" }}
                  {...field}
                  variant="filled"
                  label="Details"
                  inputProps={register("details", {
                    required: "Please enter details",
                  })}
                  error={errors.details}
                  helperText={errors.details?.message}
                />
              )}
              name="details"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Schedule Type"
              variant="filled"
              defaultValue=""
              inputProps={register("scheduleType", {
                required: "Please enter schedule type",
              })}
              error={errors.scheduleType}
              helperText={errors.scheduleType?.message}
            >
              <MenuItem value="schedule">Schedule</MenuItem>
              <MenuItem value="draft">Draft</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Event Type"
              variant="filled"
              defaultValue=""
              inputProps={register("eventType", {
                required: "Please enter event type",
              })}
              error={errors.eventType}
              helperText={errors.eventType?.message}
            >
              <MenuItem value="workshop">Workshop</MenuItem>
              <MenuItem value="seminar">Seminar</MenuItem>
              <MenuItem value="quiz">Quiz</MenuItem>
              <MenuItem value="competition">Competition</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="date"
                control={control}
                render={({
                  field: { onChange, value },
                }) => (
                  <DateTimePicker
                    label="Date and Time"
                    value={value}
                    onChange={
                      (value) => 
                      onChange(value)
                    }
                    renderInput={(params) => (
                      // console.log(invalid),
                      (
                        <TextField
                          variant="filled"
                          label="Date"
                          inputProps={register("date", {
                            required: "Please enter date",
                          })}
                          error={errors.date}
                          helperText={errors.date?.message}
                          {...params}
                          fullWidth
                        />
                      )
                    )}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Button variant="contained" type="submit">
          Create Event
        </Button>
      </div>
    </form>
  );
}

export default EventForm;
