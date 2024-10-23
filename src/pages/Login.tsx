import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CustomForm from "../components/form/CustomForm";
import CustomInput from "../components/form/CustomInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";
import { loginSchema } from "../schema/zodValidationSchema";
import { verifyToken } from "../util/verifyToken";

// Define the validation schema with Zod

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res?.token) as TUser;
      dispatch(setUser({ user, token: res.token }));

      toast.success(res?.message);
      navigate(`/${user?.role}/dashboard`, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <CustomForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
          <CustomInput
            type="email"
            name="email"
            label="Email Address"
            placeholder="Enter your email"
          />
          <CustomInput
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Your Password"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
          >
            Sign In
          </button>
        </CustomForm>
        <div className="mt-4">
          <p>
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </p>
          <p>
            New user?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up Instead
            </Link>
          </p>
        </div>

        <footer className="mt-6">
          <p className="text-center">
            <Link
              to="/privacy-policy"
              className="text-blue-500 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            |
            <Link
              to="/terms-of-service"
              className="text-blue-500 hover:underline"
            >
              {" "}
              Terms of Service
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
