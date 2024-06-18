import { useNavigate } from "react-router";


const HomeHeader = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const handleChange = () => {
        if (token) {
            navigate('/dashboard')

        }
        else {
            navigate('/login')

        }
    }

return (
<div className="bg-[#F1F3FF]">
<nav className="bg-transparent mb-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse min-[320px]:w-[100px] h-8 bg-blue-900 md:ml-10 min-[320px]:ml-5 lg:ml-0">
                </a>
                
                <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 0">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                
                <aside id="default-sidebar" className="md:hidden fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center  p-2 text-gray-900 rounded-lg ">
                                
                                <span className="font-bold">BCR</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center  p-2 text-gray-900 rounded-lg ">
                                
                                <span className="font-normal">Our Service</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center  p-2 text-gray-900 rounded-l">
                                
                                <span className="font-normalflex-1">Why Us</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center  p-2 text-gray-900 rounded-lg">
                                
                                <span className="font-normalflex-1">Testimonials</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center  p-2 text-gray-900 rounded-lg">
                                
                                <span className="font-normalflex-1">FAQ</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex p-2 text-white rounded-lg">
                                
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 mt-4">Mulai Sewa Mobil</button>
                            </a>
                        </li>
                    </ul>
                    </div>
                </aside>

                <div className="hidden w-full md:block md:w-auto py-8" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 items-center">
                        <li>
                            <a href="#" className="block py-2 px-3 rounded md:hover:text-blue-900  md:p-0" aria-current="page">Our Service</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 rounded md:hover:text-blue-900 md:p-0">Why Us</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 rounded md:hover:text-blue-900 md:p-0">Testimonials</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 rounded md:hover:text-blue-900 md:p-0">FAQ</a>
                        </li>
                        <li >
                        <button onClick={handleChange} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Register</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</div>

)
};

export default HomeHeader;
