import React from 'react'
import Link from 'next/link'

const Services = () => {
  return (
    <div>
        Services
        <nav>
            <Link href="/ReactJs" className='text-2xl text-blue-500'> Reactjs </Link>
            <Link href="NextJs"  className='text-2xl text-blue-500'> NextJs</Link>
          </nav>
    </div>
  )
}

export default Services