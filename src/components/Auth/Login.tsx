import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { app } from "@/Firebase/Firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import {
  Input,
  FormControl,
  FormLabel,
  Stack,
  Button,
  FormHelperText,
} from "@mui/joy";

export default function Login() {
  const [loginSwitch, setloginSwitch] = React.useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  useEffect(() => {
    console.log(user);
  }, [user]);

  const Login = async (e: React.FormEvent) => {
    e.preventDefault();
    await firebase.auth().signInWithEmailAndPassword(form.email, form.password);
  };
  const SignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password === form.password2) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(form.email, form.password);
    } else {
    }
  };
  return (
    <div className="min-h-screen min-w-full relative">
      <motion.div
        className="min-h-screen min-w-full absolute"
        initial={{
          background: "linear-gradient(to right, #00B4DB, #0083B0)",
        }}
        animate={{
          background: "linear-gradient(to right, #1A2980, #26D0CE)",
          transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="min-h-screen min-w-full absolute center-v-h"
      >
        <Stack direction="column" gap={2}>
          <Stack
            direction="row"
            gap={2}
            justifyContent="center"
            alignItems="center"
          >
            <button
              className="px-8 py-2 rounded-full text-xl font-outfit font-bold tracking-wider"
              style={{
                backdropFilter: "blur(20px)",
                backgroundColor:
                  loginSwitch === 1 ? "rgb(12 74 110)" : "#ffffff7a",
                color: loginSwitch === 1 ? "#fff" : "rgb(12 74 110)",
              }}
              onClick={() => {
                setloginSwitch(1);
              }}
            >
              Login
            </button>
            <button
              className="px-8 py-2 rounded-full text-xl font-outfit font-bold tracking-wider"
              onClick={() => {
                setloginSwitch(2);
              }}
              style={{
                backdropFilter: "blur(20px)",
                backgroundColor:
                  loginSwitch === 2 ? "rgb(12 74 110)" : "#ffffff7a",
                color: loginSwitch === 2 ? "#fff" : "rgb(12 74 110)",
              }}
            >
              Sign up
            </button>
          </Stack>
          {loginSwitch === 1 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className=""
            >
              <Card
                size="md"
                sx={{
                  minWidth: { xs: 400, md: 500 },
                }}
              >
                <CardContent>
                  <form className="mt-10" onSubmit={Login}>
                    <Stack direction="column" gap={2}>
                      <FormControl>
                        <FormLabel
                          sx={(theme) => ({
                            "--FormLabel-color":
                              theme.vars.palette.primary.plainColor,
                          })}
                        >
                          Email
                        </FormLabel>
                        <Input
                          sx={{ "--Input-decoratorChildHeight": "45px" }}
                          placeholder="mail@gmai.com"
                          type="email"
                          name="email"
                          autoComplete="email"
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                          }}
                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel
                          sx={(theme) => ({
                            "--FormLabel-color":
                              theme.vars.palette.primary.plainColor,
                          })}
                        >
                          Password
                        </FormLabel>
                        <Input
                          sx={{ "--Input-decoratorChildHeight": "45px" }}
                          placeholder="password"
                          type="password"
                          name="new-password"
                          autoComplete="current-password"
                          onChange={(e) => {
                            setForm({ ...form, password: e.target.value });
                          }}
                          required
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        variant="solid"
                        size="sm"
                        fullWidth
                        sx={{
                          borderRadius: 1000,
                          marginTop: 3,
                        }}
                      >
                        Login
                      </Button>
                    </Stack>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
          {loginSwitch === 2 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className=""
            >
              <Card
                size="md"
                sx={{
                  minWidth: { xs: 400, md: 500 },
                }}
              >
                <CardContent>
                  <form className="mt-10" onSubmit={SignIn}>
                    <Stack direction="column" gap={2}>
                      <FormControl>
                        <FormLabel
                          sx={(theme) => ({
                            "--FormLabel-color":
                              theme.vars.palette.primary.plainColor,
                          })}
                        >
                          Name
                        </FormLabel>
                        <Input
                          sx={{ "--Input-decoratorChildHeight": "45px" }}
                          placeholder="Name"
                          type="text"
                          name="name"
                          autoComplete="name"
                          onChange={(e) => {
                            setForm({ ...form, name: e.target.value });
                          }}
                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel
                          sx={(theme) => ({
                            "--FormLabel-color":
                              theme.vars.palette.primary.plainColor,
                          })}
                        >
                          Email
                        </FormLabel>
                        <Input
                          sx={{ "--Input-decoratorChildHeight": "45px" }}
                          placeholder="mail@gmail.com"
                          type="email"
                          name="email"
                          autoComplete="email"
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            
                          }}
                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel
                          sx={(theme) => ({
                            "--FormLabel-color":
                              theme.vars.palette.primary.plainColor,
                          })}
                        >
                          Password
                        </FormLabel>
                        <Input
                          sx={{ "--Input-decoratorChildHeight": "45px" }}
                          placeholder="new password"
                          type="password"
                          name="new-password"
                          autoComplete="new-password"
                          onChange={(e) => {
                            setForm({ ...form, password: e.target.value });
                          }}
                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel
                          sx={(theme) => ({
                            "--FormLabel-color":
                              theme.vars.palette.primary.plainColor,
                          })}
                        >
                          Re-enter password
                        </FormLabel>
                        <Input
                          sx={{ "--Input-decoratorChildHeight": "45px" }}
                          placeholder="new password"
                          type="password"
                          name="new-password2"
                          autoComplete="new-password"
                          onChange={(e) => {
                            setForm({ ...form, password2: e.target.value });
                          }}
                          required
                        />
                        <FormHelperText>
                          {form.password !== form.password2 && (
                            <motion.div
                              initial={{
                                opacity: 0,
                              }}
                              animate={{
                                opacity: 1,
                              }}
                              transition={{
                                duration: 0.5,
                                ease: "easeIn",
                              }}
                              className="text-red-500"
                              id="nameHelpText"
                            >
                              Password not match!
                            </motion.div>
                          )}
                        </FormHelperText>
                      </FormControl>
                      <Button
                        type="submit"
                        variant="solid"
                        size="sm"
                        fullWidth
                        sx={{
                          borderRadius: 1000,
                          marginTop: 3,
                        }}
                      >
                        Sign up
                      </Button>
                    </Stack>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </Stack>
      </motion.div>
    </div>
  );
}
