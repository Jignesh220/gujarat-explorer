import React, { FormEvent } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Stack,
} from "@mui/joy";
import { Button } from "@mui/material";
import { amber } from "@mui/material/colors";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import { uuidv4 } from "@firebase/util";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { db } from "@/Firebase/Firebase";
import { LoadingButton } from "@mui/lab";

interface FormState {
  cityName: string;
  state: string;
  cityCode: string;
  coverImage: File | null;
  ImageUrl: string;
  coverImageURL: string | null;
  Percent: number;
}
export default function AddCity() {
  const firestore = getFirestore();
  const storage = getStorage();
  const [loadingEvent, setloadingEvent] = React.useState(false);
  const [loadingEvent2, setloadingEvent2] = React.useState(false);
  const [compalateEvent, setcompalateEvent] = React.useState('Upload')
  const [compalateEvent2, setcompalateEvent2] = React.useState('submit')
  const [form, setForm] = React.useState<FormState>({
    cityName: "",
    state: "",
    cityCode: "",
    coverImage: null,
    coverImageURL: null,
    ImageUrl: "",
    Percent: 0,
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    const imageURL = file ? URL.createObjectURL(file) : null;

    setForm({
      ...form,
      coverImage: file,
      coverImageURL: imageURL,
    });
  };

  const coverImageUpload = () => {
    if (form.coverImage && form.cityName) {
      setloadingEvent(true);
      const adharcardupload = ref(storage, `cities/${form.cityName}/cover`);
      const uploadTask = uploadBytesResumable(adharcardupload, form.coverImage);
      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setForm({ ...form, Percent: percent });
          
        },
        (err: Error) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setForm({ ...form, ImageUrl: url });
            setloadingEvent(false);
            setcompalateEvent('Done!!')
          });
        }
      );
    } else {
      alert("select the file or write name first!!");
    }
  };

  const handleUploadData = async (e: React.FormEvent) => {
    e.preventDefault();
    const DocId = uuidv4();
    setloadingEvent2(true)
    const ref = `india/${form.state}/cities/${DocId}`;
    const citiesImformation = doc(firestore, ref);
    const mySnapshot = await getDoc(citiesImformation);
    if (!mySnapshot.exists()) {
      await setDoc(citiesImformation, {
        cityName: form.cityName,
        state: form.state,
        cityCode: form.cityCode,
        coverImageUrl: form.ImageUrl,
      }).then(()=>{
        setloadingEvent2(false);
        setcompalateEvent2('Your Document is Uploaded,Thank You!!')
      })
    }
  };

  const Preview = () => {
    return (
      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        className="mt-16 min-w-full relative md:rounded-3xl min-[0px]:rounded-xl shadow-xl shadow-slate-500"
      >
        {form.coverImageURL && (
          <div
            className="min-h-full min-w-full absolute md:rounded-3xl min-[0px]:rounded-xl"
            style={{
              backdropFilter: "blur(1px)",
              backgroundColor: "#0000007a",
            }}
          />
        )}

        <motion.div
          whileHover={{
            opacity: 1,
            color: amber[500],
          }}
          transition={{
            duration: 0.4,
            ease: "easeIn",
          }}
          style={{
            color: form.coverImageURL ? "#fff" : "#000",
          }}
          className="lg:text-5xl md:text-4xl min-[0px]:text-xl text-opacity-60 font-suezone min-h-full min-w-full absolute rounded-3xl center-v-h font-bold tracking-wider"
        >
          {form.cityName}
        </motion.div>
        {form.coverImageURL && (
          <Image
            src={form.coverImageURL}
            alt="Ahmedabad_cover"
            width={1000}
            height={1000}
            className="md:rounded-3xl min-[0px]:rounded-xl bg-transparent"
          />
        )}
      </motion.div>
    );
  };
  return (
    <div>
      <Grid
        container
        gap={{ xs: 2, md: 3 }}
        columns={{ xs: 12, md: 12 }}
        sx={{ flexGrow: 1 }}
      >
        <Grid xs={12} md={6}>
          <div className=" my-8 text-center tracking-wider text-blue-600 font-bold text-4xl font-suezone">
            Add City
          </div>
          <form
            className="mt-10 md:px-36 min-[0px]:px-8"
            onSubmit={handleUploadData}
          >
            <Stack direction="column" gap={2}>
              <FormControl>
                <FormLabel
                  sx={(theme) => ({
                    "--FormLabel-color": theme.vars.palette.primary.plainColor,
                  })}
                >
                  City Name
                </FormLabel>
                <Input
                  sx={{ "--Input-decoratorChildHeight": "45px" }}
                  placeholder="mail@gmai.com"
                  type="text"
                  name="cityname"
                  onChange={(e) => {
                    setForm({ ...form, cityName: e.target.value });
                  }}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  sx={(theme) => ({
                    "--FormLabel-color": theme.vars.palette.primary.plainColor,
                  })}
                >
                  State
                </FormLabel>
                <Input
                  sx={{ "--Input-decoratorChildHeight": "45px" }}
                  placeholder="State"
                  type="text"
                  name="state"
                  onChange={(e) => {
                    setForm({ ...form, state: e.target.value });
                  }}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  sx={(theme) => ({
                    "--FormLabel-color": theme.vars.palette.primary.plainColor,
                  })}
                >
                  City Code
                </FormLabel>
                <Input
                  sx={{ "--Input-decoratorChildHeight": "45px" }}
                  placeholder="Exmaple: GJ-xx"
                  type="text"
                  name="citycode"
                  onChange={(e) => {
                    setForm({ ...form, cityCode: e.target.value });
                  }}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  sx={(theme) => ({
                    "--FormLabel-color": theme.vars.palette.primary.plainColor,
                  })}
                >
                  Upload City Cover Image
                </FormLabel>
                <Stack direction="row" gap={1}>
                  <Button
                    variant="outlined"
                    component="label"
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                    }}
                  >
                    <div className="font-bold font-outfit tracking-wider">
                      {form.coverImage
                        ? form.coverImage.name
                        : "Select City Cover Image"}
                    </div>

                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={handleFileChange}
                      required
                    />
                  </Button>
                  <LoadingButton
                    variant="contained"
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                    }}
                    loading={loadingEvent}
                    endIcon={<DriveFolderUploadRoundedIcon />}
                    loadingPosition="end"
                    onClick={coverImageUpload}
                  >
                    {loadingEvent ? (
                      <div className="font-bold font-outfit tracking-wider">
                        {form.Percent}
                      </div>
                    ) : (
                      <div className="font-bold font-outfit tracking-wider">
                        {
                          compalateEvent
                        }
                      </div>
                    )}
                  </LoadingButton>
                </Stack>

                <FormHelperText>
                  <div
                    className="text-xs font-bold font-outfit tracking-wider"
                    id="coverImage"
                  >
                    image size: 1080 &#215; 646
                  </div>
                </FormHelperText>
              </FormControl>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: 2,
                  marginTop: 3,
                  textTransform: "none",
                  display: {
                    xs: form.coverImageURL || form.cityName ? "block" : "none",
                    md: "none",
                  },
                }}
                onClick={handleClickOpen}
              >
                <div className="font-bold font-outfit tracking-wider">
                  Perview
                </div>
              </Button>

              <LoadingButton
                type="submit"
                variant="contained"
                loading={loadingEvent2}
                startIcon={<UploadFileRoundedIcon />}
                loadingPosition="start"
                fullWidth
                sx={{
                  borderRadius: 2,
                  marginTop: {
                    xs: form.coverImageURL || form.cityName ? 0 : 3,
                    md: 3,
                  },
                  textTransform: "none",
                }}
              >
                <div className="font-bold font-outfit tracking-wider">
                  {
                    compalateEvent2
                  }
                </div>
              </LoadingButton>
            </Stack>
          </form>
        </Grid>
        <Grid xs={0} md={5}>
          <Preview />
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="preview-dialog-title"
        aria-describedby="preview-dialog-description"
        maxWidth="lg"
        fullWidth
      >
        <Preview />
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
