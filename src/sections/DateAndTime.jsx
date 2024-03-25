
const DateAndTime = () => {
  return (
    <section className="flex bg-green-600 flex-row h-[75px]" id="dates"> 
                <div className="flex justify-center items-center text-2xl text-white font-bold  pl-6">
                    <p>Lorem ipsum dolor sit 
                        amet, consetetur</p>
                </div>
                <div className="flex flex-auto  justify-around">
                    <div className="text-white font-bold flex flex-col justify-center items-center">
                        <span className="text-xl">170</span>
                        <span className="text-3xl  text-green-400">days</span>
                    </div>
          
                    <div className="text-white font-bold flex flex-col justify-center items-center">
                        <span className="text-xl">13</span>
                        <span className="text-3xl text-green-400">Hour</span>
                    </div>
                    
                    <div className="text-white font-bold flex flex-col justify-center items-center">
                        <span className="text-xl">39</span>
                        <span className="text-3xl text-green-400">Minutes</span>
                    </div>
                    
                    <div className="text-white font-bold flex flex-col justify-center items-center">
                        <span className="text-xl">29</span>
                        <span className="text-3xl text-green-400">Seconds</span>
                    </div>
                </div>
    </section>
  );
};

export default DateAndTime;
