import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"

const Newsletter = () => {
    return (
        <div>
            <div>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaEnvelopeOpenText />
                    Email me for hobs
                </h3>
                <p className='text-primary/75 text-base mb-4'>You can email to me if you are intersted in join my company work as software engineer.</p>
                <div className='w-full space-y-4'>
                    <input type="email" name='email' id='email' className='w-full block py-2 pl-3 border focus:outline-none' placeholder='name@Innominds.com' />
                    <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
                </div>
            </div>

            {/* 2nd part */}
            <div className='mt-10'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaRocket />
                    get noticed faster
                </h3>
                <p className='text-primary/75 text-base mb-4'>You can email to me if you are intersted in join my company work as software engineer.</p>
                <div className='w-full space-y-4'>
                    <input type="submit" value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold' />
                </div>
                
            </div>
        </div>
    )
}

export default Newsletter