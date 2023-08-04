import FlowChart from "./../assets/FlowChart.svg"

const Working:React.FC = () => {
  return (
    <div id="working" data-aos="fade-up" data-aos-duration="800" className="px-40 py-36 flex flex-row justify-evenly gap-24 max-xl:flex-col-reverse max-xl:text-center max-xl:items-center max-xl:gap-12 max-xl:py-20 max-xl:px-20 max-sm:px-8 max-md:py-14 max-md:gap-6 max-sm:py-6">
      <img className="w-96 h-[28.75rem]" src={FlowChart} alt="Clinic Illustration" />
      <div>
        <h1 className="text-black font-bold font-sans text-6xl max-sm:text-4xl">How does it work?</h1>
        <p className="py-5 text-gray-600 font-normal font-sans text-3xl max-sm:text-xl">The Vaccination Procurement Predictor scrapes past vaccination data from <span className="font-medium text-indigo-700">HMIS</span> (Health Management Information System) and utilizes <span className="font-medium text-indigo-700">Machine Learning models</span> to generate accurate predictions. It also creates a publicly available Django <span className="font-medium text-indigo-700">Restful API</span>. Integrated with a React website, it offers an intuitive user interface for decision-makers to input goals, <span className="font-medium text-indigo-700">analyze future vaccine requirements</span>, and optimize procurement planning for better public health outcomes.</p>
      </div>
    </div>
  )
}

export default Working