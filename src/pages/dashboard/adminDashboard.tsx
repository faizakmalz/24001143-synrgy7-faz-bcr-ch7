import React from 'react';
import Navbar from '../../components/dashboard/navbar';
import Header from '../../components/dashboard/header';
import { SearchProvider } from '../../context/searchContext'; // Import the SearchProvider

interface DashboardProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardProps> = ({
  children,
}) => {
  return (
    <SearchProvider> {/* Wrap the SearchProvider around the components where you need search functionality */}
      <main className="grid grid-cols-12 bg-gray-100 h-full w-full bg-[#F4F5F7]">
        <Navbar />
        <div className="col-span-12 md:col-span-10 flex flex-col gap-y-4">
          <Header /> {/* Header component where you want to use search functionality */}
          <div className="flex flex-col gap-4 p-6">
            <div className="text-sm">
            </div>
            {children}
          </div>
        </div>
      </main>
    </SearchProvider>
  );
};

export default DashboardLayout;
