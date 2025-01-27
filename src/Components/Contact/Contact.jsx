import React from 'react'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e8079d5d-4a5c-4f93-819e-37a0157aea34");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
          setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
   <div id='contact' className="contact flex flex-col items-center justify-center gap-[80px] mx-[170px] my-[80px]">
         <div className="Contact-title relative">
           <h1 className="py-0 px-[30px] text-[80px] font-bold">Get in touch</h1>
           <img
             className="absolute bottom-0 right-0 -z-10"
             src={theme_pattern}
             alt=""
           />
         </div>
         <div className="contact-section flex gap-[150px]">
            <div className="contact-left flex flex-col gap-[30px]">
                <h1 className='text-[80px] font-bold contacttext'>let's talk</h1>
                <p className='max-w-[550px] text-[#d8d8d8] text-[20px] '>I'm currently avaliable to take on new projects,so feel free to send me a message about anything that you want me to work on.You can contact anything.</p>
                <div className="contact-details flex flex-col gap-[30px] text-[#d8d8d8] text-[22px]">
                    <div className="contact-detail flex items-center gap-[20px] ">
                        <img src={mail_icon} alt="" />
                        <p>ritikprajapati081@gmail.com</p>
                    </div>
                    <div className="contact-detail flex items-center gap-[20px] ">
                        <img src={call_icon} alt="" />
                        <p>+918057556449</p>
                    </div>
                    <div className="contact-detail flex items-center gap-[20px] ">
                        <img src={location_icon} alt="" />
                        <p>Dhanpura,Meerut UP 250401</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right flex items-start flex-col gap-[30px]">
                <label className='text-[#d8d8d8] text-[22px] font-medium' htmlFor="">Your Name</label>
                <input className='border-0 w-[700px] h-[78px] ps-[20px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] font-serief text-[20px]' type="text" placeholder='Enter your name' name='name' />
                <label className='text-[#d8d8d8] text-[22px] font-medium' htmlFor=""> your Email</label>
                <input className='border-0 w-[700px] h-[78px] ps-[20px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] font-serief text-[20px]' type="email" placeholder='Enter Your email' name='email'/>
                <label className='text-[#d8d8d8] text-[22px] font-medium' htmlFor=""> Write your message here</label>
                <textarea className='w-[650px] border-0 p-[25px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] font-serief text-[20px] ' name="message" rows="8" placeholder='Enter your message'  id=""></textarea>
                <button type='submit' className='border-0 text-white rounded-full text-[22px] px-[60px] py-[20px] mb-[50px] cursor-pointer submitgradBTn hover:scale-105 transition'>Submit now</button>
            </form>
         </div>
    </div>
  )
}

export default Contact