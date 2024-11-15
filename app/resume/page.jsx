"use client";

import { Item } from "@radix-ui/react-select";
import {
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact,  
    FaNodeJs,
    FaJava,
    FaPython,
    FaDatabase,
    FaRProject,
    } from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs, SiMysql, SiSpringboot, SiTableau, SiPowerbi} from "react-icons/si";    

const about = {
    title: 'About me',
    description: `Hello! I’m Faris Adiyatma, a Full-Stack Developer with a unique background in accounting and finance. I've pivoted into tech, specializing in front-end 
    and back-end development. I’ve completed certifications in Front-End Development through IDCAMP x Dicoding (HTML, CSS, JavaScript) and Back-End Development at Enigmacamp 
    (Java, Spring Boot, SQL). Additionally, my Data Analytics certification from Google sharpened my skills in data interpretation. I’m passionate about creating intuitive, 
    user-focused applications. Let’s collaborate to turn ideas into impactful digital solutions!`,
    info: [
        {
            fieldName: 'Name',
            fielValue: 'Faris Adiyatma'
        },
        {
            fieldName: 'Phone',
            fielValue: '(+62) 85207110295'
        },
        {
            fieldName: 'Experience',
            fielValue: '1 Year'
        },
        {
            fieldName: 'Nationality',
            fielValue: 'Indonesian'
        },
        {
            fieldName: 'Email',
            fielValue: 'farisadiyatma97@gmail.com'
        },
        {
            fieldName: 'Freelance',
            fielValue: 'Available'
        },
        {
            fieldName: 'Languages',
            fielValue: 'English, Indonesia'
        },
    ]
};

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description: `Faris Adiyatma is a Full-Stack Developer with a background in accounting and finance. Skilled in Java, Python, JavaScript, React, Node.js, 
    and data analytics, he blends technical expertise and analytical insight to build efficient, user-driven applications and drive data-informed decisions.`,
    items: [
        {
            company: "CSUL Finance",
            position: "Corporate Credit Analyst",
            duration: "2023 - 2024",
        },
        {
            company: "Home Credit Indonesia",
            position: "Data Science Virtual Intern",
            duration: "2022",
        },
        {
            company: "Bank Muamalat",
            position: "Product and Business Virtual Intern",
            duration: "2022",
        },
        {
            company: "Kimia Farma",
            position: "Big Data Analytics Virtual Intern",
            duration: "2022",
        },
    ]
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: `Bachelor's in Accounting from Binus University, certified in Front-End (IDcamp x Dicoding), Back-End (Enigmacamp), Data Analytics (Google), 
    Data Science (DQLab Academy) and Digital Skills (Green Digital, Inco Academy).`,
    items: [
        {
            institution: "Inco Academy",
            degree: "Green Digital",
            duration: "2024 - Present",
        },
        {
            institution: "IDcamp x Dicoding",
            degree: "Front End Developer",
            duration: "2024",
        },
        {
            institution: "Enigma Camp",
            degree: "Back End Developer",
            duration: "2024",
        },
        {
            institution: "Binus University",
            degree: "Bachelor of Accountancy",
            duration: "2018 - 2022",
        },
        {
            institution: "Google Certification",
            degree: "Data Analytics Professional",
            duration: "2022",
        },
        {
            institution: "DQLab Academy",
            degree: "Data Scientist and Data Analyst",
            duration: "2022",
        },
    ]
};

const skills = {
    title: "My skills",
    description: `I specialize in web development technologies like HTML, CSS, and Tailwind for creating responsive designs. Skilled in JavaScript for dynamic 
    interfaces, I use Node.js for backend logic and React and Next.js for fast, SEO-friendly front ends. My Java knowledge supports enterprise-level development`,
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "Html 5",
        },
        {
            icon: <FaCss3 />,
            name: "Css 3",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
                {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <SiSpringboot />,
            name: "Java Spring Boot",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <FaRProject />,
            name: "R",
        },
        {
            icon: <SiMysql />,
            name: "MySql",
        },
        {
            icon: <SiTableau />,
            name: "Tableau",
        },
        {
            icon: <SiPowerbi />,
            name: "Power BI",
        },
    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{
        opacity: 1,
        transition: { delay:2.4, duration: 0.4, ease:"easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
    <div className="container mx-auto">
        <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
        >
            <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
                <TabsContent value="experience" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{experience.title}</h3>
                        <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                            {experience.description}
                        </p>
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((item, index)=> {
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex
                                        flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[360px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.company}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>
                <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{education.title}</h3>
                        <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                            {education.description}
                        </p>
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {education.items.map((item, index)=> {
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex
                                        flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[280px] min-h-[55px] text-center lg:text-left">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>
                <TabsContent value="skills" className="w-full h-full">
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                            {skills.skillList.map((skill, index)=> {
                                return (
                                <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                    {skill.icon}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{skill.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                                );
                            })}
                        </ul>
                    </div>
                </TabsContent>
                <TabsContent value="about" className="w-full text-center xl:text-left">
                    <div className="flex flex-col gap-[30px]">
                        <h3 className="text-4xl font-bold">{about.title}</h3>
                        <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                        {about.description}
                        </p>
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[950px] mx-auto xl:mx-0">
                            {about.info.map((item, index)=> {
                            return (
                                <li key={index}
                                className="flex items-center justify-center xl:justify-start gap-4">
                                    <span className="text-white/60">{item.fieldName}</span>
                                    <span className="text-xl">{item.fielValue}</span>
                                </li>
                            );
                            })}
                        </ul>
                    </div>
                </TabsContent>
            </div>
        </Tabs>
    </div>
    </motion.div>
    );
};

export default Resume;