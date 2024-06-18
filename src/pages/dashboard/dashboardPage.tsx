import TransactionTable, { CarsTable } from '../../components/dashboard/dashboardTable';
import DashboardLayout from '../dashboard/adminDashboard';
const DashboardPage: React.FC = () => {


  return (
    <DashboardLayout >
    <div className="ml-48 bg-[#F4F5F7] h-full">
        <h1><b className='text-[20px] font-bold'>Dashboard</b></h1>
        <div className='py-6 flex gap-2 items-center'>
            <div className='w-1 h-4 bg-blue-700'></div>
            <h2>List Order</h2>
        </div>
        <div className='pb-12'>
            <TransactionTable/>
        </div>
        <div className='py-6 flex gap-2 items-center'>
            <div className='w-1 h-4 bg-blue-700'></div>
            <h2>Cars</h2>
        </div>
        <div className='pb-12'>
            <CarsTable/>
        </div>
    </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
