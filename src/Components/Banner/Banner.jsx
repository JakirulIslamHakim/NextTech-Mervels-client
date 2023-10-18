import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
    return (
        <div className='mt-2'>
            <h2 className='text-3xl '>Marquee</h2>
            <div className="hero h-[700px] rounded-2xl mt-4" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/wireless-technology-isometric-composition-poster_1284-15266.jpg?size=626&ext=jpg&ga=GA1.1.1619216500.1694888339&semt=ais)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000" data-aos-offset="200" className="max-w-md">
                    <h1 className="mb-5 text-3xl md:text-5xl  font-bold">Elevate Your Digital World</h1>
                    <p className="mb-5 text-">At ElevateTech, we are your launchpad to a universe of innovation and digital wonders. Dive into the future of technology and electronics. Explore, Innovate, and Elevate your tech experience</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;