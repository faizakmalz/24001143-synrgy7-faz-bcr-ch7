import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axios';

type CarData = {
  id: string;
  model: string;
  manufacture: string;
  plate: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  type: string;
  year: string;
};

function EditCarForm() {
  const { id } = useParams<{ id: string }>();
  const { reset, register, handleSubmit, setValue } = useForm<CarData>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axiosInstance.get(`/cars/${id}`);
        const carData: CarData = response.data;
        Object.keys(carData).forEach((key) => {
          setValue(key as keyof CarData, carData[key as keyof CarData]);
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching car details:', error);
        setLoading(false);
      }
    };

    fetchCar();
  }, [id, setValue]);

  const onSubmit: SubmitHandler<CarData> = async (data) => {
    try {
      const response = await axiosInstance.put(`/cars/${id}`, data);
      console.log('Car update response:', response.data);
      reset();
      navigate('/dashboard/cars')
      // Handle successful update (e.g., display success message or redirect)
    } catch (error) {
      console.error('Error updating car:', error);
      // Handle errors (e.g., display error message)
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4">Edit Car</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
        <div className="mb-4">
          <label htmlFor="model" className="block mb-2 text-sm font-medium">Model</label>
          <input type="text" id="model" {...register('model', { required: true })} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="manufacture" className="block mb-2 text-sm font-medium">Brand</label>
          <input type="text" id="manufacture" {...register('manufacture', { required: true })} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="plate" className="block mb-2 text-sm font-medium">Plate</label>
          <input type="text" id="plate" {...register('plate', { required: true })} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="rentPerDay" className="block mb-2 text-sm font-medium">Rent Per Day</label>
          <input type="number" id="rentPerDay" {...register('rentPerDay', { required: true, valueAsNumber: true })} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="capacity" className="block mb-2 text-sm font-medium">Capacity</label>
          <input type="number" id="capacity" {...register('capacity', { required: true, valueAsNumber: true })} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-sm font-medium">Description</label>
          <input type="text" id="description" {...register('description', { required: true })} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="transmission" className="block mb-2 text-sm font-medium">Transmission</label>
          <input type="text" id="transmission" {...register('transmission', { required: true })} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block mb-2 text-sm font-medium">Type</label>
          <input type="text" id="type" {...register('type', { required: true })} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3" />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block mb-2 text-sm font-medium">Year</label>
          <input type="text" id="year" {...register('year', { required: true })} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3" />
        </div>
        <button type="submit" className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4">Update Car</button>
      </form>
    </div>
  );
}

export default EditCarForm;
