import { MdLocationOn } from "react-icons/md";
import {AiOutlineDollar} from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({ job }) => {

    const {id, logo, job_title,company_name,remote_or_onsite,location,job_type,salary,job_description, job_responsibility,educational_requirements,experiences,contact_information} = job;


    return (
        <div className="card card-compact  bg-gray-200 shadow-xl p-4">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className=" font-md ">
                    <button className="mr-4 px-3 py-1 border rounded border-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="border px-3 py-1  rounded border-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex gap-2 my-2 mb-2">
                    <h2 className="flex"><MdLocationOn className="text-xl mr-1"></MdLocationOn>{location}</h2>
                    <h2 className="flex"><AiOutlineDollar className="mr-1 text-xl"></AiOutlineDollar>{salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;