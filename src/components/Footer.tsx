import Github from "./../assets/Github.svg"

const Footer:React.FC = () => {
  return (
    <div className="bg-black flex flex-row justify-center py-12 px-40 gap-32 items-center mt-20 max-xl:px-20 max-lg:px-0 max-lg:gap-16 max-sm:flex-col max-sm:items-center max-sm:gap-6  max-lg:mt-4 absolute -z-10 w-full">
        <h2 className="text-light-gray font-normal font-sans text-3xl basis-1/3 max-sm:hidden">"Enabling data-driven projections for future vaccine procurement needs."</h2>
        <img className="h-20 cursor-pointer hover:translate-y-1" src={Github} alt="GitHub Logo" onClick={()=>{window.open('https://github.com/ota0912/Vaccine-Procurement-Predictor')}}/>
        <div className="text-right basis-1/3 max-sm:basis-0 max-sm:text-center">
            <h1 className="text-white font-medium font-sans text-4xl max-sm:text-3xl">Vaccine</h1>
            <h2 className="text-white font-medium font-sans text-3xl max-sm:text-2xl">Procurement Predictor</h2>
            <p className="text-light-gray font-medium font-mono text-xl py-2">Copyright &copy; 2023</p>
        </div>
    </div>
  )
}

export default Footer