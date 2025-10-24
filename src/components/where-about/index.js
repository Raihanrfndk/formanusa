import Image from 'next/image'
import React from 'react'

const WhereAbout = () => {
  return (
    <div className='flex flex-row gap-10 px-20 py-20'>
      <div className='w-1/2 flex items-center flex-col gap-4 justify-center'>
        <h1 className='text-7xl font-bold'>Whereabout</h1>
        <h2 className=' font-semibold opacity-70'>Jl. Kapten Tendean No.10, Mampang Prpt., Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790</h2>
      </div>
      <div className='w-1/2'>
        <Image alt='map' src={"/map.png"} width={1280} height={1280} />
      </div>
    </div>
  )
}

export default WhereAbout
