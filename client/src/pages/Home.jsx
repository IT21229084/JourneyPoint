import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import { useState } from 'react'
import Card from '../Components/Card'
import Jobs from './Jobs'
const Home = () => {
  const [selectdcategory, setSelectdcategory] = useState(null)
  const [jobs, setJobs] = useState([])
  const [query, SetQuery] = useState("")

  useEffect(() => {
    fetch("jobs.json").then(res => res.json().then(data => {
      setJobs(data)
    }))
  }, [])

  const handleInputChange = (event) => {
    SetQuery(event.target.value)
    console.log(query)
  }

  //filter jobs by jobstitle
  const filteredItems = jobs.filter((job) =>
    job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  //....Radio Filter....
  const handleChange = (event) => {
    setSelectdcategory(event.target.value)
  }

  //Button filtering
  const handleClick = (event) => {
    setSelectdcategory(event.target.value)
  }

  //Main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs

    //filtering Input items
    if (query) {
      filteredJobs = filteredItems
    }

    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel,
        salaryType, employmentType, postingDate }
      ) => (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()

      ))
      console.log(filteredJobs)
    }

    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const result = filteredData(jobs, selectdcategory, query)
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />


      {/* Main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 '>


        <div className='bg-white p-4 rounded'>left</div>
        <div className='col-span-2 bg-white p-4 rounded'> <Jobs result={result} /></div>
        <div className='bg-white p-4 rounded'>right</div>


      </div>

    </div>
  )
}
export default Home