const OurService = () => {
    return (
        <section id="our-services" className="my-16 mx-[15%]">
            <div className="flex flex-col lg:flex-row items-center justify-around gap-24">
                <div className="w-[1259px]">
                    <img src="https://i.ibb.co/F0mb2BC/img-service.png" alt="Why Us Illustration" className="img-fluid" />
                </div>
                <div className="flex flex-col gap-4 text-left my-5">
                    <div>
                        <h2 className="mb-4 text-bold text-[24px] font-bold">Best Car Rental for any kind of trip in Sidoarjo!</h2>
                        <p>
                            Sewa mobil di Bali bersama Binar Car Rental jaminan harga lebih
                            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
                            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
                            dll
                        </p>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center mt-3">
                        <img src="https://i.ibb.co/XVBQWxf/list-style.png" alt="list check" />
                        <p className="ml-2">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        </div>
                        <div className="flex items-center mt-3">
                        <img src="https://i.ibb.co/XVBQWxf/list-style.png" alt="list check" />
                        <p className="ml-2">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        </div>
                        <div className="flex items-center mt-3">
                        <img src="https://i.ibb.co/XVBQWxf/list-style.png" alt="list check" />
                        <p className="ml-2">Sewa Mobil Jangka Panjang Bulanan</p>
                        </div>
                        <div className="flex items-center mt-3">
                        <img src="https://i.ibb.co/XVBQWxf/list-style.png" alt="list check" />
                        <p className="ml-2">Gratis Antar - Jemput Mobil di Bandara</p>
                        </div>
                        <div className="flex items-center mt-3">
                        <img src="https://i.ibb.co/XVBQWxf/list-style.png" alt="list check" />
                        <p className="ml-2">Layanan Airport Transfer / Drop In Out</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurService;