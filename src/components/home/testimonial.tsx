import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
    return (
        
        <section className="testimonial px-[13%] mb-16">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold mb-2">Testimonial</h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod
                    </p>
                </div>
                <div className="my-8 w-[619px] mx-auto">
                    
                        <div className=" flex items-center">
                            <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={100}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide>
                                    <div className="flex bg-[#F1F3FF] shadow-lg rounded-lg px-14 py-8 gap-8 w-[619px] h-[270px]">
                                        <div className=" mb-4 flex-none w-36 flex items-center">
                                            <img src="https://i.ibb.co/5BWcpLN/testimoni-foto1.png" alt="testimonial user image" className="rounded-full w-24 h-24 mx-auto" />
                                        </div>
                                        <div className=" flex flex-col justify-start flex-1">
                                            <div className="rating-stars flex justify-start mb-4">
                                                <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                                <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                                <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                                <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                                <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                            </div>
                                            <div className="text-left">
                                                <p className="text-gray-600 mb-4">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Vitae ipsam obcaecati optio minima facilis quaerat, quis,
                                                    culpa harum deleniti ea quisquam alias reprehenderit cum
                                                    non nam fugiat corrupti veritatis ut!
                                                </p>
                                                <h3 className="username font-semibold">Trisna Wahyudi 20, Sidoarjo</h3>
                                            </div>
                                        </div>
                                    </div>    
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="flex  bg-[#F1F3FF] shadow-lg rounded-lg px-14 py-8 gap-8 w-[619px] h-[270px]">
                                    <div className=" mb-4 flex-none w-36 flex items-center">
                                        <img src="https://i.ibb.co/5BWcpLN/testimoni-foto1.png" alt="testimonial user image" className="rounded-full w-24 h-24 mx-auto" />
                                    </div>
                                    <div className=" flex flex-col justify-start flex-1">
                                        <div className="rating-stars flex justify-start mb-4">
                                            <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                            <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                            <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                            <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                            <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-gray-600 mb-4">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Vitae ipsam obcaecati optio minima facilis quaerat, quis,
                                                culpa harum deleniti ea quisquam alias reprehenderit cum
                                                non nam fugiat corrupti veritatis ut!
                                            </p>
                                            <h3 className="username font-semibold">Trisna Wahyudi 20, Sidoarjo</h3>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className="flex  bg-[#F1F3FF] shadow-lg rounded-lg px-14 py-8 gap-8 w-[619px] h-[270px]">
                                    <div className=" mb-4 flex-none w-36 flex items-center">
                                        <img src="https://i.ibb.co/5BWcpLN/testimoni-foto1.png" alt="testimonial user image" className="rounded-full w-24 h-24 mx-auto" />
                                    </div>
                                    <div className=" flex flex-col justify-start flex-1">
                                        <div className="rating-stars flex justify-start mb-4">
                                            <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                            <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                            <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                            <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                            <img src="https://i.ibb.co/2k5tyXW/Star.png" alt="Rating stars" className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-gray-600 mb-4">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Vitae ipsam obcaecati optio minima facilis quaerat, quis,
                                                culpa harum deleniti ea quisquam alias reprehenderit cum
                                                non nam fugiat corrupti veritatis ut!
                                            </p>
                                            <h3 className="username font-semibold">Trisna Wahyudi 20, Sidoarjo</h3>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>   
      
                                                          
                            </Swiper>            
                        </div>
                </div>
            </div>
        </section>

    );
}
export default Testimonial;