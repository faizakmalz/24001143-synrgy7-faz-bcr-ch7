
"use client";

import { Sidebar } from "flowbite-react";

const Navbar = () => {
  return (
    <div className="flex">
        <div className="h-full px-6 bg-[#0D28A6]">
            <div></div>
            <div></div>
        </div>
        <div className="pl-2">
            <Sidebar aria-label="Sidebar with logo branding example" className="">
                <Sidebar.Logo href="#" img=".">
                    Dashboard
                </Sidebar.Logo>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                    <Sidebar.Item href="/dashboard">
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/dashboard/cars">
                        Cars
                    </Sidebar.Item>
                    <Sidebar.Item href="/dashboard/addcar">
                        Add Cars
                    </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    </div>
    
  );
}

export default Navbar;
