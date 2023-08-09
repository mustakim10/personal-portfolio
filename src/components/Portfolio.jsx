import img1 from "../assets/portfolio/bistro1.png"
import img2 from "../assets/portfolio/car.png"
import img3 from "../assets/portfolio/toy.png"
import img4 from "../assets/portfolio/danceclub.png"
import img5 from "../assets/portfolio/goodfood.png"
import img6 from "../assets/portfolio/dragon.png"

const Portfolio = () => {



    return (
        <div name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 pt-96 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">


                    <div className="shadow-md shadow-gray-600 rounded-lg">
                        <p className="m-2 text-center font-bold">Bistro Boss Resturent</p>
                        <img src={img1} alt="" className="rounded-md mx-auto duration-200 hover:scale-105" />
                        <div className="flex items-center font-bold text-gray-200 justify-center">
                            <a href="https://bistro-boss-a62d1.web.app/" target="_blank" rel="noreferrer" className="w-1/2  py-4 m-4 duration-200 hover:scale-105">Demo</a>
                            <a href="https://github.com/mustakim10/bistro-boss-client" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Client Code</a>
                            <a href="https://github.com/mustakim10/bistro-boss-server" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Server Code</a>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg">
                    <p className="m-2 text-center font-bold">Car Doctor</p>
                        <img src={img2} alt="" className="rounded-md mx-auto duration-200 hover:scale-105" />
                        <div className="flex items-center font-bold text-gray-200 justify-center">
                            <a href="https://cars-doctor-6d9a2.web.app/" target="_blank" rel="noreferrer" className="w-1/2  py-4 m-4 duration-200 hover:scale-105">Demo</a>
                            <a href="https://github.com/mustakim10/car-doctor-client" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Client Code</a>
                            <a href="https://github.com/mustakim10/car-doctor-server" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Server Code</a>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg">
                    <p className="m-2 text-center font-bold">Toy Bazar</p>
                        <img src={img3} alt="" className="rounded-md mx-auto duration-200 hover:scale-105" />
                        <div className="flex items-center font-bold text-gray-200 justify-center">
                            <a href="https://toy-bazar-9413f.web.app/" target="_blank" rel="noreferrer" className="w-1/2  py-4 m-4 duration-200 hover:scale-105">Demo</a>
                            <a href="https://github.com/mustakim10/toy-bazar-client" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Client Code</a>
                            <a href="https://github.com/mustakim10/toy-bazar-server" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Server Code</a>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg">
                    <p className="m-2 text-center font-bold">Dance Club</p>
                        <img src={img4} alt="" className="rounded-md mx-auto duration-200 hover:scale-105" />
                        <div className="flex items-center font-bold text-gray-200 justify-center">
                            <a href="https://dance-club-b9fd5.web.app/" target="_blank" rel="noreferrer" className="w-1/2  py-4 m-4 duration-200 hover:scale-105">Demo</a>
                            <a href="https://github.com/mustakim10/dance-club-client" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Client Code</a>
                            <a href="https://github.com/mustakim10/dance-club-server" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Server Code</a>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg">
                    <p className="m-2 text-center font-bold">Good Food</p>
                        <img src={img5} alt="" className="rounded-md mx-auto duration-200 hover:scale-105" />
                        <div className="flex items-center font-bold text-gray-200 justify-center">
                            <a href="https://good-food-24989.web.app/" target="_blank" rel="noreferrer" className="w-1/2  py-4 m-4 duration-200 hover:scale-105">Demo</a>
                            <a href="https://github.com/mustakim10/good-food-client" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Client Code</a>
                            <a href="https://github.com/mustakim10/good-food-server" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Server Code</a>
                        </div>
                    </div>
                    <div className="shadow-md shadow-gray-600 rounded-lg">
                    <p className="m-2 text-center font-bold">The Dragon News</p>
                        <img src={img6} alt="" className="rounded-md mx-auto duration-200 hover:scale-105" />
                        <div className="flex items-center font-bold text-gray-200 justify-center">
                            <a href="https://the-news-dragon-ae410.web.app/category/0" target="_blank" rel="noreferrer" className="w-1/2  py-4 m-4 duration-200 hover:scale-105">Demo</a>
                            <a href="https://github.com/mustakim10/the-news-dragon-client" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Client Code</a>
                            <a href="https://github.com/mustakim10/the-news-dragon-server" target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Server Code</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Portfolio;