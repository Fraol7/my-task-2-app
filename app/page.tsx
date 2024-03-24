"use client";
import "../app/index.css"

import { useRouter } from 'next/navigation';
export default function Home() {
  const navigate = useRouter();
  const handleTask1 = () => { navigate.push("./task_1") }
  const handleTask2 = () => { navigate.push("./task_2") }

  return (
    <div className="h-screen bg-[#f0eff5] flex justify-center items-center">
      <div className="border-2 border-[#000] font-mono bg-[#4640DE] py-2 px-4 mx-2 text-[#FFF] font-semibold rounded cursor-pointer transition-transform hover:scale-90" onClick = {handleTask1}>
        <h1>Task-1</h1>        
      </div>
      <div className="border-2 border-[#000000] font-mono bg-[#FFB836] py-2 px-4 mx-2 text-[#000000] font-semibold rounded cursor-pointer transition-transform hover:scale-90" onClick = {handleTask2}>
        <h1>Task-2</h1>                
      </div>
    </div>
  );
}
