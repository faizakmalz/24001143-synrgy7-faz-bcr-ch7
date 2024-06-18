// import Banner from "../../components/user/banner"
// import Asked from "../../components/landingpages/faq"
// import Footer from "../../components/landingpages/footer"
// import OurService from "../../components/landingpages/ourservices"
// // import Testimonial from "../../components/landingpages/testinial"
// import WhyUs from "../../components/landingpages/whyus"
// import HeroSection from "../../components/user/herosection"
// import HomeHeader from "../../components/user/navbar"
// import TestimoniCarouser from "../../components/landingpages/carouser"
// import { TUserInfoContext, UserInfoContext } from "../../context/userInfo";
// import { ContextType, useContext, Context } from 'react'

import Banner from "../../components/home/banner";
import FAQ from "../../components/home/faq";
import Footer from "../../components/home/footer";
import HeroSection from "../../components/home/hero";
import HomeHeader from "../../components/home/navbar";
import OurService from "../../components/home/our-service";
import Testimonial from "../../components/home/testimonial";
import WhyUs from "../../components/home/whyus";


const HomePage = () => {
//   const {userInfo} = useContext(UserInfoContext) as ContextType<Context<TUserInfoContext>>
//     const username = userInfo ? userInfo.name || "" : "";
    return (
        <>
            
            <div className="bg-[#F1F3FF]">
                <HomeHeader />
                <HeroSection />
            </div>
            <OurService />
            <WhyUs />
            <Testimonial />
            <Banner />
            <FAQ />
            <Footer />

      
        </>
    );
}

export default HomePage;
