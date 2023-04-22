import React from "react";
import Login from "@/components/Auth/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { app } from "@/Firebase/Firebase";
import { CircularProgress } from "@mui/joy";
import AddCity from "@/components/Admin/AddCity";
import AdminAppbar from "@/components/Reusable/AdminAppbar";
import { Toolbar } from "@mui/material";
import AddCityInfo from "@/components/Admin/AddCityInfo";

export default function Cityinformation() {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <div className="min-h-screen min-w-full center-v-h text-9xl  font-suezone">
        <CircularProgress variant="soft" size="lg" color="info" thickness={5} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen min-w-full center-v-h text-5xl text-blue-700 font-suezone">
        Somthing Went Wrong...
      </div>
    );
  }
  if (user) {
    return (
      <>
        <AdminAppbar />
        <Toolbar />
        <AddCityInfo />
      </>
    );
  }
  return (
    <div>
      <Login />
    </div>
  );
}
