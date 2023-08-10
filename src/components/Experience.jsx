import ex1 from "../assets/experience/1.png"
import ex2 from "../assets/experience/2.jpeg"
import ex3 from "../assets/experience/3.png"
import ex4 from "../assets/experience/4.png"
import ex5 from "../assets/experience/5.png"
import ex6 from "../assets/experience/6.png"
import ex7 from "../assets/experience/7.png"
import ex9 from "../assets/experience/9.jpeg"
import ex8 from "../assets/experience/8.jpeg"
import ex10 from "../assets/experience/10.png"
import ex11 from "../assets/experience/11.png"
import ex12 from "../assets/experience/12.png"
import ex13 from "../assets/experience/13.png"
import { Helmet } from "react-helmet"

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: ex1,
            title: 'HTML5',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: ex2,
            title: 'CSS3',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            src: ex3,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: ex4,
            title: 'ES6',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: ex5,
            title: 'React JS',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: ex6,
            title: 'React Router',
            style: 'shadow-gray-500'
        },
        {
            id: 7,
            src: ex7,
            title: 'Firebase',
            style: 'shadow-yellow-500'
        },
        {
            id: 8,
            src: ex8,
            title: 'Tailwind CSS',
            style: 'shadow-gray-500'
        },
        {
            id: 9,
            src: ex9,
            title: 'Bootstrap5',
            style: 'shadow-yellow-500'
        },
        {
            id: 10,
            src: ex10,
            title: 'Node.js',
            style: 'shadow-gray-500'
        },
        {
            id: 11,
            src: ex11,
            title: 'Express.js',
            style: 'shadow-gray-500'
        },
        {
            id: 12,
            src: ex12,
            title: 'MongoDB',
            style: 'shadow-gray-500'
        },
        {
            id: 13,
            src: ex13,
            title: 'GitHub',
            style: 'shadow-gray-500'
        }
    ]

    return (
        
      
        <div name="experience"
            className="bg-gradient-to-b py-20   from-gray-800 to-black w-full ">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto  grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
                {
                    techs.map(({id, src,title,style}) => (
<div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto" />
                    <p className="mt-4 text-white">{title}</p>
                </div>
                    ))
                }
                
            </div>
        </div>
        
    );
};

export default Experience;