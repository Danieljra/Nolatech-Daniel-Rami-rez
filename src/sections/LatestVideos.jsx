import { Pic1 } from "../assets/images"
import { Button } from "../components"
const LatestVideos = () => {
  return (
     <div className="flex flex-col flex-wrap justify-center items-center" id="videos">
            <h1 className="font-bold text-4xl mb-5">Latest videos</h1>
            <div className="flex flex-wrap justify-center items-center gap-[15%]">
                <div className="flex flex-col justify-center items-center">
                  <i className="absolute">▶</i>
                    <img src={Pic1} alt="file" className=" object-cover max-w-[250px] rounded-lg" />
                    <p className="mt-[5%] text-md mb-4">
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <i className="absolute">▶</i>
                    <img src={Pic1} alt="file" className=" object-cover max-w-[250px] rounded-lg" />
                    <p className="mt-[5%] text-md mb-4">
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <i className="absolute">▶</i>
                    <img src={Pic1} alt="file" className=" object-cover max-w-[250px] rounded-lg" />
                    <p className="mt-[5%] text-md mb-4">
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <i className="absolute">▶</i>
                    <img src={Pic1} alt="file" className=" object-cover max-w-[250px] rounded-lg" />
                    <p className="mt-[5%] text-md mb-4">
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <i className="absolute">▶</i>
                    <img src={Pic1} alt="file" className=" object-cover max-w-[250px] rounded-lg" />
                    <p className="mt-[5%] text-md mb-4">
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <i className="absolute">▶</i>
                    <img src={Pic1} alt="file" className=" object-cover max-w-[250px] rounded-lg" />
                    <p className="mt-[5%] text-md mb-4">
                        Lorem ipsum dolor sit amet, consetetur
                    </p>
                </div>
            </div>
            <Button className=" mb-8 p-4 border-none text-white bg-[#3FFA53] rounded-lg text-xl pl-12 pr-12 font-bold" label='VIEW ALL'/>
        </div>
  )
}

export default LatestVideos