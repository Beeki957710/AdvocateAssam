import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      // ADMIN LOGIN

      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      }

      // LAWYER LOGIN
      else {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FB]">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-xl rounded-3xl p-10 w-[95%] max-w-md border border-gray-100"
      >
        {/* Heading */}

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#071C55]">
            {state === "Admin" ? "Admin" : "Lawyer"}

            <span className="text-[#D4A017]"> Login</span>
          </h1>

          <p className="text-gray-500 mt-3 text-sm">
            Welcome back to AdvocateAssam Dashboard
          </p>
        </div>

        {/* Email */}

        <div className="mb-5">
          <label className="text-sm font-medium text-[#071C55]">
            Email Address
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-2xl outline-none focus:border-[#071C55] transition-all"
          />
        </div>

        {/* Password */}

        <div className="mb-6">
          <label className="text-sm font-medium text-[#071C55]">Password</label>

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-2xl outline-none focus:border-[#071C55] transition-all"
          />
        </div>

        {/* Login Button */}

        <button
          type="submit"
          className="w-full bg-[#071C55] hover:bg-[#0B2D83] text-white py-3 rounded-2xl font-semibold text-lg transition-all duration-300"
        >
          Login
        </button>

        {/* Switch Login */}

        <div className="text-center mt-6 text-sm">
          {state === "Admin" ? (
            <p className="text-gray-600">
              Lawyer Login?{" "}
              <span
                onClick={() => setState("Lawyer")}
                className="text-[#071C55] font-semibold cursor-pointer hover:underline"
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="text-gray-600">
              Admin Login?{" "}
              <span
                onClick={() => setState("Admin")}
                className="text-[#071C55] font-semibold cursor-pointer hover:underline"
              >
                Click here
              </span>
            </p>
          )}
          <p className="text-sm">
            New Lawyer?{" "}
            <Link to="/verify-lawyer" className="text-primary underline">
              Apply Here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
