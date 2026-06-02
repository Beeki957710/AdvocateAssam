import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { DoctorContext } from "../../context/DoctorContext";
import { toast } from "react-toastify";
import axios from "axios";

const VerifyAsLawyer = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("Criminal Law");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [loading, setLoading] = useState(false);

  const [barCouncilNumber, setBarCouncilNumber] = useState("");
  const [stateBarCouncil, setStateBarCouncil] = useState("");
  const [advocateId, setAdvocateId] = useState("");
  const [barCertificate, setBarCertificate] = useState(false);
  const [degreeCertificate, setDegreeCertificate] = useState(false);

  const { backendUrl, dToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (!docImg) {
        return toast.error("Lawyer image not selected");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("whatsapp", whatsapp);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);

      formData.append(
        "address",
        JSON.stringify({
          line1: address1,
          line2: address2,
        }),
      );

      formData.append("barCouncilNumber", barCouncilNumber);
      formData.append("stateBarCouncil", stateBarCouncil);
      formData.append("advocateId", advocateId);

      if (barCertificate) {
        formData.append("barCertificate", barCertificate);
      }

      if (degreeCertificate) {
        formData.append("degreeCertificate", degreeCertificate);
      }

      const { data } = await axios.post(
        backendUrl + "/api/application/apply-lawyer",
        formData,
      );

      if (data.success) {
        toast.success("Lawyer Added Successfully");

        setLoading(false);
        setDocImg(false);
        setName("");
        setPassword("");
        setEmail("");
        setWhatsapp("");
        setAddress1("");
        setAddress2("");
        setDegree("");
        setAbout("");
        setFees("");
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F7FB] p-4 md:p-8">
      {/* Heading */}

      {/* NyaySetu Header */}

      <div className="max-w-6xl mb-8">
        {/* Logo */}
        <div className="flex items-center gap-4 mb-6">
          <img src={assets.logo} alt="NyaySetu" className="w-44 md:w-56" />

          <div className="hidden md:block h-10 w-[1px] bg-gray-300"></div>

          <div className="hidden md:block">
            <p className="text-[#0b2149] font-semibold text-lg">
              Lawyer Verification Portal
            </p>

            <p className="text-gray-500 text-sm">
              Trusted Legal Professionals Network
            </p>
          </div>
        </div>

        {/* Hero Card */}
        <div className="bg-gradient-to-r from-[#0b2149] to-[#13326d] rounded-3xl p-8 md:p-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Become a Verified Lawyer
              </h1>

              <p className="mt-3 text-gray-200 max-w-2xl">
                Join NyaySetu and connect with clients seeking trusted legal
                professionals. Submit your professional credentials for review
                and verification.
              </p>

              <div className="flex flex-wrap gap-3 mt-5">
                <span className="bg-white/15 px-4 py-2 rounded-full text-sm">
                  ✓ Verified Profile
                </span>

                <span className="bg-white/15 px-4 py-2 rounded-full text-sm">
                  ✓ Client Consultations
                </span>

                <span className="bg-white/15 px-4 py-2 rounded-full text-sm">
                  ✓ Professional Recognition
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-5 border border-white/20">
                <p className="text-sm text-gray-200">Verification Status</p>

                <p className="text-xl font-bold text-[#d4af37] mt-1">
                  New Application
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Card */}

      <form
        onSubmit={onSubmitHandler}
        className="bg-white rounded-3xl shadow-2xl border border-[#d4af37]/20 p-6 md:p-10 max-w-6xl overflow-hidden"
      >
        {/* Upload Image */}

        <div className="flex items-center gap-5 mb-10">
          <label htmlFor="doc-img" className="cursor-pointer">
            <img
              className="w-24 h-24 rounded-3xl object-cover border-2 border-dashed border-[#0b2149] bg-[#F5F7FB]"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>

          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />

          <div>
            <p className="text-lg font-semibold text-[#0b2149]">
              Upload Your Photo
            </p>

            <p className="text-sm text-gray-500 mt-1">
              JPG, PNG or professional portrait image
            </p>
          </div>
        </div>

        {/* Main Form */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT */}

          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 text-sm font-medium text-[#0b2149]">
                Your Name
              </p>

              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter lawyer name"
                required
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#0b2149]"
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-[#0b2149]">
                Your Email
              </p>

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter email"
                required
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#0b2149]"
              />
            </div>

            <div className="mb-2 text-sm font-medium text-[#0b2149]">
              <p>WhatsApp Number</p>

              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+912314567247"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#0b2149]"
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-[#0b2149]">
                Password
              </p>

              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter password"
                required
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#0b2149]"
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-[#0b2149]">
                Experience
              </p>

              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#0b2149]"
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
                <option value="9 Years">9 Years</option>
                <option value="10 Years">10 Years</option>
                <option value="11 Years">11 Years</option>
                <option value="12 Years">12 Years</option>
                <option value="13 Years">13 Years</option>
                <option value="14 Years">14 Years</option>
                <option value="15 Years">15 Years</option>
                <option value="16 Years">16 Years</option>
                <option value="17 Years">17 Years</option>
                <option value="18 Years">18 Years</option>
                <option value="19 Years">19 Years</option>
                <option value="20 Years">20 Years</option>
                <option value="21 Years">21 Years</option>
                <option value="22 Years">22 Years</option>
                <option value="23 Years">23 Years</option>
                <option value="24 Years">24 Years</option>
                <option value="25 Years">25 Years</option>
                <option value="26 Years">26 Years</option>
                <option value="27 Years">27 Years</option>
                <option value="28 Years">28 Years</option>
                <option value="29 Years">29 Years</option>
                <option value="30 Years">30 Years</option>
              </select>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-[#0b2149]">
                Consultation Fees
              </p>

              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                type="number"
                placeholder="Enter fees"
                required
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#0b2149]"
              />
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 text-sm font-medium text-[#0b2149]">
                Legal Speciality
              </p>

              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#0b2149]"
              >
                <option value="Criminal Law">Criminal Law</option>
                <option value="Family Law">Family Law</option>
                <option value="Corporate Law">Corporate Law</option>
                <option value="Civil Law">Civil Law</option>
                <option value="Property Law">Property Law</option>
                <option value="Cyber Law">Cyber Law</option>
              </select>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-[#0b2149]">
                Qualification
              </p>

              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                type="text"
                placeholder="LLB, LLM etc."
                required
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#0b2149]"
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-[#0b2149]">
                Office Address
              </p>

              <div className="flex flex-col gap-3">
                <input
                  onChange={(e) => setAddress1(e.target.value)}
                  value={address1}
                  type="text"
                  placeholder="Address Line 1"
                  required
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#0b2149]"
                />

                <input
                  onChange={(e) => setAddress2(e.target.value)}
                  value={address2}
                  type="text"
                  placeholder="Address Line 2"
                  required
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:border-[#0b2149]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lawyer Verification */}

        <div className="mt-8 border-t pt-8">
          <h3 className="text-xl font-semibold text-[#0b2149] mb-5">
            Verification
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Bar Council Number"
              value={barCouncilNumber}
              onChange={(e) => setBarCouncilNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="State Bar Council"
              value={stateBarCouncil}
              onChange={(e) => setStateBarCouncil(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Advocate ID Number"
              value={advocateId}
              onChange={(e) => setAdvocateId(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <p className="mb-2 font-medium text-[#0b2149]">
                Bar Council Certificate
              </p>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setBarCertificate(e.target.files[0])}
              />
            </div>

            <div>
              <p className="mb-2 font-medium text-[#0b2149]">
                Degree Certificate
              </p>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setDegreeCertificate(e.target.files[0])}
              />
            </div>
          </div>

          <div className="mt-4">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
              Verification Status: Pending
            </span>
          </div>
        </div>

        {/* About */}

        <div className="mt-8">
          <p className="mb-2 text-sm font-medium text-[#0b2149]">About</p>

          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            rows={6}
            placeholder="Write professional information about yourself..."
            required
            className="w-full border border-gray-300 rounded-2xl px-4 py-4 outline-none focus:border-[#0b2149]"
          />
        </div>

        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className={`mt-8 px-10 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 flex items-center gap-3
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-[#0b2149] hover:bg-[#13326d] text-white"
          }`}
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Uploading Lawyer...
            </>
          ) : (
            "Submit Verification Application"
          )}
        </button>
      </form>
    </div>
  );
};

export default VerifyAsLawyer;
