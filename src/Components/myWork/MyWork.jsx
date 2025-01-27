import React from 'react'
import mywork_data from '../../assets/mywork_data'
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className="mywork flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px]">
          <div className="mywork-title relative">
            <h1 className="py-0 px-[30px] text-[80px] font-bold">My Latest Work</h1>
            <img
              className="absolute bottom-0 right-0 -z-10"
              src={theme_pattern}
              alt=""
            />
          </div>
          <div className="mywork-container grid grid-flow-col grid-rows-2 gap-11">
            {mywork_data.map((work,index)=>{
                return <img className='box-border w-[419px] h-[280px] transition cursor-pointer hover:scale-105 hover:border-4 border-[#ff00ff] rounded-2xl' key={index} src={work.w_img} alt=''/>
            })}
          </div>
          <div className="mywork-showmore flex gap-[15px] rounded-full border-2 border-white px-[60px] py-[30px] text-[22px] font-medium mb-[80px] transition cursor-pointer  hover:gap-[30px]">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
          </div>
    </div>
  )
}

export default MyWork