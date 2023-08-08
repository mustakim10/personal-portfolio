import { FaBars, FaTimes } from "react-icons/fa"


const NavBar = () => {

    const links = [
        {
            id: 1,
            link:  'home'
        },
        {
            id: 2,
            link:  'about'
        },
        {
            id: 3,
            link:  'portfolio'
        },
        {
            id: 4,
            link:  'experience'
        },
        {
            id: 5,
            link:  'contact'
        },
    ]

    return (
        <div className="flex justify-between items-center w-full px-4 h-20 text-white bg-black fixed">
            <div>
                <h1 className="text-5xl font-signature ml-2">Mustakim</h1>
            </div>

            <ul className="flex">

         {links.map(link => (
             <li key={link.id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">{link.link}</li>
         ))}

                
            </ul>
        </div>
    );
};

export default NavBar;