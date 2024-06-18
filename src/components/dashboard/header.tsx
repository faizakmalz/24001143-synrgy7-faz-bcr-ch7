import { useNavigate } from "react-router";
import { useSearchContext } from "../../context/searchContext";
import axiosInstance from "../../utils/axios";

const Header = () => {
    const { handleSearchChange } = useSearchContext();
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchChange(e.target.value);
    };

    const handleLogout =  () => {
      localStorage.removeItem('token');
      axiosInstance.post('/logout');
      navigate('/home');
    };

    
    return (
        <>
      <div className="ml-56 bg-base-100 flex py-6">
        <div className="flex-none mr-4">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
        </div>
        <div className="flex-none items-center gap-4">
          <div className="md:flex hidden gap-4">
            <input
              type="text"
              className="rounded-md border border-gray-300 px-3 py-1 focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Search..."
              onChange={handleChange}
            />
            <button className="rounded-md border border-indigo-300 px-3 py-1 text-indigo-500">
              Search
            </button>
            <button onClick={handleLogout} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Logout</button>
          </div>
        </div>
      </div>
    </>
    )
}

export default Header;