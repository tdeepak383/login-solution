import React, { useEffect, useState } from 'react'

import JobDetailsPage from '../../components/JobDetailsPage'
import { useParams } from 'react-router-dom';
import LatestJobsCard from '../../components/LatestJobsCard';

function JobPage() {

    const { slug } = useParams();
    const [JobData, setJobsData] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(`http://localhost:5000/api/jobs`);
        const result = await response.json();
        setJobsData(result.data);
        };
        fetchData();
    }, [])


    const Jobs = JobData
    ? JobData.find(
        b =>
            b.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-") === slug
        )
    : null;

    return (
        <>
            <section>
                <div className='max-w-6xl mx-auto py-10 px-6'>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:grid-cols-5 ">
                        <div className='lg:col-span-3'>
                            <JobDetailsPage
                                JobId={Jobs?.id}
                                title={Jobs?.title}
                                subtitle={Jobs?.subtitle}
                                experience={Jobs?.experience}
                                location={Jobs?.location}
                                created_at={Jobs?.created_at}
                                skills={Jobs?.skills}
                                salary={Jobs?.salary}
                                company={Jobs?.company}
                                job_description={Jobs?.job_description}
                                job_highlights={Jobs?.job_highlights}
                                requirement={Jobs?.requirement}

                            />
                        </div>
                        <div className='lg:col-span-2'>
                            <div className='bg-gray-50 rounded-xl p-5'>
                                <h4>Recent Jobs</h4>
                                <div className="mt-5">
                                {JobData
                                    .filter((Job) => Job.title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-") !== slug)
                                    .map((Job) => (
                                    <LatestJobsCard
                                        key={Job.id}
                                        title={Job.title}
                                        location={Job.location}
                                        created_at={Jobs?.created_at}
                                        slug={Job.title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-")}
                                    />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobPage