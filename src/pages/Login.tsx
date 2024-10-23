import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

// Define the validation schema with Zod
const schema = z.object({
  email: z
    .string()
    .email("Invalid email address.")
    .min(1, "Email is required."),
  password: z.string().min(1, "Password is required."),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call for login
    try {
      // Replace with your API login logic
      console.log("User signed in:", data);
      // Redirect to the dashboard after successful login
    } catch (error) {
      console.error("Error during login:", error);
      // Optionally set an error state here if the API fails
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              {...register("email")}
              className={`border rounded p-2 w-full ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className={`border rounded p-2 w-full ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

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
