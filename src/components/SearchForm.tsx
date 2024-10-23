// src/components/SearchForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';

interface SearchFormData {
  carType: string;
  features: string[];
  location: string;
  pickUpDate: string;
  dropOffDate: string;
}

const SearchForm: React.FC = () => {
  const { register, handleSubmit } = useForm<SearchFormData>();

  const onSubmit = (data: SearchFormData) => {
    console.log(data);
    // You can send this data to an API to fetch the search results
  };

  return (
    <form className="p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl font-bold mb-4">Search Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Car Type */}
        <div>
          <label className="block mb-2">Car Type</label>
          <select className="w-full p-2 border rounded" {...register('carType')}>
            <option value="suv">SUV</option>
            <option value="sedan">Sedan</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        
        {/* Features */}
        <div>
          <label className="block mb-2">Features</label>
          <select className="w-full p-2 border rounded" {...register('features')} multiple>
            <option value="gps">GPS</option>
            <option value="childSeat">Child Seat</option>
            <option value="insurance">Insurance</option>
          </select>
        </div>
        
        {/* Location */}
        <div>
          <label className="block mb-2">Location</label>
          <input className="w-full p-2 border rounded" type="text" {...register('location')} />
        </div>
        
        {/* Pick-Up Date */}
        <div>
          <label className="block mb-2">Pick-Up Date</label>
          <input className="w-full p-2 border rounded" type="date" {...register('pickUpDate')} />
        </div>

        {/* Drop-Off Date */}
        <div>
          <label className="block mb-2">Drop-Off Date</label>
          <input className="w-full p-2 border rounded" type="date" {...register('dropOffDate')} />
        </div>
      </div>
      
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
