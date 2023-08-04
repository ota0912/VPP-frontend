type hamburgerProps = {
    setHamOpen: (value: boolean) => void;
}

const Hamburger = ({setHamOpen}:hamburgerProps) => {
  return (
    <div className="top-[3.25rem] absolute w-full menu-height bg-black z-50 flex flex-col justify-start items-center gap-8 py-8" onClick={()=>{setHamOpen(false)}}>
        <a href="#home" className="cursor-pointer py-2 text-white font-semibold font-sans text-3xl">Home</a>
        <a href="#about" className="cursor-pointer py-2 text-white font-semibold font-sans text-3xl">About</a>
        <a href="#working" className="cursor-pointer py-2 text-white font-semibold font-sans text-3xl">Working</a>
        <a href="#predict" className="cursor-pointer py-2 text-white font-semibold font-sans text-3xl">Predict</a>
    </div>
  )
}

export default Hamburger