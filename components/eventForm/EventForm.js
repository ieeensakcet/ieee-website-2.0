import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  TextField,
  ListItemIcon,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { addEvent, updateEvent } from "../../helpers/eventsDB";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import styles from "./EventForm.module.css";
import Dropzone from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { storage } from "../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import LinearProgressWithLabel from "../progressBar/ProgressBar";
import Image from "next/image";

function EventForm(props) {
  const formData = props?.form;
  const isAddMode = !formData;

  const defaultValues = {
    title: "",
    eventType: "",
    date: "",
    venue: "",
    description: "",
    details: "",
    images: [],
    link: "",
    scheduleType: "",
  };

  const [progress, setProgress] = useState(0);
  const [scheduleType, setScheduleType] = useState("");
  const [eventType, setEventType] = useState("");

  const { formState, control, register, handleSubmit, reset } = useForm({
    defaultValues,
    mode: "onBlur",
  });
  const { errors } = formState;

  useEffect(() => {
    if (props?.form) {
      reset(props.form);
      setScheduleType(props.form.scheduleType);
      setEventType(props.form.eventType);
    }
  }, [reset, props]);

  const eventChange = (e) => {
    setEventType(e.target.value);
  };
  const scheduleChange = (e) => {
    setScheduleType(e.target.value);
  };

  const uploadFilesData = async (data) => {
    const promises = [];

    for (var i = 0; i < data.images.length; i++) {
      // files.values contains all the files objects
      const file = data.images[i];
      // const storage = getStorage();
      const metadata = {
        contentType: "image/jpeg",
      };
      const storageRef = ref(storage, "temp/" + file.name);

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      promises.push(
        uploadTask.then((uploadResult) => {
          return getDownloadURL(uploadResult.ref);
        })
      );
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => console.log(error)
      );
    }

    const photos = await Promise.all(promises);
    await console.log(photos);
    await addEvent({
      title: data.title,
      eventType: data.eventType,
      date: data.date,
      venue: data.venue,
      description: data.description,
      details: data.details,
      images: photos,
      link: data.link,
      scheduleType: data.scheduleType,
    });
    alert("successfully added event");
    reset(defaultValues);
    setScheduleType("");
    setEventType("");
  };

  const updateFilesData = async (id, data) => {
    const date = new Date(data.date.seconds * 1000)
    await updateEvent(id, {
      title: data.title,
      eventType: data.eventType,
      date: date,
      venue: data.venue,
      description: data.description,
      details: data.details,
      // images: photos,
      link: data.link,
      scheduleType: data.scheduleType,
    });
    alert("Successfully Updated Event");
    reset(defaultValues);
    setScheduleType("");
    setEventType("");
  };

  const [data, setData] = useState();

  const onSubmit = async (data) => {
    setData(data);
    return isAddMode
      ? await uploadFilesData(data)
      : await updateFilesData(props.id, data);
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
                  error={!!errors.title}
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
                  error={!!errors.venue}
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
                  error={!!errors.description}
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
                  error={!!errors.link}
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
                  error={!!errors.details}
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
              onChange={scheduleChange}
              value={scheduleType ?? ""}
              inputProps={register("scheduleType", {
                required: "Please enter schedule type",
              })}
              error={!!errors.scheduleType}
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
              onChange={eventChange}
              value={eventType ?? ""}
              inputProps={register("eventType", {
                required: "Please enter event type",
              })}
              error={!!errors.eventType}
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
                render={({ field: { onChange, value } }) => (
                  <DateTimePicker
                    label="Date and Time"
                    value={props?.form?.date.toDate() ?? value}
                    onChange={(value) => onChange(value)}
                    renderInput={(params) => (
                      // console.log(invalid),
                      <TextField
                        variant="filled"
                        label="Date"
                        inputProps={register("date", {
                          required: "Please enter date",
                        })}
                        error={!!errors.date}
                        helperText={errors.date?.message}
                        {...params}
                        fullWidth
                      />
                    )}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name="images"
              defaultValue={[]}
              render={({ field: { onChange, value, onBlur } }) => (
                <>
                  <Dropzone onDrop={onChange}>
                    {({ getRootProps, getInputProps }) => (
                      <Paper
                        variant="outlined"
                        className={styles.root}
                        {...getRootProps()}
                      >
                        <CloudUploadIcon />
                        <input
                          {...getInputProps()}
                          name="images"
                          onBlur={onBlur}
                        />
                        <p>Drag n drop files here, or click to select files</p>
                      </Paper>
                    )}
                  </Dropzone>
                  <List>
                    {props?.form
                      ? ""
                      : value?.map((f, index) => (
                          <ListItem key={index}>
                            <ListItemIcon>
                              <InsertDriveFileIcon />
                            </ListItemIcon>
                            <ListItemText primary={f.name} secondary={f.size} />
                            <Image
                              src={URL.createObjectURL(f)}
                              alt="Images to be uploaded"
                              width={200}
                              height={100}
                            />
                          </ListItem>
                        ))}
                  </List>
                </>
              )}
            />
          </Grid>
        </Grid>
        <LinearProgressWithLabel value={progress} />
        <Button variant="contained" type="submit">
          {props?.form ? "Update Event" : "Create Event"}
          {/* Create Event */}
        </Button>
      </div>
    </form>
  );
}

export default EventForm;
