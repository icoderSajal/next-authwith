import React from 'react'
import { FaHouseChimney } from 'react-icons/fa6'

export default function Cards() {
    return (
        <div className='max-w-[200px] max-h-[200px] bg-blue-950 text-white mt-10 mx-10'>
            <div className='flex justify-center items-center gap-2 px-4 py-2'>
                <div>
                    <FaHouseChimney />
                </div>
                <div>
                    <h1>Title</h1>
                </div>
            </div>

        </div>
    )
}
