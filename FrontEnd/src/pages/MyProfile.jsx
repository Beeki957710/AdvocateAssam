import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import { toast } from "react-toastify";
import axios from "axios";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateUserProfileData = async () => {
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } },
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    userData && (
      <div className="min-h-[75vh] py-8 sm:py-12">

        {/* ================= PROFILE CONTAINER ================= */}

        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* ================= HEADER ================= */}

          <div className="mb-7">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4A017]">
              My Account
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#0b2149] mt-1">
              My Profile
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Manage your personal information and account details.
            </p>
          </div>

          {/* ================= MAIN CARD ================= */}

          <div className="bg-white rounded-3xl border border-[#E8EBF0] shadow-[0_15px_50px_rgba(7,26,43,0.08)] overflow-hidden">

            {/* ================= PROFILE HEADER ================= */}

            <div className="relative bg-gradient-to-r from-[#071A2B] to-[#0b2149] px-6 sm:px-10 py-8">

              {/* Decorative Circle */}

              <div className="absolute -right-12 -top-16 w-44 h-44 rounded-full bg-[#D4A017]/10" />
              <div className="absolute right-20 -bottom-20 w-32 h-32 rounded-full bg-white/5" />

              <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-5">

                {/* Profile Image */}

                <div className="relative">

                  {isEdit ? (
                    <label htmlFor="image" className="cursor-pointer group">
                      <div className="relative">

                        <img
                          className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white/20 shadow-xl"
                          src={
                            image
                              ? URL.createObjectURL(image)
                              : userData.image
                          }
                          alt=""
                        />

                        <div className="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center">
                          <img
                            src={assets.upload_icon}
                            className="w-8 invert"
                            alt=""
                          />
                          <span className="text-white text-[10px] mt-1 font-medium">
                            Change Photo
                          </span>
                        </div>

                      </div>

                      <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        id="image"
                        accept="image/*"
                        hidden
                      />
                    </label>
                  ) : (
                    <img
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white/20 shadow-xl"
                      src={userData.image}
                      alt=""
                    />
                  )}

                  {/* Online Badge */}

                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-[#0b2149]" />
                </div>

                {/* User Information */}

                <div className="text-center sm:text-left flex-1">

                  {isEdit ? (
                    <input
                      className="w-full max-w-sm bg-white/10 border border-white/20 text-white text-2xl font-bold rounded-xl px-4 py-2 outline-none focus:border-[#D4A017]"
                      type="text"
                      value={userData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  ) : (
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {userData.name}
                    </h2>
                  )}

                  <p className="text-white/60 text-sm mt-2">
                    {userData.email}
                  </p>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs">
                      AdvocateAssam Member
                    </span>

                    <span className="px-3 py-1 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30 text-[#E6C45A] text-xs">
                      Verified Account
                    </span>
                  </div>

                </div>

              </div>
            </div>

            {/* ================= CONTENT ================= */}

            <div className="p-6 sm:p-10">

              {/* ================= CONTACT INFORMATION ================= */}

              <div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#F1F5FF] flex items-center justify-center">
                    <span className="text-lg">📞</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0b2149]">
                      Contact Information
                    </h3>

                    <p className="text-xs text-gray-400">
                      Your contact details
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">

                  {/* Email */}

                  <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-gray-100">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">
                      Email Address
                    </p>

                    <p className="text-sm font-medium text-[#0b2149] break-all">
                      {userData.email}
                    </p>
                  </div>

                  {/* Phone */}

                  <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-gray-100">

                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">
                      Phone Number
                    </p>

                    {isEdit ? (
                      <input
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#0b2149]"
                        type="text"
                        value={userData.phone}
                        onChange={(e) =>
                          updateField("phone", e.target.value)
                        }
                      />
                    ) : (
                      <p className="text-sm font-medium text-[#0b2149]">
                        {userData.phone || "Not provided"}
                      </p>
                    )}

                  </div>

                  {/* Address */}

                  <div className="sm:col-span-2 p-4 rounded-2xl bg-[#F8FAFD] border border-gray-100">

                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-2">
                      Address
                    </p>

                    {isEdit ? (
                      <div className="grid sm:grid-cols-2 gap-3">

                        <input
                          className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#0b2149]"
                          value={userData.address.line1}
                          placeholder="Address line 1"
                          onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              address: {
                                ...prev.address,
                                line1: e.target.value,
                              },
                            }))
                          }
                        />

                        <input
                          className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#0b2149]"
                          value={userData.address.line2}
                          placeholder="Address line 2"
                          onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              address: {
                                ...prev.address,
                                line2: e.target.value,
                              },
                            }))
                          }
                        />

                      </div>
                    ) : (
                      <p className="text-sm text-gray-600 leading-6">
                        {userData.address.line1}
                        <br />
                        {userData.address.line2}
                      </p>
                    )}

                  </div>

                </div>

              </div>

              {/* ================= DIVIDER ================= */}

              <div className="h-px bg-gray-100 my-8" />

              {/* ================= BASIC INFORMATION ================= */}

              <div>

                <div className="flex items-center gap-3 mb-6">

                  <div className="w-10 h-10 rounded-xl bg-[#F1F5FF] flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#0b2149]">
                      Basic Information
                    </h3>

                    <p className="text-xs text-gray-400">
                      Personal information
                    </p>
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-5">

                  {/* Gender */}

                  <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-gray-100">

                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-2">
                      Gender
                    </p>

                    {isEdit ? (
                      <select
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#0b2149]"
                        onChange={(e) =>
                          updateField("gender", e.target.value)
                        }
                        value={userData.gender}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    ) : (
                      <p className="text-sm font-medium text-[#0b2149]">
                        {userData.gender || "Not provided"}
                      </p>
                    )}

                  </div>

                  {/* DOB */}

                  <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-gray-100">

                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-2">
                      Date of Birth
                    </p>

                    {isEdit ? (
                      <input
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#0b2149]"
                        type="date"
                        onChange={(e) =>
                          updateField("dob", e.target.value)
                        }
                        value={userData.dob}
                      />
                    ) : (
                      <p className="text-sm font-medium text-[#0b2149]">
                        {userData.dob || "Not provided"}
                      </p>
                    )}

                  </div>

                </div>

              </div>

              {/* ================= ACTIONS ================= */}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-100">

                <p className="text-xs text-gray-400 text-center sm:text-left">
                  Keep your profile information up to date.
                </p>

                {isEdit ? (
                  <div className="flex items-center gap-3">

                    <button
                      disabled={loading}
                      onClick={() => {
                        setIsEdit(false);
                        setImage(false);
                      }}
                      className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all"
                    >
                      Cancel
                    </button>

                    <button
                      disabled={loading}
                      onClick={updateUserProfileData}
                      className="min-w-[150px] px-6 py-2.5 rounded-xl bg-[#0b2149] text-white text-sm font-semibold border border-[#D4A017]/40 shadow-md hover:bg-[#14367a] hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          Save Changes
                          <span className="text-[#D4A017]">✓</span>
                        </>
                      )}
                    </button>

                  </div>
                ) : (
                  <button
                    onClick={() => setIsEdit(true)}
                    className="px-8 py-2.5 rounded-xl bg-[#0b2149] text-white text-sm font-semibold border border-[#D4A017]/40 shadow-md hover:bg-[#14367a] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
                  >
                    <span>✎</span>
                    Edit Profile
                  </button>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
    )
  );
};

export default MyProfile;
