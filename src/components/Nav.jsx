
import { IconGrab } from "../assets/images";
// import { navLinks } from "../constants";
import Button from "./Button";
const Nav = () => {
  return (
      <nav id="nav">
                <div className="flex flex-row justify-evenly">
                  <img src={IconGrab} alt="grab" className="object-contain max-w-[180px] max-h-[120px]"></img>
                  <div className="flex flex-col">
                    <div className="flex h-[120px] flex-row justify-around items-center text-white font-bold">
                      <a href="#nav" className=" text-black">HOME</a>
                      <a href="#dates" className="text-black">DATE AND TIME</a>
                      <a href="#aboutUs" className="text-black">ABOUT US</a>
                      <a href="#services" className="text-black">SERVICES</a>
                      <a href="#videos" className="text-black">VIDEOS</a>
                      <a href="#contactUs" className="text-black">CONTACT US</a>
                    </div>
                    <div className="ml-[16px]">
                        <h1 className="text-4xl text-white font-bold">LOREM IPSUM</h1>
                        <h1 className="text-4xl bg-white max-w-fit text-black font-bold">LOREM IPSUM DOLOR &nbsp;</h1>
                        <h1 className="text-4xl text-white font-bold">LOREM IPSUM</h1>
                        <Button className="p-4 bg-[#3FFA53] text-white text-2xl rounded-xl" label='WHAT IS NEXT'/>
                    </div>
                  </div>
                </div>
      </nav>
    
  );
};

export default Nav;
