import React from "react";
import Login from "@/components/Auth/Login";
import Admin from "@/components/Admin/Admin";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { app } from "@/Firebase/Firebase";
import { CircularProgress } from "@mui/joy";

export default function Index() {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <div className="min-h-screen min-w-full center-v-h text-9xl  font-suezone">
        <CircularProgress variant="soft" size="lg" color="info" thickness={5}/>
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
    return <Admin />;
  }
  return (
    <div>
      <Login />
    </div>
  );
}
