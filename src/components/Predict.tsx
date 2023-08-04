import Dropdown from "./Dropdown"
import { useState } from "react"

const Predict:React.FC = () => {
  
  const vaccines = ["BCG","DPT","DT","Measles","Polio","TT10","TT16","Vitamin A Dose-1","Vitamin A Dose-5","Vitamin A Dose-9"]
  const [vaccine, setVaccine] = useState<string>("Select a Vaccine")
  
  const states = ['All India', 'Arunachal Pradesh', 'Assam', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura', 'Bihar', 'Chhattisgarh', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand', 'Madhya Pradesh', 'Odisha', 'Rajasthan', 'Uttar Pradesh', 'Uttarakhand', 'Andhra Pradesh Old', 'Goa', 'Gujarat', 'Haryana', 'Karnataka', 'Kerala', 'Maharashtra', 'Punjab', 'Tamil Nadu', 'West Bengal', 'A & N Islands', 'Chandigarh', 'Dadra & Nagar Haveli', 'Daman & Diu', 'Delhi', 'Lakshadweep', 'Puducherry']
  const [state, setState] = useState<string>("Select a State")

  const years = ['2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040']
  const [year, setYear] = useState<string>("Select a Year")

  return (
    <div id="predict" data-aos="fade-up" data-aos-duration="800" className="px-40 flex flex-col justify-evenly text-center max-xl:px-20 max-sm:px-8 max-md:mt-8">
        <h1 className="text-black font-bold font-sans text-6xl max-sm:text-4xl">Prediction Model</h1>
        <p className="py-5 text-gray-600 font-normal font-sans text-3xl max-sm:text-xl">Ready to predict? Simply choose a vaccine and state. Then set an adequate year to reach your vaccination goals. The results will be updated automatically!</p>
        <div className="py-5 flex flex-row justify-evenly items-center max-xl:gap-12 max-lg:flex-col max-lg:gap-0">
            <Dropdown items={vaccines} content={vaccine} setContent={setVaccine}/>
            <Dropdown items={states} content={state} setContent={setState}/>
            <Dropdown items={years} content={year} setContent={setYear}/>
        </div>
    </div>
  )
}

export default Predict