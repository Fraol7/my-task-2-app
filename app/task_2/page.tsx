import { Card } from '../components/card';
import img1 from '../../public/image1.png';
import img2 from '../../public/image2.png';
import img3 from '../../public/image3.png';
import img4 from '../../public/image4.png';

export default function Opportunities(){
    const jobList = [
        {
            title : "Social Media Assistant",
            name : "Young Men Christians Association",
            locate : "Addis Ababa, Ethiopia",
            descript : "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.",
            image: img1
        },
        {
            title : "Social Media Assistant",
            name : "Young Men Christians Association",
            locate : "Addis Ababa, Ethiopia",
            descript : "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.",
            image: img2
        },
        {
            title: "Volunteer Teacher",
            name: "School Under The Tree",
            locate: "Addis Ababa, Ethiopia",
            descript: "As a Human Resources Coordinator, you will support the HR team in various administrative tasks including recruitment, onboarding, and employee relations. You will assist in organizing training programs, maintaining HR records, and ensuring compliance with employment laws and regulations.",
            image: img3
        },
        {
            title : "Social Media Assistant",
            name : "The Africa in me",
            locate : "Addis Ababa, Ethiopia",
            descript : "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.",
            image: img4
        }
    ];
    return (
        <div className="bg-[#f0eff5]">
            <div className='py-10 h-auto w-[90%] mx-100 my-100'>
                <div className='flex justify-between my-400 py-2 px-2 mx-auto sm:w-4/5 md:w-2/3'>
                    <span><h1 className="text-[#000] font-sans text-3xl font-extrabold">Opportunities </h1><p className='text-[#7C8493] text-sm font-sans px-2'> Showing 73 results</p></span>
                    <span className = "text-[#000]"><span className="text-[#7C8493] text-md font-semibold font-sans">Sort by:</span> Most relevant </span>
                </div>
                <div>
                    {jobList.map((job, idx) => <Card key={idx} title={job.title} name={job.name} locate={job.locate} descript={job.descript} image={job.image}/>)}
                </div>     
            </div>
        </div>
    )
}
