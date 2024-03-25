import { Button } from "../components";
const SuperQuality = () => {
  return (
   <>
    <div className=" flex flex-col  justify-center   w-1/2 pl-10">
            <h1 className="text-4xl font-bold">Lorem ipsum</h1>
            <p className="text-xl mt-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.
            </p>
            <Button className="mt-10 p-4 border-none text-white bg-[#3FFA53] rounded-lg text-xl pl-12 pr-12 font-bold max-w-max ml-0" style="margin-top:10%;" label='VIEW ALL'/>
    </div>
   </>
  );
};

export default SuperQuality;
