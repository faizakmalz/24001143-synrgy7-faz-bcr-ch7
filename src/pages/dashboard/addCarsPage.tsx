import AddCarForm from '../../components/dashboard/addCars';
import DashboardLayout from './adminDashboard';
const AddCarPage: React.FC = () => {


  return (
    <DashboardLayout >
    <div className="ml-48 bg-[#F4F5F7] h-full">
        <h1><b className='text-[20px] font-bold'>Add Cars</b></h1>
        <div className='py-6 flex gap-2 items-center'>
            <div className='w-1 h-4 bg-blue-700'></div>
            <h2>Add Car Form</h2>
        </div>
        <div className='pb-24'>
          <AddCarForm/>
        </div>
    </div>
    </DashboardLayout>
  );
};

export default AddCarPage;
