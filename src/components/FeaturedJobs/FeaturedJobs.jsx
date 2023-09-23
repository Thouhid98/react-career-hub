import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [datalength, setDataLength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center">
            <h2 className="text-5xl">Featured Jobs {jobs.length}</h2>
                <p></p>
            </div>
            <div className="grid grid-cols-2 gap-6 my-3">
                {
                    jobs.slice(0, datalength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>

        <div className={`text-center ${datalength === jobs.length? 'hidden':''}`}>
                <button onClick={()=> setDataLength(jobs.length)} 
                className="btn btn-primary mb-4 my-2 ">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;