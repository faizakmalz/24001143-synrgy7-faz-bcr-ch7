import { useNavigate } from "react-router";

function Banner() {
    const navigate = useNavigate();

    return (
        <section className="px-[13%]">
            <div className="bg-[#0D28A6] py-16 rounded-[16px] mx-auto text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Sewa Mobil di Bali Sekarang</h1>
                <p className="text-white mb-6 mx-16 px-64">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button onClick={() => navigate('/cars')} className="btn bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Mulai Sewa Mobil</button>
            </div>
        </section>
    );
}

export default Banner;