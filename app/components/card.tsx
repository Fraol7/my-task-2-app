import Image from "next/image";
import Link from 'next/link';

interface TypeString {
  title: string,
  name: string,
  locate: string, 
  descript: string, 
  image: string
}

export const Card = ({title, name, locate, descript, image}: TypeString) => {
  return (
    <Link href={"/task_2/${ID}"}>
    <div className="flex bg-[#FFF] border-1 shadow-lg shadow-red rounded-3xl gap-7 my-4 py-5 px-10 mx-auto sm:w-4/5 md:w-3/4 cursor-pointer">
      <Image src={image} alt="imagefile" className="h-20 w-20"/>
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-epilogue font-bold text-[#25324B]">
          {title}
        </h1>
        <p className=" text-[#7C8493] flex gap-x-1.5 font-epilogue py-2 text-base">
          {name} {<span className="bg-[#7C8493] rounded-full h-1 w-1 my-auto"/>} {locate}
        </p>
        <p className="py-2 font-sans text-[#25324B]">
          {descript}
        </p>
        <div className="py-2 flex gap-x-1.5 items-center font-epilogue">
          <span className="bg-[#e1fce1] text-[#56CDAD] text-xs font-semibold  px-3.5 py-2 rounded-full">
            In Person
          </span>
          <span className="text-3xl font-thin text-[#7C8493] py-2">|</span>
          <span className=" text-[#FFB836] border-[#FFB836] border-2 text-xs font-semibold  px-3.5 py-2 rounded-full">
            Education
          </span>
          <span className=" text-[#4640DE] border-[#4640DE] border-2 text-xs font-semibold  px-5 py-2 rounded-full ">
            IT
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
};
