import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Services = () => {
  return (
    <div id="services" className="services flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px]">
      <div className="Services-title relative">
        <h1 className="py-0 px-[30px] text-[80px] font-bold">My Services</h1>
        <img
          className="absolute bottom-0 right-0 -z-10"
          src={theme_pattern}
          alt=""
        />
      </div>
      <div className="services-container grid grid-flow-col grid-rows-2 gap-11">
        {services_Data.map((Service ,index)=>{
            return <div key={index} className="services-format flex flex-col justify-center gap-[20px] p-[60px] rounded-2xl border-2 border-white transition cursor-pointer hover:border-[#ff00ff] cardhover hover:scale-105">
                <h3 className="text-[28px] font-semibold ">{Service.s_no}</h3>
                <h2 className="text-[38px] font-bold herotextclr">{Service.s_name}</h2>
                <p className="text-[#d4d4d4] text-[24px] max-w-[300px]">{Service.s_desc}</p>
                <div className="services-readmore flex gap-[20px] items-center mt-[20px] ">
                    <p>Read More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        })}
      </div>
    </div>
  );
};

export default Services;
