import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import CustomForm from "../components/form/CustomForm";
import CustomInput from "../components/form/CustomInput";
import { useCreateUserMutation } from "../redux/features/auth/authApi";
import { signupSchema } from "../schema/zodValidationSchema";

const Signup = () => {
  const [createUser] = useCreateUserMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const res = await createUser(data).unwrap();
    if (!res.success) return toast.error(res.message);
    toast.success("Create User successfully");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white px-6 py-2 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
        <CustomForm onSubmit={onSubmit} resolver={zodResolver(signupSchema)}>
          <CustomInput
            type="name"
            name="name"
            label="Name"
            placeholder="Enter your name"
          />
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
          <CustomInput
            type="text"
            name="phone"
            label="Phone number"
            placeholder="Enter Your phone number"
          />
          <CustomInput
            type="text"
            name="address"
            label="Address"
            placeholder="Enter Your address"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
          >
            Sign Up
          </button>
        </CustomForm>
        <div className="mt-4">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign In Instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
