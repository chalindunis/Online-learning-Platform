import React from 'react';
import banner2 from "../../../assets/home/cover2.jpeg"
const Hero2 = () => {
    return (
        <div className='min-h-screen  bg-cover' style={{ backgroundImage:  `url(${banner2})` }}>
            <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60">
                <div className="">
                    <div className="space-y-4">
                        <h3 className='md:text-4xl text-2xl'>WE PROVIDE</h3>
                        <h1 className='md:text-7xl text-4xl font-bold '>Best Platform for Online Courses</h1>
                        <div className="md:w-1/2">
                            <p className=''>Everything you need to know find out with us. You can gain knowledge about new technologies and hands-on experiences. Welcome to explore the world!?</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-5">
                            <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>Join</button>
                            <button className='px-7 py-[10px] bg-opacity-80 hover:bg-white hover:text-black hover:outline-white duration-200  rounded-lg bg-transparent outline  font-bold uppercase'>View Courses</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;