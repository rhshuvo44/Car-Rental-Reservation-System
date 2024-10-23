import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

// Define the validation schema with Zod
const schema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z
    .string()
    .email("Invalid email address.")
    .min(1, "Email is required."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .min(1, "Password is required."),
  phone: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    try {
      // Replace with your API call
      console.log("User signed up:", data);
      // Redirect to the login page after successful registration
      //   history.push("/login");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              {...register("name")}
              className={`border rounded p-2 w-full ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
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
            Sign Up
          </button>
        </form>

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
