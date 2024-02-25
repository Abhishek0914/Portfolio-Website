import React from 'react'
import iFly from "../assets/iFly_logo.png";
import { BsAlignTop } from 'react-icons/bs';
import iFlyPricePredictor from "../assets/logo.png"
import captiongenerator from "../assets/caption_generator.png"

const Projects = () => {

  return (
    <div name="projects" className='w-full md:h-screen text-black bg-slate-400'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-black border-slate-200'>Projects</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
    
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-4'>
            
            <div class="content-div" style={{backgroundImage: `url(${iFly})` }} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-black tracking-wider'>
                      Online Flight booking system
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='http://ifly-flights.s3-website.ap-south-1.amazonaws.com/home'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg '>Demo</button>
                        </a>
                        <a href='https://github.com/Abhishek0914/iFly_React_Client'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-500 text-white font-bold text-lg'>Code</button>
                        </a>
                    </div>

                </div>
            </div>
            <div class="content-div" style={{backgroundImage: `url(${iFlyPricePredictor})` }} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-black tracking-wider'>
                      Online Flight Price Predictor system
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='http://ifly-flights.s3-website.ap-south-1.amazonaws.com/home'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-lg '>Demo</button>
                        </a>
                        <a href='https://github.com/Abhishek0914/iFly_React_Client'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-500 text-white font-bold text-lg'>Code</button>
                        </a>
                    </div>

                </div>
            </div>
            <div class="content-div" style={{backgroundImage: `url(${captiongenerator})`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-black tracking-wider'>
                      Caption Generator
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/Abhishek0914/Caption-generator'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-500 text-white font-bold text-lg'>Code</button>
                        </a>
                    </div>

                </div>
            </div>
            <div class="content-div" className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-black tracking-wider'>
                      
                    </span>
                    <div className='pt-8 text-center'>
                        <a href=''>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-500 text-white font-bold text-lg'>Code</button>
                        </a>
                    </div>

                </div>
            </div>
            <div class="content-div" className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-black tracking-wider'>
                      
                    </span>
                    <div className='pt-8 text-center'>
                        <a href=''>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-500 text-white font-bold text-lg'>Code</button>
                        </a>
                    </div>

                </div>
            </div>
            <div class="content-div" className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-black tracking-wider'>
                      
                    </span>
                    <div className='pt-8 text-center'>
                        <a href=''>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-500 text-white font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
            

            


    </div>
  )
}

export default Projects