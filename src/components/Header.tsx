import { useState, useEffect } from "react";

const Header:React.FC = () => {

  const [top, setTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = ():void => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return ():void => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <div className={`bg-white z-10 px-40 py-4 top-0 flex flex-row justify-evenly sticky ${!top && `shadow-xl`} max-xl:px-20 max-lg:px-8`}>
      <div className="basis-1/3 max-md:basis-0">
        <h1 className="py-1 text-black font-extrabold font-sans text-4xl">VPP</h1>
      </div>
      <ul className="basis-2/3 flex flex-row justify-end gap-10 max-md:hidden">
        <a href="#home"><li className="cursor-pointer py-2 text-black font-semibold font-sans text-3xl">Home</li></a>
        <a href="#about"><li className="cursor-pointer py-2 text-black font-semibold font-sans text-3xl">About</li></a>
        <a href="#working"><li className="cursor-pointer py-2 text-black font-semibold font-sans text-3xl">Working</li></a>
        <a href="#predict"><li className="cursor-pointer rounded px-6 py-2 bg-black text-white font-semibold font-sans text-2xl">Predict</li></a>
      </ul>
    </div>
  )
}

export default Header