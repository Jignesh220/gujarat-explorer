import React, { FormEvent } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Stack,
  Button,
  Textarea,
} from "@mui/joy";
import { amber } from "@mui/material/colors";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";
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

const DocId = uuidv4();
interface FormState {
  locationName: string;
  cityCode: string;
  coverImage: File | null;
  ImageUrl: string;
  coverImageURL: string | null;
  Percent: number;
}
export default function AddCityInfo() {
  
  const firestore = getFirestore();
  const storage = getStorage();
  const [cityId, setcityId] = React.useState("");
  const [cityName, setcityName] = React.useState("");
  const [NextPage, setNextPage] = React.useState(true);
  const [loadingEvent, setloadingEvent] = React.useState(false);
  const [loadingEvent2, setloadingEvent2] = React.useState(false);
  const [compalateEvent, setcompalateEvent] = React.useState("Upload");
  const [compalateEvent2, setcompalateEvent2] = React.useState("Next");
  const [form, setForm] = React.useState<FormState>({
    locationName: "",
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

  const coverImageUpload = (cityName: string) => {
    if (form.coverImage && form.locationName && cityName !== "") {
      setloadingEvent(true);
      const adharcardupload = ref(storage, `cities/${cityName}/${DocId}/pagecover`);
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
            setcompalateEvent("Done!!");
          });
        }
      );
    } else {
      alert("select the file or write name first!!");
    }
  };

  const handleGetId = async (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `/Gujarat/Cities/Home`;
    const citiesImformation = collection(firestore, ref);
    const q = query(citiesImformation, where("cityCode", "==", form.cityCode));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setcityId(doc.id);
      setcityName(doc.data().cityName);
      coverImageUpload(doc.data().cityName);
    });
  };

  const handleUploadData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.ImageUrl !== "" && cityId !== "") {
      setloadingEvent2(true);
      const ref = `Gujarat/Cities/Citypage/${DocId}`;
      const citiesImformation = doc(firestore, ref);
      const mySnapshot = await getDoc(citiesImformation);
      if (!mySnapshot.exists()) {
        await setDoc(citiesImformation, {
          location: form.locationName,
          locationId: DocId,
          cityCode: form.cityCode,
          cityId: cityId,
          coverImageUrl: form.ImageUrl,
        }).then(() => {
          setloadingEvent2(false);
          setcompalateEvent2("Your Document is Uploaded,Thank You!!");
          setNextPage(true);
        });
      }
    } else {
      alert("first upload cover image!!");
    }
  };

  return (
    <div>
      {NextPage ? (
        <AddCityInfomation 
        city={cityName}
        cityid={cityId}
        />
      ) : (
        <center>
          <div className="my-8 text-center tracking-wider text-blue-600 font-bold text-4xl font-suezone">
            Add Location
          </div>
          <form
            className="mt-10 md:px-96 min-[0px]:px-8"
            onSubmit={handleUploadData}
          >
            <Stack direction="column" gap={2}>
              <FormControl>
                <FormLabel
                  sx={(theme) => ({
                    "--FormLabel-color": theme.vars.palette.primary.plainColor,
                  })}
                >
                  Loacation Name
                </FormLabel>
                <Input
                  sx={{ "--Input-decoratorChildHeight": "45px" }}
                  placeholder="location Name"
                  type="text"
                  name="cityname"
                  onChange={(e) => {
                    setForm({ ...form, locationName: e.target.value });
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
                  sx={{
                    "--Input-decoratorChildHeight": "45px",
                  }}
                  placeholder="example: GJ-1"
                  type="text"
                  name="city"
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
                  <Button variant="outlined" component="label" fullWidth>
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
                    onClick={handleGetId}
                  >
                    {loadingEvent ? (
                      <div className="font-bold font-outfit tracking-wider">
                        {form.Percent}
                      </div>
                    ) : (
                      <div className="font-bold font-outfit tracking-wider">
                        {compalateEvent}
                      </div>
                    )}
                  </LoadingButton>
                </Stack>

                <FormHelperText>
                  <div
                    className="text-xs font-bold font-outfit tracking-wider"
                    id="coverImage"
                  >
                    image size: 3840 &#215; 1962
                  </div>
                </FormHelperText>
              </FormControl>

              <Button
                type="submit"
                variant="solid"
                loading={loadingEvent2}
                fullWidth
                sx={{
                  marginTop: {
                    xs: form.coverImageURL || form.locationName ? 0 : 3,
                    md: 3,
                  },
                  textTransform: "none",
                }}
              >
                <div className="font-bold font-outfit tracking-wider">
                  {compalateEvent2}
                </div>
              </Button>
            </Stack>
          </form>
        </center>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="preview-dialog-title"
        aria-describedby="preview-dialog-description"
        maxWidth="lg"
        fullWidth
      >
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


interface FormState2 {
  locationName: string;
  coverImage: File | null;
  ImageUrl: string;
  coverImageURL: string | null;
  Percent: number;
}

interface AddCityInformationProps {
  city: string;
  cityid: string;
}
const AddCityInfomation:React.FC<AddCityInformationProps> = ({city,cityid}) =>{
  const [loadingEvent, setloadingEvent] = React.useState(false);
  const [loadingEvent2, setloadingEvent2] = React.useState(false);
  const [compalateEvent, setcompalateEvent] = React.useState("Upload");
  const [compalateEvent2, setcompalateEvent2] = React.useState("Next");
  const [form, setForm] = React.useState<FormState2>({
    locationName: "",
    coverImage: null,
    coverImageURL: null,
    ImageUrl: "",
    Percent: 0,
  });
  return(
    <center>
          <div className="my-8 text-center tracking-wider text-blue-600 font-bold text-4xl font-suezone">
            Add Location information
          </div>
          <form
            className="mt-10 md:px-96 min-[0px]:px-8"
          >
            <Stack direction="column" gap={2}>
              <FormControl>
                <FormLabel
                  sx={(theme) => ({
                    "--FormLabel-color": theme.vars.palette.primary.plainColor,
                  })}
                >
                  Loacation Name
                </FormLabel>
                <Input
                  sx={{ "--Input-decoratorChildHeight": "45px" }}
                  placeholder="location Name"
                  type="text"
                  name="cityname"
                  onChange={(e) => {
                    setForm({ ...form, locationName: e.target.value });
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
                  Brif Intro of location
                </FormLabel>
                <Textarea
                  minRows={12}
                  placeholder="Brif Intro of location"
                  name="Intro"
                  onChange={(e) => {
                    // setForm({ ...form, aboutCity: e.target.value });
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
                  Title of Main Paragraph 
                </FormLabel>
                <Input
                  sx={{
                    "--Input-decoratorChildHeight": "45px",
                  }}
                  placeholder="Title of Main Paragraph"
                  type="text"
                  name="maintitle"
                  onChange={(e) => {
                    // setForm({ ...form, cityCode: e.target.value });
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
                  Main Paragraph
                </FormLabel>
                <Textarea
                  minRows={12}
                  placeholder="Main Paragraph"
                  name="mainparagraph"
                  onChange={(e) => {
                    // setForm({ ...form, aboutCity: e.target.value });
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
                  Title of Sub Paragraph one
                </FormLabel>
                <Input
                  sx={{
                    "--Input-decoratorChildHeight": "45px",
                  }}
                  placeholder="Title of Sub Paragraph one"
                  type="text"
                  name="subtitleone"
                  onChange={(e) => {
                    // setForm({ ...form, cityCode: e.target.value });
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
                  Sub Paragraph one
                </FormLabel>
                <Textarea
                  minRows={12}
                  placeholder="Sub Paragraph"
                  name="subparagraphone"
                  onChange={(e) => {
                    // setForm({ ...form, aboutCity: e.target.value });
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
                  Title of Sub Paragraph two
                </FormLabel>
                <Input
                  sx={{
                    "--Input-decoratorChildHeight": "45px",
                  }}
                  placeholder="Title of Sub Paragraph two"
                  type="text"
                  name="subtitletwo"
                  onChange={(e) => {
                    // setForm({ ...form, cityCode: e.target.value });
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
                  Sub Paragraph two
                </FormLabel>
                <Textarea
                  minRows={12}
                  placeholder="Sub Paragraph two"
                  name="subparagraphtwo"
                  onChange={(e) => {
                    // setForm({ ...form, aboutCity: e.target.value });
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
                  <Button variant="outlined" component="label" fullWidth>
                    <div className="font-bold font-outfit tracking-wider">
                      {form.coverImage
                        ? form.coverImage.name
                        : "Select City Cover Image"}
                    </div>

                    <input
                      hidden
                      accept="image/*"
                      type="file"
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
                  >
                    {loadingEvent ? (
                      <div className="font-bold font-outfit tracking-wider">
                        {form.Percent}
                      </div>
                    ) : (
                      <div className="font-bold font-outfit tracking-wider">
                        {compalateEvent}
                      </div>
                    )}
                  </LoadingButton>
                </Stack>

                <FormHelperText>
                  <div
                    className="text-xs font-bold font-outfit tracking-wider"
                    id="coverImage"
                  >
                    image size: 3840 &#215; 1962
                  </div>
                </FormHelperText>
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
                  <Button variant="outlined" component="label" fullWidth>
                    <div className="font-bold font-outfit tracking-wider">
                      {form.coverImage
                        ? form.coverImage.name
                        : "Select City Cover Image"}
                    </div>

                    <input
                      hidden
                      accept="image/*"
                      type="file"
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
                  >
                    {loadingEvent ? (
                      <div className="font-bold font-outfit tracking-wider">
                        {form.Percent}
                      </div>
                    ) : (
                      <div className="font-bold font-outfit tracking-wider">
                        {compalateEvent}
                      </div>
                    )}
                  </LoadingButton>
                </Stack>

                <FormHelperText>
                  <div
                    className="text-xs font-bold font-outfit tracking-wider"
                    id="coverImage"
                  >
                    image size: 3840 &#215; 1962
                  </div>
                </FormHelperText>
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
                  <Button variant="outlined" component="label" fullWidth>
                    <div className="font-bold font-outfit tracking-wider">
                      {form.coverImage
                        ? form.coverImage.name
                        : "Select City Cover Image"}
                    </div>

                    <input
                      hidden
                      accept="image/*"
                      type="file"
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
                  >
                    {loadingEvent ? (
                      <div className="font-bold font-outfit tracking-wider">
                        {form.Percent}
                      </div>
                    ) : (
                      <div className="font-bold font-outfit tracking-wider">
                        {compalateEvent}
                      </div>
                    )}
                  </LoadingButton>
                </Stack>

                <FormHelperText>
                  <div
                    className="text-xs font-bold font-outfit tracking-wider"
                    id="coverImage"
                  >
                    image size: 3840 &#215; 1962
                  </div>
                </FormHelperText>
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
                  <Button variant="outlined" component="label" fullWidth>
                    <div className="font-bold font-outfit tracking-wider">
                      {form.coverImage
                        ? form.coverImage.name
                        : "Select City Cover Image"}
                    </div>

                    <input
                      hidden
                      accept="image/*"
                      type="file"
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
                  >
                    {loadingEvent ? (
                      <div className="font-bold font-outfit tracking-wider">
                        {form.Percent}
                      </div>
                    ) : (
                      <div className="font-bold font-outfit tracking-wider">
                        {compalateEvent}
                      </div>
                    )}
                  </LoadingButton>
                </Stack>

                <FormHelperText>
                  <div
                    className="text-xs font-bold font-outfit tracking-wider"
                    id="coverImage"
                  >
                    image size: 3840 &#215; 1962
                  </div>
                </FormHelperText>
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
                  <Button variant="outlined" component="label" fullWidth>
                    <div className="font-bold font-outfit tracking-wider">
                      {form.coverImage
                        ? form.coverImage.name
                        : "Select City Cover Image"}
                    </div>

                    <input
                      hidden
                      accept="image/*"
                      type="file"
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
                  >
                    {loadingEvent ? (
                      <div className="font-bold font-outfit tracking-wider">
                        {form.Percent}
                      </div>
                    ) : (
                      <div className="font-bold font-outfit tracking-wider">
                        {compalateEvent}
                      </div>
                    )}
                  </LoadingButton>
                </Stack>

                <FormHelperText>
                  <div
                    className="text-xs font-bold font-outfit tracking-wider"
                    id="coverImage"
                  >
                    image size: 3840 &#215; 1962
                  </div>
                </FormHelperText>
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
                  <Button variant="outlined" component="label" fullWidth>
                    <div className="font-bold font-outfit tracking-wider">
                      {form.coverImage
                        ? form.coverImage.name
                        : "Select City Cover Image"}
                    </div>

                    <input
                      hidden
                      accept="image/*"
                      type="file"
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
                  >
                    {loadingEvent ? (
                      <div className="font-bold font-outfit tracking-wider">
                        {form.Percent}
                      </div>
                    ) : (
                      <div className="font-bold font-outfit tracking-wider">
                        {compalateEvent}
                      </div>
                    )}
                  </LoadingButton>
                </Stack>

                <FormHelperText>
                  <div
                    className="text-xs font-bold font-outfit tracking-wider"
                    id="coverImage"
                  >
                    image size: 3840 &#215; 1962
                  </div>
                </FormHelperText>
              </FormControl>

              <Button
                type="submit"
                variant="solid"
                loading={loadingEvent2}
                fullWidth
                sx={{
                  marginTop: {
                    xs: form.coverImageURL || form.locationName ? 0 : 3,
                    md: 3,
                  },
                  textTransform: "none",
                }}
              >
                <div className="font-bold font-outfit tracking-wider">
                  {compalateEvent2}
                </div>
              </Button>
            </Stack>
          </form>
        </center>
  )
}