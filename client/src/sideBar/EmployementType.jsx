import React from 'react'
import InputField from '../Components/InputField'

const EmployementType = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg font-mediym mb-2'>Type of Employement</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name="testEmptype" id="testid4" value="" onChange={handleChange} />
                    <span className='checkmark'></span>All

                </label>
                <InputField
                    handleChange={handleChange}
                    value='Temporary'
                    title='Temporary'
                    name='testEmptype' />

                <InputField
                    handleChange={handleChange}
                    value='Full-time'
                    title='Full-time'
                    name='testEmptype' />

                <InputField
                    handleChange={handleChange}
                    value='Part-time'
                    title='Part-time'
                    name='testEmptype' />

            </div>
        </div>
    )
}

export default EmployementType