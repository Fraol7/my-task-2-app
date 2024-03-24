import img1 from "../../public/image1.png"
import { Card } from "../components/card"
export default function single_card(){
    const job = 
        {
            title : "Social Media Assistant",
            name : "Young Men Christians Association",
            locate : "Addis Ababa, Ethiopia",
            descript : "As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers.",
            image: img1
        }

    return(
        <div className="h-screen bg-[#f5efef] flex justify-center items-center">
            <Card title={job.title} name={job.name} locate={job.locate} descript={job.descript} image={job.image} />
        </div> 
    )
}