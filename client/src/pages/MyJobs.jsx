import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MyJobs = () => {

  const email = "malithiroshan9@gmail.com"
  const [jobs, setJobs] = useState([])
  const [searchText, setSearchText] = useState("")
  const [isLoading, setIsLoading] = useState(true)


  //set Current page
  const [currentPage, setCurrentPage] = useState(1)
  const itemPerPage = 4

  //pagination
  const indexofLastItem = currentPage + itemPerPage
  const indexofFirstItem = indexofLastItem - itemPerPage
  const currentJobs = jobs.slice(indexofFirstItem, indexofLastItem)

  //next btn & previos btn
  const nextPage = () => {
    if (indexofLastItem < jobs.length) {
      setCurrentPage(currentPage + 1)
    }
  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }


  useEffect(() => {
    setIsLoading(true)
    fetch(`http://localhost:5000/jobs/${email}`).then(res => res.json()).then(data => {
      setJobs(data)
      setIsLoading(false)
    })
  }, [searchText])

  const handleSearch = () => {
    const filter = jobs.filter((job) =>
      job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
    // console.log(filter)
    setJobs(filter)
    setIsLoading(false)
  }
  const handleDelete = (id) => {
    // console.log(id)
    fetch(`http://localhost:5000/job/${id}`, {
      method: "DELETE"
    }).then(res => res.json).then(data => {
      if (data.acknowledged === true) {
        alert("Job Deleted Successfully!")

      }
    })
  }
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <div className='my-jobs-container'>
        <h1 className='text-center p-4'>ALL My Jobs</h1>
        <div className='search-box p-2 text-center mb-2'>

          <input
            onChange={(e) => setSearchText(e.target.value)}
            className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full'
            type="text"
            name="search"
            id="search" />

          <button
            onClick={handleSearch}
            className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4'>Search</button>
        </div>
      </div>

      {/* table data */}

      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to={'/postJob'}><button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post A New Job</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      NO.
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Job Title
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Company Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Salary
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Edit
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Delete
                    </th>
                  </tr>
                </thead>
                {
                  isLoading ? (<div className='flex items-center justify-center h-20'><p>loading......</p></div>) : ""
                }

                <tbody>
                  {
                    currentJobs.map((job, index) => (
                      <tr key={index}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                          {index + 1}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                          {job.jobTitle}
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {job.companyName}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          ${job.minPrice} - {job.maxPrice}k
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                          <button><Link to={`editJob/${job?._id}`}>Edit</Link></button>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <button onClick={() => handleDelete(job._id)} className='bg-red-700 py-2 px-6 text-white rounded-sm'>Delete</button>
                        </td>
                      </tr>

                    ))
                  }

                </tbody>

              </table>
            </div>
          </div>
        </div>
        {/* pagination */}
        <div className='flex justify-center text-black space-x-8'>
          {
            currentPage > 1 && (<button onClick={prevPage} className='hover:underline'>Previous</button>)
          }
          {
            indexofLastItem < jobs.length && (<button onClick={nextPage} className='hover:underline'>Next</button>)
          }

        </div>
      </section>
    </div>
  )
}

export default MyJobs