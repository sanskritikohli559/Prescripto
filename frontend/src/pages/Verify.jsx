import { useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify"; 

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const appointmentId = searchParams.get("appointmentId");
  const { backendUrl, token } = useContext(AppContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/verifyStripe",
        { success, appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        navigate("/my-appointments");
      } else {
        navigate("/my-appointments");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if (token && appointmentId) verifyPayment();
  }, [token]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <p>Processing payment...</p>
    </div>
  );
};

export default Verify;