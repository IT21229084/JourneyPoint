import React from 'react'
import InputField from '../Components/InputField'

const WorkExperience = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg font-mediym mb-2'>Location</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name="testExperience" id="testid2" value="" onChange={handleChange} />
                    <span className='checkmark'></span>Any experience

                </label>
                <InputField
                    handleChange={handleChange}
                    value='Work remotely'
                    title='Work remotely'
                    name='testExperience' />

                <InputField
                    handleChange={handleChange}
                    value='Intership'
                    title='Intership'
                    name='testExperience' />
            </div>
        </div>
    )
}

export default WorkExperience