 import { Button } from "../components";
import { Pic5 } from "../assets/images";
const Subscribe = () => {
  return (
      <div className="flex flex-row w-full justify-center items-center gap-32 ">
            <div className="w-[35%]">
                <p className="text-4xl text-white p-4 font-bold">
                    Lorem ipsum
                    dolor sit
                    amet,
                    consetetur
                </p>
                <Button className="mt-4 rounded-lg pt-4 pb-4 pl-6 pr-6 text-black bg-white border-none text-base font-bold w-full" label='LOREM IPSUM DOLOR SIT' />
                <Button className="mt-4 rounded-lg pt-4 pb-4 pl-6 pr-6 text-white bg-transparent border border-white text-base font-bold w-full" label='LOREM IPSUM DOLOR SIT' />
            </div>
            <img src={Pic5} alt="pic5" className=" w-[35%] object-fill" />
        </div>
  );
};

export default Subscribe;
