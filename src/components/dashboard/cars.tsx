import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import Car from "../../types/types";
import { useNavigate } from "react-router";
import { useSearchContext } from "../../context/searchContext";

export default function CarCards () {
    const { searchQuery } = useSearchContext(); // Access searchQuery from context

    const [cars, setCars] = useState<Car[]>([]);
    const navigate = useNavigate()


    useEffect(() => {
        const fetchCars = async () => {
          try {
            const response = await axiosInstance.get('/api/v1/cars');
            setCars(response.data);
          } catch (error) {
            console.error("Error fetching cars:", error);
          }
        };
    
        fetchCars();
      }, []);

      const handleEditCar = (carId: any) => {
        navigate(`/edit-car/${carId}`);
      };

      const handleDelele = async (carId: any) => {
        try {
          await axiosInstance.delete(`/api/v1/cars/${carId}`);
          setCars(cars.filter(car => car.id !== carId));
          console.log('Car deleted successfully');
      } catch (error) {
          console.error('Error deleting car:', error);
      }      }

      const filteredCars = cars.filter((car) =>
        car.model && car.model.toLowerCase().includes(searchQuery.toLowerCase())
    );
      
    
    return (
        <div className="w-full mx-auto mb-52 ">
            {(cars.length > 0)? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredCars.map((car) => (
                <div key={car.id} className="card shadow-md rounded-[16px] w-[320px] h-[482px] mr-4">
                    <img
                        className="w-full h-48 object-cover rounded-[16px]"
                        src={car.image}
                        alt={car.image}
                    />
                    <div className="p-4 flex flex-col mt-2 gap-3">
                        <h5 className="text-gray-700 font-bold mb-2">{car.model}</h5>
                        <p className="text-gray-600 text-sm mb-2">{car.description}</p>
                        <p className="text-gray-600 text-sm">Capacity: {car.capacity}</p>

                        <div className="flex justify-between items-center">
                        <p className="font-bold">Rp {car.rentPerDay} / day</p>
                        </div>

                        <div className="mt-3 flex items-center gap-3 justify-center">
                            <button onClick={() => handleEditCar(car.id)} className="p-3 rounded-md border-red-700 border text-red-700 w-32">Edit</button>
                            <button onClick={() => handleDelele(car.id)} className="p-3 rounded-md text-white bg-green-500 w-32">Delete</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
      ): (
        <div className="text-center p-4">
          <h5 className="text-gray-700 font-bold">No cars available</h5>
          <p className="text-gray-600 text-sm">Please check back later.</p>
        </div>
      )}

        </div>

    )

}