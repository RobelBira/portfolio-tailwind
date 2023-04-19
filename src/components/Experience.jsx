import PortImage1 from "../assets/html.png"
import PortImage2 from "../assets/css.png"
import PortImage3 from "../assets/javascript.png"
import PortImage4 from "../assets/react.png"
import PortImage5 from "../assets/github.png"
import PortImage6 from "../assets/tailwind.png"
import PortImage7 from "../assets/node.png"
import PortImage8 from "../assets/mongodb.png"

const Experience = () => {

// const techs=[
//     {
//         id:1,
//      src: PortImage1,
//      title: 'HTML',
//      style: 'shadow-orange-500'
//     },
//     {
//         id:2,
//      src: PortImage2,
//      title: 'CSS',
//      style: 'shadow-blue-500'
//     },
//     {
//         id:3,
//      src: PortImage3,
//      title: 'JavaScript',
//      style: 'shadow-yellow-500'
//     },
//     {
//         id:4,
//      src: PortImage4,
//      title: 'React',
//      style: 'shadow-blue-600'
//     },
//     {
//         id:5,
//      src: PortImage5,
//      title: 'TailWind',
//      style: 'shadow-sky-400'
//     },
//     {
//         id:6,
//      src: PortImage6,
//      title: 'GitHub',
//      style: 'shadow-gray-400'
//     },

// ]

  return (
    <div name="experience"
    className=" bg-gradient-to-b from-gray-800 to-black  w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
    <div>
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2 ">
            Experience
        </p>
        <p  className="py-6">These are the technologies i have worked with</p>
    </div>





    <div 
  className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">


<div
className=" shadow-md shadow-orange-500 rounded-lg duration-500 hover:scale-105 py-2 ">
            <img src={PortImage1} alt=""
            className="w-20 mx-auto">
               
            </img>
            <p className="mt-4">Html</p>
        </div>
        <div
className=" shadow-md shadow-blue-500 rounded-lg duration-500 hover:scale-105 py-2 ">
            <img src={PortImage2} alt=""
            className="w-20 mx-auto">
               
            </img>
            <p className="mt-4">css</p>
        </div>
        <div
className=" shadow-md shadow-yellow-500 rounded-lg duration-500 hover:scale-105 py-2 ">
            <img src={PortImage3} alt=""
            className="w-20 mx-auto">
               
            </img>
            <p className="mt-4">JavaScript</p>
        </div>
        <div
className=" shadow-md shadow-blue-300 rounded-lg duration-500 hover:scale-105 py-2 ">
            <img src={PortImage4} alt=""
            className="w-20 mx-auto">
               
            </img>
            <p className="mt-4">React</p>
        </div>
        <div
className=" shadow-md shadow-red-600 rounded-lg duration-500 hover:scale-105 py-2 ">
            <img src={PortImage5} alt=""
            className="w-20 mx-auto">
               
            </img>
            <p className="mt-4">Github</p>
        </div>
        <div
className=" shadow-md shadow-green-500 rounded-lg duration-500 hover:scale-105 py-2 ">
            <img src={PortImage6} alt=""
            className="w-20 mx-auto">
               
            </img>
            <p className="mt-4">TailWind</p>
        </div>
        <div
className=" shadow-md shadow-orange-100 rounded-lg duration-500 hover:scale-105 py-2 ">
            <img src={PortImage7} alt=""
            className="w-20 mx-auto">
               
            </img>
            <p className="mt-4">Nodejs</p>
        </div>
        <div
className=" shadow-md shadow-purple-500 rounded-lg duration-500 hover:scale-105 py-2 ">
            <img src={PortImage8} alt=""
            className="w-20 mx-auto">
               
            </img>
            <p className="mt-4">MondoDB</p>
        </div>

{/* })} */}


    </div>
</div>
        
    </div>
  )
}
export default Experience