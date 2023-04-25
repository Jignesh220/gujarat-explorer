import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Button,
  Textarea,
} from "@mui/joy";
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
import { uuidv4 } from "@firebase/util";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { LoadingButton } from "@mui/lab";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Typography from "@mui/joy/Typography";
import { motion } from "framer-motion";

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
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <center>
        <Tabs
          aria-label="Pipeline"
          value={index}
          onChange={(event, value) => setIndex(value as number)}
          sx={{ "--Tabs-gap": "0px" }}
        >
          <TabList
            variant="plain"
            sx={{
              width: "100%",
              maxWidth: 400,
              mx: "auto",
              pt: 2,
              alignSelf: "flex-start",
              [`& .${tabClasses.root}`]: {
                bgcolor: "transparent",
                fontWeight: "md",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "transparent",
                },
                [`&.${tabClasses.selected}`]: {
                  color: "primary.plainColor",
                  fontWeight: "lg",
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    zIndex: 1,
                    bottom: "-1px",
                    left: "var(--ListItem-paddingLeft)",
                    right: "var(--ListItem-paddingRight)",
                    height: "3px",
                    borderTopLeftRadius: "3px",
                    borderTopRightRadius: "3px",
                    bgcolor: "primary.500",
                  },
                },
              },
            }}
          >
            <Tab>Add Location</Tab>
            <Tab>Add Location Data</Tab>
          </TabList>
          <TabPanel value={0}>
            <Typography
              level="h2"
              component="div"
              fontSize="lg"
              mb={2}
              textColor="text.primary"
            >
              <AddLocation />
            </Typography>
          </TabPanel>
          <TabPanel value={1}>
            <Typography
              level="h2"
              component="div"
              fontSize="lg"
              mb={2}
              textColor="text.primary"
            >
              <AddCityInfomation />
            </Typography>
          </TabPanel>
        </Tabs>
      </center>

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

const AddLocation = () => {
  const firestore = getFirestore();
  const storage = getStorage();
  const [cityId, setcityId] = React.useState("");
  const [cityName, setcityName] = React.useState("");
  const [NextPage, setNextPage] = React.useState(false);
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
      const adharcardupload = ref(
        storage,
        `cities/${cityName}/${DocId}/pagecover`
      );
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
    <motion.div
      initial={{
        x: 80,
      }}
      animate={{
        x: 0,
      }}
    >
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
    </motion.div>
  );
};

interface FormState2 {
  locationName: string;
  intro: string;
  mainTitle: string;
  mainPara: string;
  subTitle: string;
  subPara: string;
  subTitle2: string;
  subpapra2: string;
  cityCode: string;
}

interface ImageInformationProps {
  mImage: File | null;
  ImageUrl: string;
  mImageURL: string | null;
  Percent: number;
}
const AddCityInfomation = () => {
  const firestore = getFirestore();
  const storage = getStorage();
  const [city, setcity] = React.useState("");
  const [cityid, setcityid] = React.useState("");
  const [locationId, setLocationId] = React.useState("");
  const [loadingEvent, setloadingEvent] = React.useState(false);
  const [loadingEvent2, setloadingEvent2] = React.useState(false);
  const [imageUploadEvent, setImageUploadEvent] = React.useState({
    uploadImages: false,
    sendData: false,
  });
  const [image1, setimage1] = React.useState<ImageInformationProps>({
    mImage: null,
    mImageURL: null,
    ImageUrl: "",
    Percent: 0,
  });
  const [image2, setimage2] = React.useState<ImageInformationProps>({
    mImage: null,
    mImageURL: null,
    ImageUrl: "",
    Percent: 0,
  });
  const [image3, setimage3] = React.useState<ImageInformationProps>({
    mImage: null,
    mImageURL: null,
    ImageUrl: "",
    Percent: 0,
  });
  const [image4, setimage4] = React.useState<ImageInformationProps>({
    mImage: null,
    mImageURL: null,
    ImageUrl: "",
    Percent: 0,
  });
  const [image5, setimage5] = React.useState<ImageInformationProps>({
    mImage: null,
    mImageURL: null,
    ImageUrl: "",
    Percent: 0,
  });
  const [image6, setimage6] = React.useState<ImageInformationProps>({
    mImage: null,
    mImageURL: null,
    ImageUrl: "",
    Percent: 0,
  });
  const [form, setForm] = React.useState<FormState2>({
    locationName: "",
    intro: "",
    mainTitle: "",
    mainPara: "",
    subTitle: "",
    subPara: "",
    subTitle2: "",
    subpapra2: "",
    cityCode: "",
  });

  React.useEffect(() => {
    if (form.cityCode !== "") {
      handleGetId();
    }
  }, [form.cityCode]);
  React.useEffect(() => {
    if (form.locationName !== "") {
      handleGetLocationId();
    }
  }, [form.locationName]);

  const handleGetId = async () => {
    const ref = `/Gujarat/Cities/Home`;
    const citiesImformation = collection(firestore, ref);
    const q = query(citiesImformation, where("cityCode", "==", form.cityCode));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setcityid(doc.id);
      setcity(doc.data().cityName);
    });
  };

  const handleGetLocationId = async () => {
    const ref = `/Gujarat/Cities/Citypage`;
    const locationImformation = collection(firestore, ref);
    const q = query(
      locationImformation,
      where("location", "==", form.locationName)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setLocationId(doc.id);
    });
  };

  const handleImageChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    const imageURL = file ? URL.createObjectURL(file) : null;

    setimage1({
      ...image1,
      mImage: file,
      mImageURL: imageURL,
    });
  };
  const handleImageChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    const imageURL = file ? URL.createObjectURL(file) : null;

    setimage2({
      ...image2,
      mImage: file,
      mImageURL: imageURL,
    });
  };
  const handleImageChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    const imageURL = file ? URL.createObjectURL(file) : null;

    setimage3({
      ...image3,
      mImage: file,
      mImageURL: imageURL,
    });
  };
  const handleImageChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    const imageURL = file ? URL.createObjectURL(file) : null;

    setimage4({
      ...image4,
      mImage: file,
      mImageURL: imageURL,
    });
  };
  const handleImageChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    const imageURL = file ? URL.createObjectURL(file) : null;

    setimage5({
      ...image5,
      mImage: file,
      mImageURL: imageURL,
    });
  };
  const handleImageChange6 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    const imageURL = file ? URL.createObjectURL(file) : null;

    setimage6({
      ...image6,
      mImage: file,
      mImageURL: imageURL,
    });
  };

  const handleUpload = () => {
    if (
      image1.mImage !== null &&
      image2.mImage !== null &&
      image3.mImage !== null &&
      image4.mImage !== null &&
      image5.mImage !== null &&
      image6.mImage !== null
    ) {
      setloadingEvent(true);
      coverImageUpload1();
      coverImageUpload2();
      coverImageUpload3();
      coverImageUpload4();
      coverImageUpload5();
      coverImageUpload6();
    } else {
      console.log("image not uploaded!!");
    }
  };

  const coverImageUpload1 = () => {
    if (image1.mImage) {
      const imageupload = ref(storage, `cities/${city}/${DocId}/1`);
      const uploadTask = uploadBytesResumable(imageupload, image1.mImage);
      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setimage1({ ...image1, Percent: percent });
        },
        (err: Error) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setimage1({ ...image1, ImageUrl: url });
          });
        }
      );
    }
  };
  const coverImageUpload2 = () => {
    if (image2.mImage) {
      const imageupload = ref(storage, `cities/${city}/${DocId}/2`);
      const uploadTask = uploadBytesResumable(imageupload, image2.mImage);
      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setimage2({ ...image2, Percent: percent });
        },
        (err: Error) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setimage2({ ...image2, ImageUrl: url });
          });
        }
      );
    }
  };
  const coverImageUpload3 = () => {
    if (image3.mImage) {
      const imageupload = ref(storage, `cities/${city}/${DocId}/3`);
      const uploadTask = uploadBytesResumable(imageupload, image3.mImage);
      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setimage3({ ...image3, Percent: percent });
        },
        (err: Error) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setimage3({ ...image3, ImageUrl: url });
          });
        }
      );
    }
  };
  const coverImageUpload4 = () => {
    if (image4.mImage) {
      const imageupload = ref(storage, `cities/${city}/${DocId}/4`);
      const uploadTask = uploadBytesResumable(imageupload, image4.mImage);
      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setimage4({ ...image4, Percent: percent });
        },
        (err: Error) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setimage4({ ...image4, ImageUrl: url });
          });
        }
      );
    }
  };
  const coverImageUpload5 = () => {
    if (image5.mImage) {
      const imageupload = ref(storage, `cities/${city}/${DocId}/5`);
      const uploadTask = uploadBytesResumable(imageupload, image5.mImage);
      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setimage5({ ...image5, Percent: percent });
        },
        (err: Error) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setimage5({ ...image5, ImageUrl: url });
          });
        }
      );
    }
  };
  const coverImageUpload6 = () => {
    if (image6.mImage) {
      const imageupload = ref(storage, `cities/${city}/${DocId}/6`);
      const uploadTask = uploadBytesResumable(imageupload, image6.mImage);
      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setimage6({ ...image6, Percent: percent });
        },
        (err: Error) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setimage6({ ...image6, ImageUrl: url });
            setloadingEvent(false);
            setImageUploadEvent({ ...imageUploadEvent, uploadImages: true });
          });
        }
      );
    }
  };

  const handleUploadData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (image1.ImageUrl !== "" && cityid !== "" && locationId !== "") {
      setloadingEvent2(true);
      const LocationId = uuidv4();
      const ref = `Gujarat/Cities/locationData/${LocationId}`;
      const citiesImformation = doc(firestore, ref);
      const mySnapshot = await getDoc(citiesImformation);
      if (!mySnapshot.exists()) {
        await setDoc(citiesImformation, {
          locationName: form.locationName,
          locationId: locationId,
          locationDataId: LocationId,
          city: city,
          cityId: cityid,
          IntroCity: form.intro,
          mainTitle: form.mainTitle,
          mainpara: form.mainPara,
          subTitle: form.subTitle,
          subPara: form.subPara,
          subTitle2: form.subTitle2,
          saubpara2: form.subpapra2,
          image1: image1.ImageUrl,
          image2: image2.ImageUrl,
          image3: image3.ImageUrl,
          image4: image4.ImageUrl,
          image5: image5.ImageUrl,
          image6: image6.ImageUrl,
        }).then(() => {
          setImageUploadEvent({ ...imageUploadEvent, sendData: true });
          setloadingEvent2(false);
        });
      }
    } else {
      alert("please fill form perfactly!!");
    }
  };
  return (
    <motion.div
      initial={{
        x: -80,
      }}
      animate={{
        x: 0,
      }}
    >
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
              name="locationname"
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
              Brif Intro of location
            </FormLabel>
            <Textarea
              minRows={12}
              placeholder="Brif Intro of location"
              name="Intro"
              onChange={(e) => {
                setForm({ ...form, intro: e.target.value });
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
                setForm({ ...form, mainTitle: e.target.value });
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
                setForm({ ...form, mainPara: e.target.value });
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
                setForm({ ...form, subTitle: e.target.value });
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
                setForm({ ...form, subPara: e.target.value });
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
                setForm({ ...form, subTitle2: e.target.value });
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
                setForm({ ...form, subpapra2: e.target.value });
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
              Upload image1
            </FormLabel>
            <Button variant="outlined" component="label" fullWidth>
              <div className="font-bold font-outfit tracking-wider">
                {image1.mImage ? image1.mImage.name : "Select City Cover Image"}
              </div>

              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImageChange1}
                required
              />
            </Button>

            <FormHelperText>
              <div
                className="w-full flex space-x-8 text-xs font-bold font-outfit tracking-wider"
                id="coverImage"
              >
                <div className="text-green-900">
                  image size: 3840 &#215; 1962
                </div>
                {!image1.mImage && (
                  <div className="text-red-500">Please Select image</div>
                )}
              </div>
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel
              sx={(theme) => ({
                "--FormLabel-color": theme.vars.palette.primary.plainColor,
              })}
            >
              Upload image2
            </FormLabel>
            <Button variant="outlined" component="label" fullWidth>
              <div className="font-bold font-outfit tracking-wider">
                {image2.mImage ? image2.mImage.name : "Select City Cover Image"}
              </div>

              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImageChange2}
                required
              />
            </Button>

            <FormHelperText>
              <div
                className="w-full flex space-x-8 text-xs font-bold font-outfit tracking-wider"
                id="coverImage"
              >
                <div className="text-green-900">
                  image size: 3840 &#215; 1962
                </div>
                {!image2.mImage && (
                  <div className="text-red-500">Please Select image</div>
                )}
              </div>
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel
              sx={(theme) => ({
                "--FormLabel-color": theme.vars.palette.primary.plainColor,
              })}
            >
              Upload image3
            </FormLabel>
            <Button variant="outlined" component="label" fullWidth>
              <div className="font-bold font-outfit tracking-wider">
                {image3.mImage ? image3.mImage.name : "Select City Cover Image"}
              </div>

              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImageChange3}
                required
              />
            </Button>

            <FormHelperText>
              <div
                className="w-full flex space-x-8 text-xs font-bold font-outfit tracking-wider"
                id="coverImage"
              >
                <div className="text-green-900">
                  image size: 3840 &#215; 1962
                </div>
                {!image3.mImage && (
                  <div className="text-red-500">Please Select image</div>
                )}
              </div>
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel
              sx={(theme) => ({
                "--FormLabel-color": theme.vars.palette.primary.plainColor,
              })}
            >
              Upload image4
            </FormLabel>
            <Button variant="outlined" component="label" fullWidth>
              <div className="font-bold font-outfit tracking-wider">
                {image4.mImage ? image4.mImage.name : "Select City Cover Image"}
              </div>

              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImageChange4}
                required
              />
            </Button>

            <FormHelperText>
              <div
                className="w-full flex space-x-8 text-xs font-bold font-outfit tracking-wider"
                id="coverImage"
              >
                <div className="text-green-900">
                  image size: 3840 &#215; 1962
                </div>
                {!image4.mImage && (
                  <div className="text-red-500">Please Select image</div>
                )}
              </div>
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel
              sx={(theme) => ({
                "--FormLabel-color": theme.vars.palette.primary.plainColor,
              })}
            >
              Upload image5
            </FormLabel>
            <Button variant="outlined" component="label" fullWidth>
              <div className="font-bold font-outfit tracking-wider">
                {image5.mImage ? image5.mImage.name : "Select City Cover Image"}
              </div>

              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImageChange5}
                required
              />
            </Button>

            <FormHelperText>
              <div
                className="w-full flex space-x-8 text-xs font-bold font-outfit tracking-wider"
                id="coverImage"
              >
                <div className="text-green-900">
                  image size: 3840 &#215; 1962
                </div>
                {!image5.mImage && (
                  <div className="text-red-500">Please Select image</div>
                )}
              </div>
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel
              sx={(theme) => ({
                "--FormLabel-color": theme.vars.palette.primary.plainColor,
              })}
            >
              Upload image6
            </FormLabel>
            <Button variant="outlined" component="label" fullWidth>
              <div className="font-bold font-outfit tracking-wider">
                {image6.mImage ? image6.mImage.name : "Select City Cover Image"}
              </div>

              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImageChange6}
                required
              />
            </Button>

            <FormHelperText>
              <div
                className="w-full flex space-x-8 text-xs font-bold font-outfit tracking-wider"
                id="coverImage"
              >
                <div className="text-green-900">
                  image size: 3840 &#215; 1962
                </div>
                {!image6.mImage && (
                  <div className="text-red-500">Please Select image</div>
                )}
              </div>
            </FormHelperText>
          </FormControl>

          <LoadingButton
            variant="contained"
            sx={{
              borderRadius: 2,
              textTransform: "none",
            }}
            disabled={imageUploadEvent.uploadImages}
            loading={loadingEvent}
            endIcon={<DriveFolderUploadRoundedIcon />}
            loadingPosition="end"
            onClick={handleUpload}
          >
            {loadingEvent ? (
              <div className="font-bold font-outfit tracking-wider">
                {(
                  (image1.Percent +
                    image2.Percent +
                    image3.Percent +
                    image4.Percent +
                    image5.Percent +
                    image6.Percent) /
                  6
                ).toFixed(2)}
              </div>
            ) : (
              <div className="font-bold font-outfit tracking-wider">
                {imageUploadEvent.uploadImages ? "Done" : "Upload"}
              </div>
            )}
          </LoadingButton>

          <Button
            type="submit"
            variant="solid"
            loading={loadingEvent2}
            fullWidth
            sx={{
              marginBottom: 5,
              textTransform: "none",
            }}
          >
            <div className="font-bold font-outfit tracking-wider">
              {imageUploadEvent.sendData
                ? "Thank You!!Your Data is saved!"
                : "Submit"}
            </div>
          </Button>
        </Stack>
      </form>
    </motion.div>
  );
};
