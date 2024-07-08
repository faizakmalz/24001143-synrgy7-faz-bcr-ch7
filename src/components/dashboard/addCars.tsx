import { useForm, SubmitHandler } from 'react-hook-form';
import axiosInstance from '../../utils/axios';

type CarData = {
  model: string;
  manufacture: string;
  plate: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  type: string;
  year: string;
  image: FileList;
};

function AddCarForm() {
  const { register, handleSubmit, reset } = useForm<CarData>();

  const onSubmit: SubmitHandler<CarData> = async (data) => {
    const formData = new FormData();
    formData.append('model', data.model);
    formData.append('manufacture', data.manufacture);
    formData.append('plate', data.plate);
    formData.append('rentPerDay', data.rentPerDay.toString());
    formData.append('capacity', data.capacity.toString());
    formData.append('description', data.description);
    formData.append('transmission', data.transmission);
    formData.append('type', data.type);
    formData.append('year', data.year);
    if (data.image.length > 0) {
      formData.append('image', data.image[0]);
    }

    try {
      const response = await axiosInstance.post('/api/v1/cars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseData = response.data;
      console.log('Car creation response:', responseData);

      reset();
    } catch (error) {
      console.error('Error creating car:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4">Add New Car</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
        <div className="mb-4">
          <label htmlFor="model" className="block mb-2 text-sm font-medium">Model</label>
          <input
            type="text"
            id="model"
            {...register('model', { required: true })}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="manufacture" className="block mb-2 text-sm font-medium">Brand</label>
          <input
            type="text"
            id="manufacture"
            {...register('manufacture', { required: true })}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="plate" className="block mb-2 text-sm font-medium">Plate</label>
          <input
            type="text"
            id="plate"
            {...register('plate', { required: true })}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rentPerDay" className="block mb-2 text-sm font-medium">Rent Per Day</label>
          <input
            type="number"
            id="rentPerDay"
            {...register('rentPerDay', { required: true, valueAsNumber: true })}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="capacity" className="block mb-2 text-sm font-medium">Capacity</label>
          <input
            type="number"
            id="capacity"
            {...register('capacity', { required: true, valueAsNumber: true })}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-sm font-medium">Description</label>
          <input
            type="text"
            id="description"
            {...register('description', { required: true })}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="transmission" className="block mb-2 text-sm font-medium">Transmission</label>
          <input
            type="text"
            id="transmission"
            {...register('transmission', { required: true })}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block mb-2 text-sm font-medium">Type</label>
          <input
            type="text"
            id="type"
            {...register('type', { required: true })}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block mb-2 text-sm font-medium">Year</label>
          <input
            type="text"
            id="year"
            {...register('year', { required: true })}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 text-sm font-medium">Image</label>
          <input
            type="file"
            id="image"
            {...register('image')}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white font-bold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
        >
          Add Car
        </button>
      </form>
    </div>
  );
}

export default AddCarForm;
