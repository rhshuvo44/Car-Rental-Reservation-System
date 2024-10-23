import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface BookingFormData {
  nid: string;
  drivingLicense: string;
  paymentMethod: string;
  gps: boolean;
  childSeat: boolean;
}

const BookingForm: React.FC = () => {
  const { register, handleSubmit } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
    // Handle booking submission
  };

  return (
    <form
      className="p-6 w-full bg-white shadow-md rounded-lg px-12 mt-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-xl font-bold mb-4">Booking Details</h2>

      {/* NID/Passport */}
      <div>
        <label className="block mb-2">NID/Passport Number</label>
        <input
          className="w-full p-2 border rounded"
          type="text"
          {...register("nid")}
          required
        />
      </div>

      {/* Driving License */}
      <div className="mt-4">
        <label className="block mb-2">Driving License</label>
        <input
          className="w-full p-2 border rounded"
          type="text"
          {...register("drivingLicense")}
          required
        />
      </div>

      {/* Payment Method */}
      <div className="mt-4">
        <label className="block mb-2">Payment Method</label>
        <select
          className="w-full p-2 border rounded"
          {...register("paymentMethod")}
          required
        >
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      {/* Additional Options */}
      <div className="mt-4">
        <label className="block mb-2">Additional Options</label>
        <div className="flex items-center">
          <input type="checkbox" {...register("gps")} className="mr-2" />
          <label>GPS</label>
        </div>
        <div className="flex items-center mt-2">
          <input type="checkbox" {...register("childSeat")} className="mr-2" />
          <label>Child Seat</label>
        </div>
      </div>

      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
        type="submit"
      >
        <Link to={`/booking-confirmation`}>Confirm Booking</Link>
      </button>
    </form>
  );
};

export default BookingForm;
