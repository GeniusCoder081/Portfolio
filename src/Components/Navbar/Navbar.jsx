import React, { useRef, useState } from "react";
import logo from "../../assets/genius-logo1.png";
import theme_pattern from "../../assets/theme_pattern.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import menu_open from '../../assets/menu_open.svg'
// import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  // const menuRef = useRef();

  // const openMenu = ()=>{
  //   menuRef.current.style.right = "0";
  // }
  // const closeMenu = ()=>{
  //   menuRef.current.style.right = "-350px";
  // }
  return (
    <div className="navbar flex items-center justify-between mx-[50px] my-[15px]">
      <div className="relative">
        <img className="max-w-[220px]" src={logo} alt="" />
        <img
          className="absolute bottom-2 right-1 -z-10 max-w-[100px]"
          src={theme_pattern}
          alt=""
        />
      </div>

      {/* <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open block md:hidden fixed right-[30px]'/> */}
      <ul className="nav-menu flex items-center list-none gap-[60px] text-[18px] ">
        {/* <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close block md:hidden relative top-[30px] left-[290px] width-[30px]' /> */}
        <li className="flex flex-col gap-[5px] cursor-pointer text-[25px] ">
          <AnchorLink
            className="anchor-link decoration-none text-white"
            href="#home"
          >
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "Home" ? (
            <img className="flex m-auto" src={underline} alt="" />
          ) : (
            <></>
          )}
        </li>
        <li className="flex flex-col gap-[5px] cursor-pointer text-[25px] ">
          <AnchorLink
            className="anchor-link decoration-none text-white"
            offset={50}
            href="#about"
          >
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? (
            <img className="flex m-auto" src={underline} alt="" />
          ) : (
            <></>
          )}
        </li>
        <li className="flex flex-col gap-[5px] cursor-pointer text-[25px] ">
          <AnchorLink
            className="anchor-link decoration-none text-white"
            offset={50}
            href="#services"
          >
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? (
            <img className="flex m-auto" src={underline} alt="" />
          ) : (
            <></>
          )}
        </li>
        <li className="flex flex-col gap-[5px] cursor-pointer text-[25px] ">
          <AnchorLink
            className="anchor-link decoration-none text-white"
            offset={50}
            href="#work"
          >
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? (
            <img className="flex m-auto" src={underline} alt="" />
          ) : (
            <></>
          )}
        </li>
        <li className="flex flex-col gap-[5px] cursor-pointer text-[25px] ">
          <AnchorLink
            className="anchor-link decoration-none text-white"
            offset={50}
            href="#contact"
          >
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img className="flex m-auto" src={underline} alt="" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-connect py-[20px] px-[30px] border-2 border-transparent hover:border-2 hover:border-white rounded-full gradientbtn  cursor-pointer">
        <AnchorLink
          className="anchor-link decoration-none text-white"
          offset={50}
          href="#contact"
        >
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
