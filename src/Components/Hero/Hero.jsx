import React from "react";
import profile_logo from "../../assets/ritik.png.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id="home" className="hero flex items-center flex-col gap-[20px] justify-center">
      <div className=" mt-[60px] w-[310px] py-1  gradientbtn  flex justify-center rounded-full ">
        <img
          className=" max-w-[300px] rounded-full  "
          src={profile_logo}
          alt=""
        />
      </div>
      <div className=" flex justify-center">
        <h1 className="items-center text-[90px] text-center max-w-[70%] font-bold">
          <span className="herotextclr">I'm Ritik Prajapati,</span>frontend
          developer based in India.
        </h1>
      </div>
      <p className="max-w-[50%] items-center text-center text-[24px]">
      I am a frontend developer from Meerut, India with 1 year of
      experience in Webian world company.
      </p>
      <div className="hero-action flex items-center gap-[25px] font-bold mb-[50px]">
        <div
          className="hero-connect gradientbtn py-[25px] px-[45px] border-r-2 border-tra rounded-full cursor-pointer
            hover:border-2 hover:border-white"
        ><AnchorLink className='anchor-link decoration-none text-white' offset={50} href='#contact'>
          Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume px-[75px] py-[25px] rounded-full border-2 border-white cursor-pointer hover:border-[#b415ff]">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
