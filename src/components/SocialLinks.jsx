import { FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFacebook, BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmd-mustakim-540343247%3Ffbclid%3DIwAR2amV5iwepXlglIrMeSMWUxTrvetwVfXzW-_vnrnLo2kK8JslqhP9n1L5E&h=AT06BDt_5g2jtxUEZlGlasfCOEWL8ppQeSK0VQIQuP5lRwICxrwNgqMyV431AcVZ9u02tfxWVozyh0nxI_6VU4_RAUv0ucGSc2CRzUuy50MfefPpADHLrgBakLP1SuR4g4jWpJQTYS87AJ9Yg43dQg',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Facebook <BsFacebook size={30}></BsFacebook>
                </>
            ),
            href: 'https://www.facebook.com/mustakim.mstk?mibextid=ZbWKwL',
            
        },
        {
            id: 3,
            child: (
                <>
                    GitHub <FaGithub size={30}></FaGithub>
                </>
            ),
            href: 'https://github.com/mustakim10?tab=repositories'
        },
        {
            id: 4,
            child: (
                <>
                    Mail <HiOutlineMail size={30}></HiOutlineMail>
                </>
            ),
            href: 'mailto:md.mustakim2799@gmail.com'
        },
        {
            id: 5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                </>
            ),
            href: '/public/Mustakim Resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>

                {
                    links.map(({ id, child, href, style, download }) => (
                        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-6px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                download={download}
                                target="_blank"
                                rel="noreferrer"

                            >
                                {child}
                            </a>
                        </li>
                    ))
                }


            </ul>
        </div>
    );
};

export default SocialLinks;