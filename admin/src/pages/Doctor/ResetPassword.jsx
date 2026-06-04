import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

const ResetPassword = () => {
  const { token } = useParams();

  const navigate = useNavigate();

  const { backendUrl } = useContext(DoctorContext);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        backendUrl + "/api/doctor/reset-password/" + token,
        { password },
      );

      if (data.success) {
        toast.success("Password Reset Successful");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
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
        <h2 className="text-2xl font-semibold">Reset Password</h2>

        <div>
          <p>New Password</p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            required
          />
        </div>

        <div>
          <p>Confirm Password</p>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            required
          />
        </div>

        <button type="submit" className="bg-primary text-white py-2 rounded">
          Reset Password
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;