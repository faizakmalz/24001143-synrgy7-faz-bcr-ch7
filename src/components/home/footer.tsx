const Footer = () => {
    return (
        <footer className="pb-32 px-[15%] ">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">
                <div className="address">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="navigation flex flex-col space-y-2">
                    <ul className="space-y-2">
                        <li><a href="#our-services" className="hover:underline"> Our services</a></li>
                        <li><a href="#why-us" className="hover:underline">Why Us </a></li>
                        <li><a href="#testimonial" className="hover:underline">Testimonial </a></li>
                        <li><a href="#faq-section" className="hover:underline">FAQ </a></li>
                    </ul>
                </div>
                <div className="sosmed">
                    <p className="mb-2">Connect with us</p>
                    <div className="icon-container flex space-x-4">
                        <img sizes="32px" className="sosmed-icon" src="https://i.ibb.co/3TQ1Bgh/icon-facebook.png" alt="facebook-icon" />
                        <img className="sosmed-icon" src="https://i.ibb.co/TqJsYch/icon-instagram.png" alt="instagram-icon" width="32px" />
                        <img className="sosmed-icon" src="https://i.ibb.co/Dfw5cLB/icon-twitter.png" alt="twitter-icon" width="32px" />
                        <img className="sosmed-icon" src="https://i.ibb.co/tY0TB5Z/icon-mail.png" alt="mail-icon" width="32px" />
                        <img className="sosmed-icon" src="https://i.ibb.co/z79LS0p/icon-twitch.png" alt="twictch-icon" width="32px" />
                    </div>
                </div>
                <div className="copyright">
                    <p className="mb-2">Copyright Binar 2022</p>
                    <a href="#home">
                        <img src="https://i.ibb.co/MkygZR1/bcr-logo.png" alt="logo" />
                    </a>
                </div>
            </div>
        </footer>
    
    )
}

export default Footer;