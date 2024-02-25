import React from 'react'
import HTML from "../assets/html.png";
import AWS from "../assets/aws.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACTIMG from "../assets/react.png";
import NODE from "../assets/node.png";
import GITHUB from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import MONGO from "../assets/mongo.png";
import EXPRESS from "../assets/express-js-icon-12.png"
 

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen bg-slate-400'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-slate-300'>Skills</p>
                <p className='py-4'>// These are the technologies I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-orange-600 hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                <p>HTML</p>
            </div>
            <div className='shadow-md shadow-blue-500 hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                <p>CSS</p>
            </div>
            <div className='shadow-md shadow-yellow-400 hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT icon"/>
                <p>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-green-300 hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon"/>
                <p>Tailwind</p>
            </div>
            <div className='shadow-md shadow-blue-300 hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={REACTIMG} alt="React icon"/>
                <p>React</p>
            </div>
            <div className='shadow-md shadow-green-400 hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={NODE} alt="Node icon"/>
                <p>NodeJS</p>
            </div>
            <div className='shadow-md shadow-green-500 hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={MONGO} alt="MondgoDB icon"/>
                <p>MongoDB</p>
            </div>
            <div className='shadow-md shadow-orange-400 hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={AWS} alt="AWS icon"/>
                <p>AWS</p>
            </div>
            <div className='shadow-md shadow-slate-200 hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={GITHUB} alt="GitHub icon"/>
                <p>GitHub</p>
            </div>
            <div className='shadow-md shadow-black hover:scale-110 duration-300'>
                <img className='w-20 mx-auto' src={EXPRESS} alt="ExpressJS icon"/>
                <p>ExpressJS</p>
            </div>
        </div>
        </div>
        

    </div>
  )
}

export default Skills