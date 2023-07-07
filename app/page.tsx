'use client'
import Image from 'next/image'
import Loading from './loading';
import { useState, useEffect } from 'react';

export default function Home() {

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Simulate a delay for hydration
    setTimeout(() => {
      setIsHydrated(true); // Set isHydrated to true after the delay (e.g., when hydration is complete)
    }, 2000);
  }, []);

  return (
    <main  >
       {isHydrated ? (
      <div className='flex bg-sky-700 p-0.5 h-screen'>
        <h1 className='flex-center text-center align-middle items-center text-8xl m-40
         text-white '>Welcome to my Homepage</h1>
      </div>
      ) : (
        <Loading /> // Render the Loading component while hydration is not complete
      )}
    </main>
  )
}
