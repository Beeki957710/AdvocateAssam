import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const VerifyEmail = () => {
  const { token } = useParams();
  const { backendUrl } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get(
          backendUrl + "/api/user/verify-email/" + token,
        );

        if (data.success) {
          toast.success("Email Verified Successfully");

          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Verification Failed");
      }
    };

    verifyUser();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-xl font-semibold">Verifying your email...</h2>
    </div>
  );
};

export default VerifyEmail;
