import { Button } from "../components"
const JoinUs = () => {
  return (
    <>      
            <div className="flex flex-col  w-1/2 gap-[5%]" id="contactUs">
                <h1 className="text-4xl font-bold text-white m-[2%]">JOIN US</h1>
                <h1 className=" text-sm font-bold text-white m-[2%]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</h1>
                <div className="flex">
                    <input type="text" className=" w-full mr-0 border-none rounded-md m-[2%]  h-11 pl-4" placeholder="Name" />
                    <input type="text" className=" w-full border-none rounded-md m-[2%]  h-11 pl-4" placeholder="Username"/>
                </div>
                <div className="flex">
                    <input type="text" className=" w-full mr-0 border-none rounded-md m-[2%]  h-11 pl-4" placeholder="Phone"/>
                    <input type="text" className=" w-full border-none rounded-md m-[2%]  h-11 pl-4" placeholder="Email"/>
                </div>
                <input type="text" className=" border-none rounded-md m-[2%]  h-11 pl-4" placeholder="Departamen" />
                <textarea className="border-none rounded-md m-[2%] h-32 pl-4 pt-4" placeholder="Mensajse"></textarea>
                <Button className="p-4 border-none text-white bg-[#3FFA53] rounded-lg text-xl pl-12 pr-12 font-bold  max-w-max m-2" label='I’M IN'/>
                <p className=" text-base font-bold text-white mt-[2%] ml-[2%] text-center">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                </p>
            </div>
    </>
  )
}

export default JoinUs