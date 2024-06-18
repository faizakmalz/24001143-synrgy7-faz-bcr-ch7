import { useNavigate } from "react-router";

const HeroSection = () => {
    const navigate = useNavigate();


    return (
        <section className="bg-[#F1F3FF] w-full mb-24 ">
           <div className="flex flex-col md:flex-row pl-24">
              <div className="flex flex-1 pb-32 flex-col items-start gap-4 min-[320px]:px-10 md:pl-8 min-[320px]:pl-5 lg:pl-24 pb-6 md:pb-10 justify-center">
                    
                    <h1 className="text-left">
                        <b className="text-[36px]">Sewa dan Rental Mobil <br/> terbaik di Sidoarjo</b>
                    </h1>
                    <p className="pr-4 md:pr-60 text-[14px]">
                      Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                        terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                    <button onClick={() => navigate('/cars')} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 mt-4">Mulai Sewa Mobil</button>

                </div>
                <div className="flex flex-1 justify-end w-[50%] items-end justify-items-end w-full">
                    <img src="https://i.ibb.co/Krg5rVN/img-car.png" />
                </div>
            </div>
        </section>
    );
}
export default HeroSection;