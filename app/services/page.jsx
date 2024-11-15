"use client";

import { Description } from "@radix-ui/react-dialog";
import {BsArrowDownRight} from "react-icons/bs"
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Web Development",
        description:`Build responsive, user-centric websites that make an impact. With expertise in HTML, CSS, JavaScript, React, and Tailwind CSS, I create seamless, intuitive front-end designs that are optimized for performance and user experience.`,
        href: ""
    },
    {
        num: "02",
        title: "Back End Development Services",
        description:`Power your applications with robust and scalable back-end solutions. Specializing in Java, Spring Boot, SQL, and RESTful APIs, I ensure that your app’s architecture is secure, efficient, and ready to grow with your business.`,
        href: ""
    },
    {
        num: "03",
        title: "Data Analyst",
        description:`Transform data into actionable insights. With a Google Data Analytics certification and a strong background in finance, I leverage data to drive smarter decisions and optimize processes for your business.`,
        href: ""
    },
    {
        num: "04",
        title: "Virtual Assisstant",
        description:`Stay organized and productive with reliable virtual assistance. From scheduling and research to data management, I offer personalized support to help streamline your operations.`,
        href: ""
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity: 1,
                    transition: { delay:2.4, duration:0.4, ease:"easeIn"}
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[45px]"
                >
                {services.map((service, index)=> {
                    return (
                        <div key={index}
                        className="flex-1 flex flex-col justify-center gap-5 group"
                        >
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline
                                text-transparent group-hover:text-outline-hover transition-all
                                duration-500">
                                    {service.num}</div>
                                <Link href={service.href} className="w-[70px] h-[70px]
                                rounded-full bg-white group-hover:bg-accent transition-all
                                duration-500 flex justify-center items-center hover:-rotate-45"
                                target="_blank"
                                rel="noopener noreferrer">
                                <BsArrowDownRight className="text-primary text-3xl"/>
                                </Link>
                            </div>
                            
                            <h2 className="text-[35px] font-bold leading-none text-white
                            group-hover:text-accent transition-all duration-500">
                                {service.title}</h2> 
                            <p className="text-white/60">{service.description}</p>
                            
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    );
                }
                )}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;