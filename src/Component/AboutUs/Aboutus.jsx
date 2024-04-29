import { Helmet } from "react-helmet";
import 'animate.css';

const Aboutus = () => {
    return (
        <div className="text-white">
            <Helmet><title>AboutUs</title></Helmet>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">We want to introduce you and our customers to the most beautiful places in the world. Let's discover the new world. Now is the time to spread yourself out. Why get out now?</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/tH27dZ0/travel-agencies-in-oman.jpg" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Client</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">A truest client is not just a consumer of our services but a trusted partner in our journey. They are the embodiment of our values, demonstrating integrity, transparency, and collaboration in every interaction. They provide honest feedback that helps us continually improve our products and services. We prioritize their needs and strive to exceed their expectations, building a relationship based on mutual respect and trust. Together, we navigate challenges, celebrate successes, and work towards shared goals, knowing that their success is our success</p>
                </div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="" src="https://i.ibb.co/L07DB53/5e520a5f2e6e956a5e5e42d80d813f01w-c1558471212rd-w832-h468-r4-q80.jpg" alt="Alexa featured Img" />
                            
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alex</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="" src="https://i.ibb.co/PWM9fKd/Room-to-IMprove-1.jpg" alt="Olivia featured Img" />
                           
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="" src="https://i.ibb.co/fxcBGpm/385-1.webp" alt="Claint James Guiral featued Img" />
                            
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">James Guirale</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="" src="https://i.ibb.co/xghDKmn/82847b28-c433-11ed-9c16-0210609a3fe2.jpg" alt="Elijah featured img" />
                            
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah mj</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Aboutus;