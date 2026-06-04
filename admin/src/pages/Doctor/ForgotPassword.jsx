import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext";

const ForgotPassword = () => {

  const { backendUrl } = useContext(DoctorContext);
  const [email, setEmail] = useState("");
  
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        backendUrl + "/api/doctor/forgot-password",
        { email },
      );

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-4 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold">Forgot Password</h2>

        <p>Enter your registered email address.</p>

        <div>
          <p>Email</p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            required
          />
        </div>

        <button type="submit" className="bg-primary text-white py-2 rounded">
          Send Reset Link
        </button>
      </div>
    </form>
  );
};

export default ForgotPassword;