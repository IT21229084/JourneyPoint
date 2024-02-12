import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import { useState } from 'react'
import Card from '../Components/Card'
import Jobs from './Jobs'
import SideBar from '../sideBar/SideBar'
import Newsletter from '../Components/Newsletter'
const Home = () => {
  const [selectdcategory, setSelectdcategory] = useState(null)
  const [jobs, setJobs] = useState([])
  const [query, SetQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  useEffect(() => {
    setIsLoading(true)
    fetch("jobs.json").then(res => res.json().then(data => {
      setJobs(data)
      setIsLoading(false)
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

  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return (startIndex, endIndex)
  }
  //funcation for next page

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  //funcation for the previos page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
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
      ) =>
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        postingDate >= selected ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase()

      )
      console.log(filteredJobs)
    }

    //slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange()
    filteredJobs = filteredJobs.slice(startIndex, endIndex)
    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const result = filteredData(jobs, selectdcategory, query)
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />


      {/* Main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 '>

        {/* left side */}
        <div className='bg-white p-4 rounded'>
          <SideBar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* job cards */}
        <div className='col-span-2 bg-white p-4 rounded'>
          {
            isLoading ? (<p className='font-medium'>Loading....</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
              <h3 className='text-lg font-bold mb-2'>{result.length}Jobs</h3>
              <p>No Data Found!!</p>
            </>
          }

          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button className='hover:underline' onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}>Next</button>

              </div>
            ) : " "


          }
        </div>

        {/* right side  */}
        <div className='bg-white p-4 rounded'><Newsletter/></div>


      </div>

    </div>
  )
}
export default Home