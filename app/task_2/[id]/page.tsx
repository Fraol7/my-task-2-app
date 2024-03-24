import { HiOutlinePlusCircle } from "react-icons/hi2";
import { VscFlame } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import About from "../../components/about";

const aboutList = [
    {
        icon: <HiOutlinePlusCircle/>,
        quest: "Posted On",
        respo: "Jul 1, 2023"
    },
    {
        icon: <VscFlame/>,
        quest: "Deadline",
        respo: "Jul 31, 2023"
    },
    {
        icon: <IoLocationOutline/>,
        quest: "Location",
        respo: "Addis Ababa"
    },
    {
        icon: <MdDateRange/>,
        quest: "Start Date",
        respo: "Aug 02, 2023"
    },
    {
        icon: <MdOutlineDateRange/>,
        quest: "End Date",
        respo: "Sep 02, 2023"
    }
]
export default function DetailsPage() {
    return (
        <div className="bg-[#f0eff5] flex justify-between px-4">
            <span className="flex flex-col py-5 px-5">
                <div className="flex flex-col py-5 px-5">
                    <h2 className="text-[#000] font-sans text-3xl font-extrabold">Description</h2>
                    <p className="text-base text-[#4d4a4a] leading-6 mt-3">
                        As a Social Media Assistant, you will work closely with 
                        the social media manager or marketing team to execute 
                        social media strategies and campaigns. You will be responsible 
                        for assisting in the creation and scheduling of engaging content, 
                        monitoring social media channels, and interacting with followers. 
                        Your primary goal will be to enhance brand visibility, foster positive 
                        relationships with the audience, and drive engagement and conversions
                    </p>
                </div>
                <div className="flex flex-col py-5 px-5">
                    <h2 className="text-[#000] font-sans text-3xl font-extrabold">Responsibilities</h2>
                    <ul className="list-inside list-disc ml-1">
                        {["Community engagement to ensure that is supported and actively represented online",
                            "Focus on social media content development and publication",
                            "Marketing and strategy support",
                            "Stay on top of trends on social media platforms, and suggest content ideas to the team",
                            "Engage with online communities"].map((item, idx) => 
                            (<li key={idx} className="flex items-center mt-3 text-[#4d4a4a]">
                                <CiCircleCheck className="mr-2 text-[#58ec4a] text-xl font-extrabold"/>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col py-5 px-5">
                    <h2 className="text-[#000] font-sans text-3xl font-extrabold">Ideal Candidate we want</h2>
                    <ul className="mt-3">
                        <li className="mt-2 text-[#4d4a4a]"><b className="text-[#000]">Young(18-24 year old) Female social media manager</b></li>
                        <li className="mt-2 text-[#4d4a4a]"><b className="text-[#000]">Passionate & Reliable: </b>Genuine interest in our mission and a strong desire to make a positive impact, responsible, and committed to fulfilling volunteer commitments.</li>
                        <li className="mt-2 text-[#4d4a4a]"><b className="text-[#000]">Adaptable, Team Player & Strong Communication Skills: </b>Able to work effectively in diverse teams; and contributes positively.Flexible and open to embracing new challenges and shifting priorities; Clear verbal and written communication, active listening, and constructive feedback.</li>
                        <li className="mt-2 text-[#4d4a4a]"><b className="text-[#000]">Respectful: </b>Embraces diversity, inclusive, and treats others with respect. Abides with all our rules and regulations.</li>
                    </ul>
                </div>
                <div className="flex flex-col py-5 px-5">
                    <h2 className="text-[#000] font-sans text-3xl font-extrabold">When & Where</h2>
                    <p className="text-[#4d4a4a]">The onboarding event for this event will take place on Jan 18th, 2023, at AAU Auditorium</p>
                </div>
            </span>
            
        <div className="w-full md:w-13/100">
          <div className="pt-4 ">
            <h1 className="text-[#000] text-2xl font-black font-poppins">About</h1>
            {aboutList.map((item, idx) => (<About key={idx} icon={item.icon} quest={item.quest} respo={item.respo}/>))}
          </div>
          <div className="mt-6 w-full h-px bg-[#7C8493]"/>
          <div className="pt-6">
            <h1 className="text-[#000] text-2xl font-black font-poppins">Categories</h1>
            <div className="py-4 flex gap-x-1.5 items-center font-epilogue">
                <span className="bg-[#fcf9e1] text-[#FFB836] text-xs font-semibold  px-3.5 py-2 rounded-full">
                    Marketing
                </span>
                <span className="bg-[#e1fce1] text-[#56CDAD] text-xs font-semibold  px-3.5 py-2 rounded-full">
                    Design
                </span>
            </div>
          </div>
          <div className="mt-6 w-full h-px bg-[#7C8493]"/>
          <div className="pt-6">
            <h1 className="text-[#000] text-2xl font-black font-poppins">Required Skills</h1>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-[#e4e1fc] text-[#4640DE] text-xs font-semibold  px-3.5 py-2 rounded-full">
                Social Media Marketing
              </span>
              <span className="bg-[#e4e1fc] text-[#4640DE] text-xs font-semibold  px-3.5 py-2 rounded-full">
                English
              </span>
              <span className="bg-[#e4e1fc] text-[#4640DE] text-xs font-semibold  px-3.5 py-2 rounded-full">
                Copy Writing
              </span>
            </div>
          </div>
          </div>
        </div>
    )
}
