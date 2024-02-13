import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from "react-select/creatable"
const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "Docker", label: "Docker" },
    { value: "AWS", label: "AWS" },
    { value: "NodeJs", label: "NodeJs" },
    { value: "MongoDB", label: "MongoDB" },
  ]
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>

      {/* form */}
      <div className='bg-[#FAFAFA] py-12px-8 lg:px-16'>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

          {/* 1st row */}
          <div className='create-job-flex mt-1'>

            <div className='lg:w-1/2 w-full mt-5'>
              <label className='block mb-2 text-lg'>Job Title</label>
              <input type="text" defaultValue={'Web Developer'}
                {...register("jobTitle")} className='create-job-input' />
            </div>

            <div className='lg:w-1/2 w-full mt-5'>
              <label className='block mb-2 text-lg'>Company Name</label>
              <input type="text" placeholder='Ex: Microsoft'
                {...register("companyName")} className='create-job-input' />
            </div>

          </div>

          {/* 2nd row */}
          <div className='create-job-flex'>

            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Minimum Salary</label>
              <input type="text" placeholder="$20k"
                {...register("minPrice")} className='create-job-input' />
            </div>

            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Maximum Salary</label>
              <input type="text" placeholder="$120k"
                {...register("maxPrice")} className='create-job-input' />
            </div>
          </div>

          {/* 3rd row */}
          <div className='create-job-flex'>

            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Salary Type</label>
              <select {...register("salaryType")} className='create-job-input'>
                <option value="">Choose your salary</option>
                <option value="Yearly">Yearly</option>
                <option value="Monthly">Monthly</option>
                <option value="Hourly">Hourly</option>
              </select>
            </div>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Job Location</label>
              <input type="text" placeholder="Ex: New York"
                {...register("jobLocation")} className='create-job-input' />
            </div>
          </div>

          {/* 4th row */}
          <div className='create-job-flex'>

            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Job Posting Date</label>
              <input type="Date" placeholder="Ex: 2024-02-10" defaultValue={'2024-02-14'}
                {...register("postingDate")} className='create-job-input' />
            </div>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Experience Level</label>
              <select {...register("experienceLevel")} className='create-job-input'>
                <option value="">Choose your Experience</option>
                <option value="Internship">Internship</option>
                <option value="Any experience">Any experience</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div>
            <label className='block mb-2 text-lg'>Required Skill Set</label>
            <CreatableSelect
              defaultInputValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className='create-job-input py-4' />
          </div>

          {/* 6th row */}
          <div className='create-job-flex'>

            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Comapany Logo</label>
              <input type="url" placeholder="paste your company logo URL: https://wetransfer.com/"
                {...register("companyLogo")} className='create-job-input' />
            </div>
            <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Employement Type</label>
              <select {...register("employmentType")} className='create-job-input'>
                <option value="">select your job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className='w-full'>
            <label className='block mb-2 text-lg'>Job Description</label>
            <textarea {...register("description")}
              rows={6}
              defaultValue={'lets Join our Web App and find your Destination from Destiny.'}
              placeholder='Job Description'
              className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700' />
          </div>

          {/* last row */}
          <div className='w-full'>
            <label className='block mb-2 text-lg'>Job Posted By</label>
            <input type="email"
              placeholder="userName@JobPointer.com"
              {...register("postedBy")}
              className='create-job-input' />
          </div>

          <input
            type="submit"
            className='block mb-5 bg-blue text-white
               font-semibold px-8 py-2 rounded-sm
               cursor-pointer'/>
        </form>
      </div>
    </div>
  )
}

export default CreateJob