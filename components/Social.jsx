import Link from "next/link";
import {FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/Faris-Adiyatma"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/faris-adiyatma-84a3a5169/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/farisadiyatma/"}
];

const Social = ({containerStyles, iconStyles}) => {
    return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return (
                <Link key={index} href={item.path} className={iconStyles}
                target="_blank"
                rel="noopener noreferrer">
                    {item.icon}
                </Link>
            );
        })}
    </div>
    );
};

export default Social;