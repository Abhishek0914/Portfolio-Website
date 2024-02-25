import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-slate-400 flex justify-center items-center p-4'>
        <form method="POST" action='https://getform.io/f/YerJZBeO' className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-slate-300 text-black'>Contact me</p>
                <p className='py-4'>Fill out this form to get in touch</p>
            </div>
            <input type='text' placeholder='Name' name='name' />
            <input className='my-2 p-2 bg-white ' type='email' placeholder='Email' name='email'/>
            <textarea type='text' placeholder='Message' name='message'rows="10" p-2 bg-white/><br/>
            <button className='border-2 text-white py-2 hover:bg-black px-4 mx-auto flex items-center ' onReset={true}>Let's collaborate!</button>
        </form>

    </div>
  )
}

export default Contact