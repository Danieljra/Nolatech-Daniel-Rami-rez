import { IconGrab } from "../assets/images";
const Footer = () => {
  return (
     <footer className="flex justify-around items-center">
        <p className=" font-bold w-72  text-center">
            Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna
    
        </p>
        <img src={IconGrab} alt="prb_header" className=" h-32 w-48 object-fill"/>
        <p className="font-bold  w-48 text-center">
            All rights reserved to
            Lorem Ipsum© 2022
        </p>
    </footer>
  );
};

export default Footer;
