import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import pic from "../../public/Images/photo.avif"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaTelegram } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { ReactTyped } from "react-typed";


function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 m-y-20 z-index-1'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I am a</h1>
                            <ReactTyped className='text-red-700 font-bold w-1'
                                strings={["Developer.", "programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus neque ad iste libero sunt asperiores, officia possimus quas enim error?</p>
                        <br />
                        {/* Social Media Icon */}
                        <div className='flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-between'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Availabla On</h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                        <FaFacebook className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                       <a href="https://www.linkedin.com/" target="_blank">
                                        <FaLinkedinIn className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                       <a href="https://www.youtube.com/" target="_blank">
                                        <IoLogoYoutube className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.t.me/" target="_blank">
                                        <FaTelegram className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently Working on</h1>
                                <div className='flex space-x-5'>
                                    <FaHtml5 className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaCss3Alt className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaBootstrap className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <RiTailwindCssFill className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <IoLogoJavascript className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                        <img src={pic} className="rounded-full md:w-[450] md:h-[450]" alt="" />
                    </div>
                </div>
                <br />
                <hr />
            </div>
        </>
    )
}

export default Home
