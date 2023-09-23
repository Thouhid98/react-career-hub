import { useLoaderData, useParams } from "react-router-dom";

const Jobdetails = () => {

    const jobs = useLoaderData()
    const {id} = useParams()
    const intId = parseInt(id)
    const job = jobs.find(job =>job.id === intId)
    console.log(job);
    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-4 mb-4">Job Details</h2>
            <div className="grid grid-cols-4 gap-3 mb-5">
                <div className="border col-span-3">
                    <h2 className="text-normal p-4"><span className="text-base font-medium">Job Description:</span> {job.job_description}</h2>

                    <h2 className="text-normal p-4"><span className="text-base font-medium">Job Responsibility:</span> {job.job_responsibility}</h2>
                    <h2 className="text-normal p-4"><span className="text-base font-medium">Educational Requirements:</span> {job.educational_requirements}</h2>
                    <h2 className="text-normal p-4"><span className="text-base font-medium">Experiences:</span> {job.experiences}</h2>
                </div>
                <div className="border ">
                    <h2>Side Bar</h2>
                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;