import React from 'react'
import InputField from '../Components/InputField'
import Button from './Button'
const JobPostingData = ({ handleChange }) => {
    const now = new Date()
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000)
    const SevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000)
    const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000)

    //Convert date to String
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10)
    const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0, 10)
    const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0, 10)
    // console.log(twentyFourHoursAgoDate)
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Date of posting</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name="testdatepost" id="test" value="" onChange={handleChange} />
                    <span className='checkmark'></span>All Time

                </label>
                <InputField
                    handleChange={handleChange}
                    value={twentyFourHoursAgoDate}
                    title="Last 24 Hours"
                    name='testdatepost' />
                <InputField
                    handleChange={handleChange}
                    value={SevenDaysAgoDate}
                    title="Last 7 Days"
                    name='testdatepost' />

                <InputField
                    handleChange={handleChange}
                    value={ThirtyDaysAgoDate}
                    title="Last 30 Days"
                    name='testdatepost' />
            </div>
        </div>
    )
}

export default JobPostingData