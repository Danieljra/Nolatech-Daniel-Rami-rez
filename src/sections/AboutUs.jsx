import { Pic1 } from "../assets/images";
const AboutUs = () => {
  return (
      <div className="flex flex-row justify-center w-full" id="aboutUs">
            <div className=" w-[48%]  pl-6 pr-6">
                <h1 className=" text-8xl">Lorem ipsum dolor sit amet</h1>
                <p className="text-xl">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                </p>
            </div>
            <img src={Pic1} alt="pic1" className="rounded-xl" />
        </div>
  );
};

export default AboutUs;
