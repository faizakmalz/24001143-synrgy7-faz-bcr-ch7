
// import { ContextType, useContext, Context } from 'react'
import HomeHeader from '../../components/home/navbar';
import HeroSection from '../../components/home/hero';
import FormSearchCar from '../../components/cars/carsSearch';
import { Footer } from 'flowbite-react';


function CarsPage() {
    // const {userInfo} = useContext(UserInfoContext) as ContextType<Context<TUserInfoContext>>
    // const username = userInfo ? userInfo.name || "" : "";
    return (
        <>
            <div className="bg-[#F1F3FF]">
                <HomeHeader />
                <HeroSection />
            </div>
            <FormSearchCar />
            <Footer />
        </>
    );
}

export default CarsPage;

