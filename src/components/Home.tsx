import Illustration from "./../assets/Illustration.svg"

const Home:React.FC = () => {
  return (
    <div id="home" data-aos="fade-in" data-aos-duration="800" className="px-40 py-36 flex flex-row justify-evenly gap-24 max-xl:flex-col max-xl:text-center max-xl:items-center max-xl:gap-12 max-xl:py-20 max-xl:px-20 max-sm:px-8 max-sm:py-8 max-sm:gap-4">
      <div>
          <h1 className="pt-4 text-black font-bold font-sans text-6xl max-sm:text-5xl">Vaccine</h1>
          <h2 className="py-2 text-black font-semibold font-sans text-5xl max-sm:text-4xl">Procurement Predictor</h2>
          <p className="py-3 text-gray-600 font-normal font-sans text-3xl max-sm:text-xl">A <span className="font-medium text-indigo-700">Prediction Model</span> which analyzes the requirement for vaccination in the past years and predicts the <span className="font-medium text-indigo-700">procurement needs</span> accordingly to meet specified goals.</p>
      </div>
      <img className="h-96 max-xl:h-72" src={Illustration} alt="Clinic Illustration"/>
    </div>
  )
}

export default Home