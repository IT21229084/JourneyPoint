import React from 'react'
import InputField from '../Components/InputField'

const Location = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg font-mediym mb-2'>Location</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name="testlocation" id="testid1" value="" onChange={handleChange} />
                    <span className='checkmark'></span>All

                </label>
                <InputField
                    handleChange={handleChange}
                    value='london'
                    title='London'
                    name='testlocation' />

                <InputField
                    handleChange={handleChange}
                    value='seattle'
                    title='Seattle'
                    name='testlocation' />

                <InputField
                    handleChange={handleChange}
                    value='madrid'
                    title='Madrid'
                    name='testlocation' />

                <InputField
                    handleChange={handleChange}
                    value='boston'
                    title='Boston'
                    name='testlocation' />

            </div>
        </div>
    )
}

export default Location