import { useState, useEffect } from "react";

type headerProps = {
  hamOpen: boolean
  setHamOpen: (value: boolean) => void;
}

const Header:React.FC<headerProps> = ({hamOpen,setHamOpen}) => {

  const [top, setTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = ():void => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return ():void => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <div className={`bg-white z-10 px-40 py-4 top-0 flex flex-row justify-evenly sticky ${!top && `shadow-xl`} max-xl:px-20 max-lg:px-8 max-md:justify-between`}>
      <div className="basis-1/3 max-md:basis-0">
        <h1 className="py-1 text-black font-extrabold font-sans text-4xl max-sm:text-3xl max-md:py-0">VPP</h1>
      </div>
      <div className="basis-2/3 flex flex-row justify-end gap-10 max-md:hidden">
        <a href="#home" className="cursor-pointer py-2 text-black font-semibold font-sans text-3xl">Home</a>
        <a href="#about" className="cursor-pointer py-2 text-black font-semibold font-sans text-3xl">About</a>
        <a href="#working" className="cursor-pointer py-2 text-black font-semibold font-sans text-3xl">Working</a>
        <a href="#predict" className="cursor-pointer rounded px-6 py-2 bg-black text-white font-semibold font-sans text-2xl">Predict</a>
      </div>
      <div className="relative cursor-pointer md:hidden mt-2" onClick={()=>{setHamOpen(!hamOpen)}}>
        <div className={`bg-black w-8 h-1 rounded transition-all duration-300 ${hamOpen && 'rotate-45 translate-y-2'}`}></div>
        <div className={`bg-black w-8 h-1 rounded transition-all duration-300 ${hamOpen && 'bg-transparent'} my-1`}></div>
        <div className={`bg-black w-8 h-1 rounded transition-all duration-300 ${hamOpen && '-rotate-45 -translate-y-2'}`}></div>
      </div>
    </div>
  )
}

export default Header