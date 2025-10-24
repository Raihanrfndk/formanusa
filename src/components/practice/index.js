import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const PracticeSection = () => {
  return (
    <div className='pt-10'>
    <h1 className='relative z-2 text-5xl font-bold flex justify-start ml-5 -mb-5'>Practice Area</h1>
    <div className='bg-[#b58d68] w-screen h-auto'>
      <div className='flex flex-row items-center'>
        <div className='px-5 py-5'>
            <h1 className='text-lg'>Sebagai platform arsitektur modern yang berpengalaman, Forma Nusa berfokus pada berbagai bidang desain dan pembangunan di wilayah Jabodetabek.</h1>
            <h2 className='text-lg pt-5'>Kami merancang dan mengelola setiap proyek — mulai dari konsep, desain, hingga pelaksanaan — dengan mengedepankan kualitas, efisiensi, dan harmoni antara unsur modern dan tradisional Nusantara.</h2>
            <div className='grid grid-cols-2 pt-5'>
                <h3 className='flex flex-row font-bold items-center'><Check color='white' size={30} strokeWidth={5} className='mr-2'/>Rumah</h3>
                <h4 className='flex flex-row font-bold items-center'><Check color='white' size={30} strokeWidth={5} className='mr-2'/>Rumah Adat Modern</h4>
                <h5 className='flex flex-row font-bold items-center'><Check color='white' size={30} strokeWidth={5} className='mr-2'/>Renovasi</h5>
                <h6 className='flex flex-row font-bold items-center'><Check color='white' size={30} strokeWidth={5} className='mr-2'/>Villa</h6>
            </div>
        </div>
        <div>
            <Image src="/practice.png" alt='practice' width={1280} height={1280} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default PracticeSection
