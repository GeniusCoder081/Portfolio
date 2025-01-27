import React from "react";
import footer_logo from "../../assets/genius-logo1.png";
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className="footer my-[50px] mx-[170px] flex flex-col gap-[30px] ">
      <div className="footer-top flex justify-between">
        <div className="footer-top-left text-[20px] max-w-[400px]">
          <img src={footer_logo} alt="" />
          <p>
            I am a frontend developer from Meerut,India with 1 year of
            experience in  company Webian world.
          </p>
        </div>
        <div className="footer-top-right flex items-center gap-[35px]">
            <div className="footer-email-input flex gap-[30px] py-[20px] px-[30px] border-2 border-transparent rounded-full bg-[#32323b] pr-[80px] hover:border-2 hover:border-white">
                <img src={user_icon} alt="" />
                <input className=" outline-0 border-0 bg-transparent text-[#a0a0a0] font-serif text-[18px]" type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe text-[20px] py-[22px] px-[50px] rounded-full  submitgradBTn cursor-pointer transition hover:scale-105">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom flex justify-between text-[18px]">
        <p className="footer-bottom-left"> @ 2025 Ritik Prajapati. All rights</p>
        <div className="footer-bottom-right flex gap-[50px] mb-[50px]">
            <p>term of Services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
