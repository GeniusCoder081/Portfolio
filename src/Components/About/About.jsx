import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/ritik123.jpg'
const About = () => {
  return (
    <div id='about' className='about flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px]'>
        <div className="about-title relative">
            <h1 className='py-0 px-[30px] text-[80px] font-bold'>About me</h1>
            <img className='absolute bottom-0 right-0 -z-10' src={theme_pattern} alt="" />
        </div>
        <div className="about-sections flex gap-[80px]">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right flex flex-col gap-[80px]">
                <div className="about-para flex flex-col gap-[20px] font-medium text-[24px]">
                    <p>As a passionate web developer, I specialize in creating dynamic, responsive, and user-friendly websites tailored to meet client needs. With expertise in HTML, CSS, JavaScript, and various frameworks, I focus on building seamless digital experiences that are both functional and visually appealing.</p>
                    <p>I am committed to delivering high-quality, scalable solutions while ensuring optimal performance and user satisfaction. Let's bring your vision to life online!</p>
                </div>
                <div className="about-skills flex flex-col gap-[20px]">
                    <div className=" hover:scale-105 transition about-skill flex gap-[50px] items-center ">
                        <p className='min-w-[150px] text-[24px] font-medium'>HTML & CSS</p>
                        <hr className='border-0 outline-0 w-[50%] h-[8px] rounded-full gradientbtn' style={{width:"50%"}}/>
                    </div>
                    <div className=" hover:scale-105 transition about-skill flex gap-[50px] items-center ">
                        <p className='min-w-[150px] text-[24px] font-medium'>React JS</p>
                        <hr className='border-0 outline-0 w-[50%] h-[8px] rounded-full gradientbtn' style={{width:"70%"}}/>
                    </div>
                    <div className=" hover:scale-105 transition about-skill flex gap-[50px] items-center ">
                        <p className='min-w-[150px] text-[24px] font-medium'>JavaScript</p>
                        <hr className='border-0 outline-0 w-[50%] h-[8px] rounded-full gradientbtn' style={{width:"60%"}}/>
                    </div>
                    <div className=" hover:scale-105 transition about-skill flex gap-[50px] items-center ">
                        <p className='min-w-[150px] text-[24px] font-medium'>Python</p>
                        <hr className='border-0 outline-0 w-[50%] h-[8px] rounded-full gradientbtn' style={{width:"55%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements flex w-[100%] justify-between mb-[80px] ">
            <div className="hover:scale-110 about-achievement items-center flex gap-[10px] flex-col transition">
                <h1 className='text-[60px] font-bold herotextclr'>01+</h1>
                <p className='text-[22px]'>YEARS OF EXPERIENCE</p>
            </div>
            <div className="hover:scale-110 about-achievement items-center flex gap-[10px] flex-col transition">
                <h1 className='text-[60px] font-bold herotextclr'>10+</h1>
                <p className='text-[22px]'>PROJECTS COMPLETED</p>
            </div>
            <div className="hover:scale-110 about-achievement items-center flex gap-[10px] flex-col transition">
                <h1 className='text-[60px] font-bold herotextclr'>10+</h1>
                <p className='text-[22px]'>HAPPY CLIENTS</p>
            </div>
        </div>

    </div>
  )
}

export default About