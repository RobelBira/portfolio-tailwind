import {FaGithub,FaLinkedin,FaTwitter,FaInstagram} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"


const SocialLinks = () => {




  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
<ul>
    <li className="flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300">
<a href="https://www.linkedin.com" 
className="flex justify-between items-center w-full text-white">
            <> 
            LinkedIn <FaLinkedin size={20}/> 
            </>
            </a>
        </li>
        <li className="flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300">
<a href="https://github.com/RobelBira" className="flex justify-between items-center w-full text-white">
            <> 
            Github <FaGithub size={20}/> 
            </>
            </a>
        </li>
        <li className="flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300">
<a href="https://twitter.com/RobelBira" className="flex justify-between items-center w-full text-white">
            <> 
            Twitter <FaTwitter size={20}/> 
            </>
            </a>
        </li>
        <li className="flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300">
<a href="mailto:robelbira@gmail.com" className="flex justify-between items-center w-full text-white">
            <> 
            E-Mail <HiOutlineMail size={20}/> 
            </>
            </a>
        </li>
        <li className="flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300">
<a href="/robel_cv.pdf" className=" flex justify-between items-center w-full text-white">
            <> 
            Resume(CV)
       < BsFillPersonLinesFill size={20}/> 
            </>
            </a>
        </li>
        <li className="flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300">
<a href="https://www.instagram.com/robel_bira_11" className="flex justify-between items-center w-full text-white">
            <> 
            Instagram
       < FaInstagram size={20}/> 
            </>
            </a>
        </li>
        
</ul>
    </div>
  )
}
export default SocialLinks