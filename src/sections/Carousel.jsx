import { Button } from "../components"
import { Pic7, Pic8, Pic9 } from "../assets/images"
Button
const Carousel = () => {
  return (
     <>
            <h1 className=" text-4xl  text-white mb-8">Carousel</h1>
            <div className="flex gap-[5%]">
                <img src={Pic7} alt="pci" className="  w-72 h-80" />
                <img src={Pic8} alt="pci" className="  w-72 h-80" />
                <img src={Pic9} alt="pci" className="  w-72 h-80" />
            </div>
            <Button className="  mt-8 p-4 border-none text-black bg-white rounded-lg text-xl pl-12 pr-12 font-bold"  label='VIEW ALL'/>
     </>
      
  )
}

export default Carousel