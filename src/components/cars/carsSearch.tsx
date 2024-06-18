import { useEffect, useState } from "react";
import Car from "../../types/types";
import axios from "axios";



function FormSearchCar() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filterCriteria, setFilterCriteria] = useState({
    available: true,
    capacity: 0,
  });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const capacity = parseInt(formData.get("capacity") as string, 10)
  
    // Update filterCriteria correctly using functional state update
    setFilterCriteria({available: true, capacity: capacity});
  
    // const filteredCars = cars.filter((car) => {
    //     return (
    //       (!filterCriteria.available|| car.available === filterCriteria.available) &&
    //       (!filterCriteria.capacity || car.capacity === filterCriteria.capacity)
    //     );
    //   });
    
    // setCars(filteredCars);

    try {
      const response = await axios.post("http://localhost:3002/api/v1/filtered-cars", filterCriteria);
      setCars(response.data);
    } catch (error: any) {
      console.error("Error filtering cars:", error.message);
    }
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:3002/api/v1/cars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl p-4">
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <div className="form-group">
                  <label
                    htmlFor="driver"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Tipe Driver
                  </label>
                  <select
                    name="driver"
                    id="driver"
                    className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="" disabled selected hidden>
                      Pilih Tipe Driver
                    </option>
                    <option value="dengan-supir">Dengan Supir</option>
                    <option value="tanpa-supir">Tanpa Supir</option>
                  </select>
                </div>
              </div>
              <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <div className="form-group">
                  <label
                    htmlFor="tanggal"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Tanggal
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="tanggal"
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <div className="form-group">
                  <label
                    htmlFor="jemput"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Waktu Jemput/Ambil
                  </label>
                  <input
                    type="time"
                    name="jemput"
                    id="jemput"
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <div className="form-group">
                  <label
                    htmlFor="jmlPenumpang"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Jumlah Penumpang
                  </label>
                  <input
                    type="number"
                    name="capacity"
                    id="jmlPenumpang"
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Tentukan kapasitas"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <div className="form-group">
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
        <div className="w-full mx-auto px-36 mb-52 ">
        {(cars.length > 0)? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cars.map((car) => (
            <div key={car.id} className="card shadow-md rounded overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={car.image}
                alt={car.model}
              />
              <div className="p-4">
                <h5 className="text-gray-700 font-bold mb-2">{car.model}</h5>
                <p className="text-gray-600 text-sm mb-2">{car.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 text-sm">Capacity: {car.capacity}</p>
                  <p className="text-green-500 font-bold">Rp {car.rentPerDay} / day</p>
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
      {/* Display filtered cars */}
      
    </div>
  );
}

export default FormSearchCar;