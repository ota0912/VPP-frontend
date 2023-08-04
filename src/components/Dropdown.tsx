import { useState, useRef, useEffect } from "react"

type dropdownProps = {
    items: Array<string>,
    content: string,
    setContent: (value: string) => void;
}

const Dropdown:React.FC<dropdownProps> = ({items,content,setContent}) => {

  const dropItems = items.map((item,index) =>
    <li key={index} className="py-1 px-4 text-black text-ellipsis whitespace-nowrap font-sans text-2xl overflow-x-hidden hover:bg-indigo-200 cursor-pointer max-sm:text-2xl"
    onClick={()=>{setDstate(!dstate);setContent(item);}}>
        {item}
    </li>
  );
  
  const [dstate, setDstate] = useState<boolean>(false)

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setDstate(false); 
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-16 max-lg:mb-12 max-sm:px-6" ref={divRef}>
        <div className="shadow-2xl cursor-pointer text-ellipsis px-2 border-2 overflow-x-hidden border-black rounded py-2 w-72 bg-black text-white max-lg:w-96 max-sm:w-64 max-[340px]:w-60"
            onClick={()=>{setDstate(!dstate)}}>
            <h3 className="font-sans text-3xl max-sm:text-2xl whitespace-nowrap mx-2 overflow-hidden">{content}</h3>
        </div>
        <div className={`shadow-2xl bg-gray-100 absolute border-2 border-black rounded mt-2 py-2 w-72 max-h-64 overflow-y-auto ${!dstate && 'hidden'} max-lg:w-96 max-sm:w-64 max-[340px]:w-60 ${dstate && 'dd-forward'}`}>
            <ul>{dropItems}</ul>
        </div>
    </div>
  )
}

export default Dropdown