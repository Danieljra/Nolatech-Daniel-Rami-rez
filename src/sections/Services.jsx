import { Button } from "../components";
import { Pic2, Pic3, Pic4 } from "../assets/images";
const Services = () => {
  return (
    <section id="services"> 
      <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-4xl font-bold">Lorem ipsum</h1>
            <p className="text-center text-xl">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </p>
            <div className="flex flex-row mt-10 items-center gap-32">
                <div className="flex flex-col">
                    <img src={Pic2} alt="pic2" className="object-cover max-h-72 max-w-xl" />
                    <Button className=" bg-[#3FFA53] text-white text-2xl border-none pt-3 pb-3" label='LOREM IPSUM' />
                </div>
                <div className="flex flex-col">
                    <img src={Pic3} alt="pic2"className="object-cover max-h-72 max-w-xl" />
                    <Button className=" bg-[#3FFA53] text-white text-2xl border-none pt-3 pb-3" label='LOREM IPSUM' />
                </div>
                <div className="flex flex-col">
                    <img src={Pic4} alt="pic2"className="object-cover max-h-72 max-w-xl" />
                    <Button className=" bg-[#3FFA53] text-white text-2xl border-none pt-3 pb-3" label='LOREM IPSUM' />
                </div>
            </div>
            <Button className="bg-slate-200 mt-10 rounded-lg pt-4 pb-4 pl-9 pr-9 text-black text-base font-bold border-2 border-slate-950" label='LEARN MORE' />
        </div>
    </section>
  );
};

export default Services;
