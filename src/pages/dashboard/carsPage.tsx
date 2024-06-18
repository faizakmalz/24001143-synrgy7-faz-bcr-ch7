import CarCards from '../../components/dashboard/cars';
import DashboardLayout from '../dashboard/adminDashboard';
const CarsListPage: React.FC = () => {


  return (
    <DashboardLayout >
    <div className="ml-48 bg-[#F4F5F7] h-full">
        <h1><b className='text-[20px] font-bold'>Cars List</b></h1>
        <div className='py-6 flex gap-2 items-center'>
            <div className='w-1 h-4 bg-blue-700'></div>
            <h2>List Cars</h2>
        </div>
        <div>
            <CarCards/>
        </div>
    </div>
    </DashboardLayout>
  );
};

export default CarsListPage;
