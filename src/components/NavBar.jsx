import React,{useState} from 'react'
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll';

const NavBar = () => {
    const [nav,setNav]=useState(false)
    const handleClick=()=>setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300'>
            <h1 className='text-5xl'>Abhishek</h1>

            {/* menu */}
                <ul className='hidden md:flex'>
                   <li className='py-6 text-2xl'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                   <li className='py-6 text-2xl'> <Link to="about" smooth={true} duration={500}>About</Link></li>
                   <li className='py-6 text-2xl'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                   <li className='py-6 text-2xl'> <Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                   <li className='py-6 text-2xl'> <Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/> : <FaTimes/> }
            </div>

            {/* Mobile Menu */}
            <div className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>

                <ul className='py-6 text-4xl'>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
                   <li className='py-6 text-4xl'> <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
                   <li className='py-6 text-4xl'> <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
                   <li className='py-6 text-4xl'> <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>

            </div>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-white ' href='https://www.linkedin.com/in/abhishek-bohra-5b803a249/' target='blank'> 
                        LinkedIn<FaLinkedin size={30}/>
                            </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                        <a className='flex justify-between items-center w-full text-white ' href='https://github.com/Abhishek0914' target='blank'>
                            GitHub<FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
                        <a className='flex justify-between items-center w-full text-white ' href='mailto:abhishekbohra8703@gmail.com'>
                            Email  <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-500'>
                        <a className='flex justify-between items-center w-full text-white ' href='/resume.pdf' download={true}>
                            Resume  <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default NavBar