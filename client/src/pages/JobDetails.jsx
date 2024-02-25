import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../Components/PageHeader'
const JobDetails = () => {
    const { id } = useParams()
    const [job, setJob] = useState()

    useEffect(() => {
        // setIsLoading(true)
        fetch("http://localhost:5000/jobs/:id").then(res => res.json().then(data => {
            setJob(data)
            //   setIsLoading(false)
        }))
    }, [])
    console.log(job)
    const handleApply = async () => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
        });
        if (url) {
            Swal.fire(`Entered URL: ${url}`);
        }
    }
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <PageHeader title={'single Job page'} path={'Single Job'}/>
            <h2>  JobDetails{id}</h2>
            {/* <h1>{job.jobTitle}</h1> */}

            <button className='bg-blue px-8 py-2 text-white' onClick={handleApply}>Apply Now</button>
        </div>
    )
}

export default JobDetails