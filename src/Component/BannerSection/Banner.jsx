import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            className='sm:h-[400px] md:h-[400px] lg:h-[600px] z-10'>
            <SwiperSlide >
                <img className='relative w-screen h-full' src="https://i.ibb.co/SXGZDxW/Moonrise-over-kuala-lumpur.jpg" alt="" />
                <div className='absolute hidden lg:block bg-white p-8 rounded-2xl left-[40%] top-[40%]'>
                    <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Do You Want To Go <br /> Here? <span className='  text-yellow-500'>Booking Now</span></h1>
                    <p className='mt-4'> Malaysia: Kuala Lumpur It is the largest city in the <br /> country, It is a beauty in Malaysia</p>
                </div>
            </SwiperSlide>

            

            <SwiperSlide  >
                <img className='relative w-screen h-full' src="https://i.ibb.co/d6X0F8r/375579941-2021-dec-16-11-46-49-000000-Chiang-Mai.jpg" alt="" />
                <div className='absolute hidden lg:block bg-white p-8 rounded-2xl left-[40%] top-[40%]'>
                    <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Do You Want To Go <br />
                        Here? <span className='text-yellow-500'>Booking Now</span></h1>
                    <p className='mt-4'>Chiang Mai is the largest city in northern <br /> Thailand, the capital of Chiang Mai province <br /> and the second  largest city in Thailand.</p>
                </div>
            </SwiperSlide>

            <SwiperSlide >
                <img className='relative w-screen h-full' src="https://i.ibb.co/tJ7VqbS/bara-travelling-borobudur-temple-in-indonesia-the-worlds-largest-buddhist-temple-16.jpg" alt="" />
                <div className='absolute hidden lg:block bg-white p-8 rounded-2xl left-[40%] top-[40%]'>
                    <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' > Do You Want To Go <br />
                        Here? <span className='text-yellow-500'>Booking Now</span></h1>
                    <p className='mt-4'>Borobudur is the largest Buddhist temple <br /> in the world, and ranks with Bagan in Myanmar <br /> and Angkor Wat in Cambodia as one of the</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <img className='relative w-screen h-full' src="https://i.ibb.co/262wX2d/Angkor-Wat-Temple.jpg" alt="" />
                <div className='absolute hidden lg:block bg-white p-8 rounded-2xl left-[40%] top-[40%]'>
                    <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >
                        Do You Want To Go <br />
                        Here? <span className='text-yellow-500'>Booking Now</span></h1>
                    <p className='mt-4'>The ruins of Angkor are located amid  <br />forests and farmland north of the Great Lake</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img className='relative w-screen h-full ' src="https://i.ibb.co/kHjhfFG/Exploring-Coxs-Bazar.jpg" alt="" />
                <div className='absolute hidden lg:block bg-transparent border border-white text-white p-8 rounded-2xl left-[40%] top-[40%]'>
                    <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Do You Want To Go <br />
                        Here? <span className='text-yellow-500'>Booking Now</span></h1>
                    <p className='mt-4'>Cox’s Bazar is a town on the southeast coast <br /> of Bangladesh.  It’s known for its very long,<br />  sandy beachfront, stretching from Sea Beach <br />   in the north to Kolatoli Beach in the south. </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='relative w-screen h-full ' src="https://i.ibb.co/1R6fw9m/Halong-Bay-aa0f7e71a1db.jpg" alt="" />
                <div className='absolute hidden lg:block bg-transparent border border-white text-white p-8 rounded-2xl left-[40%] top-[40%]'>
                    <h1 className='font-semibold text-xl md:text-2xl md:font-bold lg:text-3xl lg:font-bold' >Do You Want To Go <br /> Here? <span className='  text-yellow-500'>Booking Now</span>
                    </h1>
                    <p className='mt-4'>Hạ Long Bay has an area of around 1,553 km2 (600 sq mi),<br /> including 1,969 islets, most of which are limestone.</p>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Banner;