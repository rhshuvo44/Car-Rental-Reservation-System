
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CarFormProps {
  onSubmit: (data: CarFormValues) => void;
  defaultValues?: CarFormValues;
}

interface CarFormValues {
  name: string;
  model: string;
  year: number;
  features: string;
  pricePerHour: number;
  imageUrl: string;
}

const schema = z.object({
  name: z.string().min(1, "Car name is required"),
  model: z.string().min(1, "Model is required"),
  year: z
    .number()
    .min(1900, "Year must be valid")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  features: z.string(),
  pricePerHour: z.number().min(1, "Price must be positive"),
  imageUrl: z.string().url("Valid image URL is required"),
});

const CarForm: React.FC<CarFormProps> = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CarFormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Car Name</label>
        <input {...register("name")} className="w-full border rounded p-2" />
        {errors.name && (
          <span className="text-red-600 text-sm">{errors.name.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Model</label>
        <input {...register("model")} className="w-full border rounded p-2" />
        {errors.model && (
          <span className="text-red-600 text-sm">{errors.model.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Year</label>
        <input
          type="number"
          {...register("year")}
          className="w-full border rounded p-2"
        />
        {errors.year && (
          <span className="text-red-600 text-sm">{errors.year.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Features</label>
        <input
          {...register("features")}
          className="w-full border rounded p-2"
          placeholder="Comma-separated"
        />
        {errors.features && (
          <span className="text-red-600 text-sm">
            {errors.features.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">
          Price Per Hour
        </label>
        <input
          type="number"
          {...register("pricePerHour")}
          className="w-full border rounded p-2"
        />
        {errors.pricePerHour && (
          <span className="text-red-600 text-sm">
            {errors.pricePerHour.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Image URL</label>
        <input
          {...register("imageUrl")}
          className="w-full border rounded p-2"
        />
        {errors.imageUrl && (
          <span className="text-red-600 text-sm">
            {errors.imageUrl.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default CarForm;
