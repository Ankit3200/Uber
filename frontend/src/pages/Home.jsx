import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className=' bg-cover  bg-centre bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-5 flex justify-between flex-col w-full bg-red-400 '>
    <img className='w-20 ml-8' src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png" alt="" />
            <div className='bg-white pb-6 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get started with Uber</h2>
                <Link to='/login' className=' flex items-center  justify-center w-full bg-black text-white py-3 mt-5 rounded'>Continue</Link>
            </div>

        </div>
    </div>
  )
}

export default Home