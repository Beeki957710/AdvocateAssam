import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData, backendUrl } =
    useContext(DoctorContext);

  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);

  // Update Profile

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available,
      };

      const { data } = await axios.post(
        backendUrl + "/api/doctor/update-profile",
        updateData,
        { headers: { dToken } },
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div className="p-6 bg-[#F5F7FB] min-h-screen">
        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#071C55]">Lawyer Profile</h1>

          <p className="text-gray-500 mt-1">
            Manage your professional profile and legal consultation settings.
          </p>
        </div>

        {/* Profile Card */}

        <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
            {/* Left Side */}

            <div className="bg-gradient-to-b from-[#071C55] to-[#0B2D83] p-8 flex flex-col items-center justify-center text-white">
              <img
                className="w-52 h-52 object-cover rounded-3xl border-4 border-white shadow-lg"
                src={profileData.image}
                alt=""
              />

              <h2 className="text-2xl font-bold mt-6 text-center">
                {profileData.name}
              </h2>

              <p className="text-gray-200 mt-2 text-center">
                {profileData.speciality}
              </p>

              <div className="mt-5 bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                {profileData.experience} Experience
              </div>
            </div>

            {/* Right Side */}

            <div className="p-8">
              {/* Top */}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-[#071C55]">
                    {profileData.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {profileData.degree} • {profileData.speciality}
                  </p>
                </div>

                <div>
                  {isEdit ? (
                    <button
                      onClick={updateProfile}
                      className="bg-[#071C55] hover:bg-[#0B2D83] text-white px-6 py-3 rounded-2xl font-medium transition-all"
                    >
                      Save Changes
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsEdit(true)}
                      className="border border-[#071C55] text-[#071C55] hover:bg-[#071C55] hover:text-white px-6 py-3 rounded-2xl font-medium transition-all"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>

              {/* About */}

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-[#071C55] mb-3">
                  About Lawyer
                </h4>

                <p className="text-gray-600 leading-8">{profileData.about}</p>
              </div>

              {/* Consultation Fee */}

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-[#071C55] mb-3">
                  Consultation Fee
                </h4>

                {isEdit ? (
                  <input
                    type="number"
                    value={profileData.fees}
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        fees: e.target.value,
                      }))
                    }
                    className="border border-gray-300 rounded-2xl px-4 py-3 w-48 outline-none focus:border-[#071C55]"
                  />
                ) : (
                  <p className="text-2xl font-bold text-[#071C55]">
                    {currency}
                    {profileData.fees}
                  </p>
                )}
              </div>

              {/* Address */}

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-[#071C55] mb-3">
                  Office Address
                </h4>

                {isEdit ? (
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      value={profileData.address.line1}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            line1: e.target.value,
                          },
                        }))
                      }
                      className="border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#071C55]"
                    />

                    <input
                      type="text"
                      value={profileData.address.line2}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            line2: e.target.value,
                          },
                        }))
                      }
                      className="border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#071C55]"
                    />
                  </div>
                ) : (
                  <div className="text-gray-600 leading-7">
                    <p>{profileData.address.line1}</p>
                    <p>{profileData.address.line2}</p>
                  </div>
                )}
              </div>

              {/* Availability */}

              <div className="mt-10 flex items-center gap-3">
                <input
                  disabled={!isEdit}
                  checked={profileData.available}
                  onChange={() =>
                    setProfileData((prev) => ({
                      ...prev,
                      available: !prev.available,
                    }))
                  }
                  type="checkbox"
                  className="w-5 h-5 accent-[#071C55]"
                />

                <label className="text-[#071C55] font-medium">
                  Available for Consultation
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
