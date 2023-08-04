import Dropdown from "./Dropdown"
import { useState } from "react"

const Predict:React.FC = () => {
  
  const vaccines = ['Polio','Small Pox','Vitsadsadsadsaasdasamin','Vitamin','Vitamin','Vitamin','Vitamin']
  const [vaccine, setVaccine] = useState<string>("Select a Vaccine")
  
  const states = ['Delhi','Mumbai','Hyderabad']
  const [state, setState] = useState<string>("Select a State")

  const years = ['2024','2025','2026']
  const [year, setYear] = useState<string>("Select a Year")

  return (
    <div id="predict" className="px-40 flex flex-col justify-evenly text-center max-xl:px-20 max-sm:px-8">
        <h1 className="text-black font-bold font-sans text-6xl max-sm:text-4xl">Prediction Model</h1>
        <p className="py-5 text-gray-600 font-normal font-sans text-3xl max-sm:text-xl">Ready to predict? Simply choose a vaccine and state. Then set an adequate goal year till which you would like to reach your vaccination goals. Once done, simply click Predict!</p>
        <div className="py-5 flex flex-row justify-evenly items-center max-xl:gap-12 max-lg:flex-col max-lg:gap-0">
            <Dropdown items={vaccines} content={vaccine} setContent={setVaccine}/>
            <Dropdown items={states} content={state} setContent={setState}/>
            <Dropdown items={years} content={year} setContent={setYear}/>
        </div>
    </div>
  )
}

export default Predict