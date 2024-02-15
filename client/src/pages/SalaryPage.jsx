import React, { useEffect, useState } from 'react'
import PageHeader from '../Components/PageHeader'
const SalaryPage = () => {
  const [searchText, setSearchText] = useState("")
  const [salary, setSalary] = useState([])

  useEffect(() => {
    fetch("salary.json").then(res => res.json()).then(data => setSalary(data))

  }, [searchText])

  const handleChange = () => {
    const filter = salary.filter((job) =>
      job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
    setSalary(filter)
    console.log(filter)
  }


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title={"Estimate Salary"} path={"salary"} />

      <div className='mt-5 '>
        <div className='search-box p-2 text-center mb-2'>
          <input onChange={(e) => setSearchText(e.target.value)} type="text" name="search" id="search" className='py-2 pl-3 border focus:outline-none
              lg:w-6/12 mb-4 w-full '/>
          <button onClick={handleChange} className='bg-blue rounded-sm mb-4 text-white font-semibold px-8 py-2' >Search</button>
        </div>
      </div>

      {/* salary Display  */}
      <div className='grid lg:grid-cols-3 items-center sm:grid-cols-2 grid-cols-1 gap-12 my-12 my-12'>
        {
          salary.map((data) => (
            <div key={data.id} className='shadow px-4 py-8'>
              <h4 className='font-semibold text-xl'>{data.title}</h4>
              <p className='my-2 font-medium text-blue text=lg'>{data.salary}</p>
              <div className='flex flex-wrap gap-4 '>
                <a href="/" className='underline '>{data.status}</a>
                <a href="/" className='underline '>{data.skills}</a>
              </div>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default SalaryPage