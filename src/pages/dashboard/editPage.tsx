import EditCarForm from '../../components/dashboard/editCars';
import DashboardLayout from './adminDashboard';
const EditCarPage: React.FC = () => {


  return (
    <DashboardLayout >
    <div className="ml-48 bg-[#F4F5F7] h-full">
        <h1><b className='text-[20px] font-bold'>Edit Cars</b></h1>
        <div className='py-6 flex gap-2 items-center'>
            <div className='w-1 h-4 bg-blue-700'></div>
            <h2>Edit Car Form</h2>
        </div>
        <div className='pb-24'>
          <EditCarForm/>
        </div>
    </div>
    </DashboardLayout>
  );
};

export default EditCarPage;
