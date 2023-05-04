import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@mui/joy";
import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";
import { app } from "@/Firebase/Firebase";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export default function ContactUs() {
  const firestore = getFirestore(app);
  const [Form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Message: "",
  });
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [buttonText, setButtonText] = useState("Sent Your Message!!");
  const [buttonVerient, setButtonVerient] = useState<
    "primary" | "danger" | "success"
  >("primary");

  const handleUploadData = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const DocId = uuidv4();
    const ref = `ContactUs/${DocId}`;
    const citiesImformation = doc(firestore, ref);
    const mySnapshot = await getDoc(citiesImformation);
    if (!mySnapshot.exists()) {
      await setDoc(citiesImformation, {
        firstName: Form.FirstName,
        lastName: Form.LastName,
        email: Form.Email,
        message: Form.Message,
      }).then(() => {
        setLoading(false);
        setOpen(true);
        setButtonVerient("success");
        setButtonText("Thank You!!Your Message is saved");
      });
    } else {
      setButtonText("Somthing went Wrong please try again!!");
      setButtonVerient("danger");
    }
  };

  return (
    <div>
      <center className="my-16">
        <div className="text-5xl font-outfit font-bold tracking-wide">
          Contact Us
        </div>
        <div className="md:max-w-3xl sm:max-w-md min-[0px]:max-w-sm">
          <form className="my-12" onSubmit={handleUploadData}>
            <Stack direction="column" gap={2}>
              <FormControl>
                <FormLabel>
                  <div className="text-blue-500 font-outfit font-bold tracking-wide">
                    First Name
                  </div>
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Your First Name..."
                  fullWidth={true}
                  name="name"
                  id="name"
                  onChange={(e) => {
                    setForm({ ...Form, FirstName: e.target.value });
                  }}
                  autoComplete="given-name"
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <div className="text-blue-500 font-outfit font-bold tracking-wide">
                    Last Name
                  </div>
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Your Last Name..."
                  fullWidth={true}
                  name="name"
                  id="name"
                  autoComplete="family-name"
                  onChange={(e) => {
                    setForm({ ...Form, LastName: e.target.value });
                  }}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <div className="text-blue-500 font-outfit font-bold tracking-wide">
                    Email
                  </div>
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Enter Your Email..."
                  fullWidth={true}
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setForm({ ...Form, Email: e.target.value });
                  }}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  <div className="text-blue-500 font-outfit font-bold tracking-wide">
                    Message
                  </div>
                </FormLabel>
                <Textarea
                  sx={{ "--Input-decoratorChildHeight": "45px" }}
                  minRows={12}
                  placeholder="Write your Message..."
                  name="message"
                  onChange={(e) => {
                    setForm({ ...Form, Message: e.target.value });
                  }}
                  required
                />
              </FormControl>
              <Button
                type="submit"
                variant="solid"
                color={buttonVerient}
                fullWidth
                loading={loading}
                sx={{
                  marginTop: 2,
                }}
              >
                {buttonText}
              </Button>
            </Stack>
          </form>
        </div>
      </center>
      <Modal
        aria-labelledby="modal-Message-sent"
        aria-describedby="modal-Message"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="soft"
          color="success"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />
          <Typography
            component="h2"
            id="modal-message-sent"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            <div className="font-outfit text-2xl">Your Message is Saved.</div>
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <div className="font-outfit">
              Thank you for contacting us. Our team is reviewing your message
              and will get back to you soon.
            </div>
          </Typography>
        </Sheet>
      </Modal>
    </div>
  );
}
