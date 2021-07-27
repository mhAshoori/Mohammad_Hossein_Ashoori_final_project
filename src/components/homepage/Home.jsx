import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomeImg from '../assets/imgs/shopp.jpg'
export function Home() {
    return (
        <>
            <div className="d-flex justify-content-center flex-column align-items-center ">
                <h1 className="">Welcome to our Shopping Center</h1>
                <img src={HomeImg} className='w-50 mt-3 ' alt='' />
            </div>
        </>
    )
}


