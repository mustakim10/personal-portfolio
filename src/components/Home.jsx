import personalimg from "../assets/home/My project.png"
import {MdKeyboardArrowRight} from "react-icons/md"
import {Link} from "react-scroll"
import {Helmet} from "react-helmet";

const Home = () => {
    return (
           
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">

           <div className="max-w-screen-lg mx-auto flex flex-col gap-12 items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full ">
                <h2 className="text-4xl sm:text-8xl  font-bold mt-20 text-white">
                    I'm a Full Stack Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                My name is Md Mustakim . I am from Bangladesh . I am a student . Now i am studying BSc in Computer Science and Engineering .Beside my academic study, I am learning web development. Now I am beginner in this feild . Everyday I am learning something new to do something better in future . My dream is to become a best Web Developer one day Inshallah .
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className="group font-bold text-white w-fit px-6 py-3 my-2  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        portfolio <span className="group-hover:rotate-90 duration-300 "><MdKeyboardArrowRight  size={25} className="ml-2"></MdKeyboardArrowRight>
                            </span> 
                    </Link>
                </div>
            </div>
            <div>
                <img className="rounded-full mx-auto hover:scale-150 duration-700 w-3/4" src={personalimg} alt="my profile" />
            </div>
            </div> 
        </div>
        
    );
};

export default Home;