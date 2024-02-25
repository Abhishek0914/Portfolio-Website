import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-400">
    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-black'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-red '>Abhishek Bohra</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-red '>I am a Full Stack developer</h2>
        <h2 className='text-4xl sm:text-7xl font-bold text-blue-500 '>and a Data Science enthusiast.</h2>
        <p>I am a full-stack developer specializing in building 
            (and occasionally designing) exceptional digital experiences. 
            Currently, I'm focused on building responsive full-stack web applications.
            Also I take up data sets for some data analysis.</p>
        <div>
        <Link to='projects' smooth={true} duration={500}> 
            <buton className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-black">
               View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
            </buton></Link>
        </div>
    </div>
    </div>
  )
}

export default Home