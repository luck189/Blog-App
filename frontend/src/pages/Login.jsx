import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";
const BACKEND_URL = "https://codecanvas-backend.vercel.app"
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loginUser } = useContext(StoreContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Trimming inputs to prevent accidental spaces
      const loginData = {
        email: formData.email.trim(),
        password: formData.password.trim(),
      };

      const res = await axios.post(
        `${BACKEND_URL}/user/login`,
        loginData
      );

      if (res.data.success) {
        const { user, token } = res.data;
        loginUser(user, token);
        toast.success(res.data.message || "Login successful!");
        navigate("/");
      }
    } catch (error) {
      // Display the specific error message from the backend or a default one
      const errMsg = error.response?.data?.message || "Something went wrong";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-pink-200 py-12 flex items-center justify-center min-h-screen">
      <div className="w-full bg-white max-w-md p-8 border border-gray-200 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login to your account
        </h1>
        
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Your email"
            className="w-full p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-orange-500"
            required
            disabled={loading}
          />
          <input
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Your password"
            className="w-full p-3 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-orange-500"
            required
            disabled={loading}
          />

          <button 
            type="submit"
            disabled={loading}
            className={`bg-orange-600 text-white px-6 py-3 w-full font-bold transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-700"
            }`}
          >
            {loading ? "Signing in..." : "Signin"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-orange-600 font-semibold hover:underline">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;