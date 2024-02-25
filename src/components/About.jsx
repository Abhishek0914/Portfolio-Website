import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-slate-400 text-black' >
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-slate-300
                    '>About</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-2xl font-semibold text-blue-500'>Hi I am Abhishek, nice to meet you. Please feel free to take a look around.</p>
                    </div>
                    <div className='sm:text-right pb-8 pl-4'>
                        Abhishek is a dedicated B.Tech student specializing in Computer Science Engineering at Jaypee Institute of Information Technology, Noida. Abhishek possesses understanding of data structures and algorithms. He is proficient in web development technologies, including HTML, CSS, JavaScript, and Tailwind CSS. Abhishek has intermediate-level expertise in React, allowing him to develop dynamic and interactive user interfaces. His commitment to continuous learning and growth fuels his drive to seek challenging opportunities where he can contribute to a company's success.


                        In my free time, I enjoy playing soccer and watching psychological thrillers as well as crime documentaries. I also seek challenges online so one of my hobies is Online Gaming. These activities allow me to unwind and stimulate my mind with new ideas and perspectives. I find that they also help me to think creatively and solve problems more effectively, which can be useful in my work as a developer.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About