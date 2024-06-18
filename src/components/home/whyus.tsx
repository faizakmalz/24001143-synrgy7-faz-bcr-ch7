const  WhyUs = () => {
    return (
        <section id="why-us" className="py-24 mb-8 px-[10%]">
            <div className="container">
                <div className="why-us--header text-center mb-10">
                <h2 className="text-3xl font-bold">Why Us?</h2>
                <p className="text-lg">Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className="cards-container flex flex-col lg:flex-row items-center justify-between">
                {/* cards */}
                <div className="mycard bg-white shadow-md p-5 m-2 rounded">
                    <div className="card-body text-center">
                    <img src="https://i.ibb.co/TR7GWtk/icon-complete.png" alt="thumb-up-icon" className="mb-3 mx-auto" />
                    <h5 className="card-title mb-3 font-bold">Mobil Lengkap</h5>
                    <p className="card-text">
                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                        terawat
                    </p>
                    </div>
                </div>
                {/* cards */}
                <div className="mycard bg-white shadow-md p-5 m-2 rounded">
                    <div className="card-body text-center">
                    <img src="https://i.ibb.co/LpDVtSH/icon-price.png" alt="price-icon" className="mb-3 mx-auto" />
                    <h5 className="card-title mb-3 font-bold">Harga Murah</h5>
                    <p className="card-text">
                        Harga murah dan bersaing, bisa bandingkan harga kami dengan
                        rental mobil lain
                    </p>
                    </div>
                </div>
                {/* cards */}
                <div className="mycard bg-white shadow-md p-5 m-2 rounded">
                    <div className="card-body text-center">
                    <img src="https://i.ibb.co/5hcdbpw/icon-24hrs.png" alt="time-icon" className="mb-3 mx-auto" />
                    <h5 className="card-title mb-3 font-bold">Layanan 24 Jam</h5>
                    <p className="card-text">
                        Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                        tersedia di akhir minggu
                    </p>
                    </div>
                </div>
                {/* cards */}
                <div className="mycard bg-white shadow-md p-5 m-2 rounded">
                    <div className="card-body text-center">
                    <img src="https://i.ibb.co/KLYChwX/icon-professional.png" alt="profesional-icon" className="mb-3 mx-auto" />
                    <h5 className="card-title mb-3 font-bold">Sopir Profesional</h5>
                    <p className="card-text">
                        Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                        tepat waktu
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>

    );
}
export default WhyUs;