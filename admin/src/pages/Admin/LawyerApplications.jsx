import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";

const LawyerApplications = () => {
  const { backendUrl, aToken } = useContext(AdminContext);

  const [applications, setApplications] = useState([]);

  const getApplications = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/applications", {
        headers: { aToken },
      });

      if (data.success) {
        setApplications(data.applications);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const approveLawyer = async (id) => {
    const { data } = await axios.post(
      backendUrl + "/api/admin/approve-lawyer",
      {
        applicationId: id,
      },
      {
        headers: { aToken },
      },
    );

    if (data.success) {
      getApplications();
    }
  };

  const rejectLawyer = async (id) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/reject-lawyer",
        {
          applicationId: id,
        },
        {
          headers: { aToken },
        },
      );

      if (data.success) {
        alert(data.message);

        getApplications();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (aToken) {
      getApplications();
    }
  }, [aToken]);

  return (
    <div className="m-5">
      <h1 className="text-3xl font-bold mb-5 text-[#0b2149]">
        Lawyer Applications
      </h1>

      <div className="grid gap-4">
        {applications.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-lg border p-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Lawyer Image */}
              <img
                src={item.image}
                alt=""
                className="w-32 h-32 rounded-xl object-cover border"
              />

              {/* Lawyer Details */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-[#0b2149]">
                  {item.name}
                </h2>

                <p className="text-gray-600">{item.email}</p>
                <p className="text-gray-600">
                  <span className="font-semibold">WhatsApp:</span>{" "}
                  {item.whatsapp}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                  <div>
                    <span className="font-semibold">Speciality:</span>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {Array.isArray(item.speciality) ? (
                        item.speciality.map((speciality, index) => (
                          <span
                            key={index}
                            className="bg-[#0b2149]/10 text-[#0b2149] px-3 py-1 rounded-full text-sm"
                          >
                            {speciality}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-600">{item.speciality}</span>
                      )}
                    </div>
                  </div>

                  <p>
                    <span className="font-semibold">Degree:</span> {item.degree}
                  </p>

                  <p>
                    <span className="font-semibold">Experience:</span>{" "}
                    {item.experience}
                  </p>

                  <p>
                    <span className="font-semibold">Fee:</span> ₹{item.fees}
                  </p>

                  <p>
                    <span className="font-semibold">Bar Council No:</span>{" "}
                    {item.barCouncilNumber}
                  </p>

                  <p>
                    <span className="font-semibold">State Bar Council:</span>{" "}
                    {item.stateBarCouncil}
                  </p>

                  <p>
                    <span className="font-semibold">Advocate ID:</span>{" "}
                    {item.advocateId}
                  </p>
                </div>

                {/* About */}
                <div className="mt-4">
                  <p className="font-semibold text-[#0b2149]">About</p>

                  <p className="text-gray-600 text-sm">{item.about}</p>
                </div>

                {/* Certificates */}
                <div className="flex flex-wrap gap-3 mt-5">
                  <a
                    href={item.barCertificate}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    View Bar Certificate
                  </a>

                  <a
                    href={item.degreeCertificate}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
                  >
                    View Degree Certificate
                  </a>
                </div>

                {/* Status */}
                <div className="mt-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    {item.verificationStatus}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => approveLawyer(item._id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
                  >
                    Approve Lawyer
                  </button>

                  <button
                    onClick={() => rejectLawyer(item._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawyerApplications;
