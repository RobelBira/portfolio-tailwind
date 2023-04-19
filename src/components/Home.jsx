import React from "react"
import HeroImage from "../assets/photo1.jpg"
import {AiOutlineArrowRight} from "react-icons/ai"
import {Link } from "react-scroll"

const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full bg-gradient-to-b from-black via-gray-800 to-gray-700">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full ">
            <h2 className="text-3xl sm:text-6xl font-bold text-white ">I'm a Front-end developer</h2>
           
            <p className="text-white py-4 max-w-md">HI, my name is ROBEL BIRA and this is my responsive React portfolio website from scratch using Tailwind CSS and deployed it to server. </p>

            <div>
                <Link to="portfolio" smooth duration={500} className= " group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio 
                    <span className="group-hover:rotate-90 duration-300 ">
                        <AiOutlineArrowRight size={25}
                        className="ml-1"
                        />
                        </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={HeroImage} alt="my profile"
            className="rounded-2xl mx-auto w-2/3  md:w-full "/>
        </div>
      </div>
        
    </div>
  )
}
export default Home