import Image from 'next/image'
import React from 'react'

const ServiceSection = () => {
  return (
    <>
    <h1 className='text-5xl font-bold flex justify-center -mb-5'>SERVICES</h1>
          <div className="bg-[#b58d68]/50 text-black py-10 px-10 grid grid-rows-1 gap-6">
            <div className="grid grid-cols-3 items-start gap-6">
              {/* Renovasi */}
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/renovasi.png"
                  alt="Binus University"
                  width={70}
                  height={70}
                  className="mb-2 object-fit w-50 rounded-lg"
                />
                <div className='flex justify-center flex-col'>
                  <h1 className='text-lg text-center font-bold'>RENOVASI RUMAH</h1>
                  <p className="text-xs text-center">
                    Forma Nusa siap memberikan layanan lengkap arsitektur rumah sesaui dengan kebutuhan
                  </p>
                </div>
              </div>
    
              {/* Konsultasi */}
              <div className="flex flex-col items-center text-left">
                <Image
                  src="/konsultasi.png"
                  alt="UN SDG"
                  width={70}
                  height={70}
                  className="mb-2 object-fit w-50 rounded-lg"
                />
                <div className='flex justify-center flex-col'>
                  <h1 className='text-lg text-center font-bold'>KONSULTASI DESAIN</h1>
                  <p className="text-xs text-center">
                    Forma Nusa membantu klien membangun rencana mereka sesuai kebutuhan dan keinginan
                  </p>
                </div>
              </div>
    
              {/* Project */}
              <div className="flex flex-col items-center text-left">
                <Image
                  src="/project.png"
                  alt="Tongkol Group"
                  width={70}
                  height={70}
                  className="mb-2 object-fit w-50 rounded-lg"
                />
                <div className='flex justify-center flex-col'>
                  <h1 className='text-lg text-center font-bold'>FULL PROJECT BANGUN RUMAH</h1>
                  <p className="text-xs text-center">
                    Forma Nusa membantu klien membangun rumah klien dari awal hingga jadi melalu jasa project managing kami
                  </p>
                </div>
              </div>
            </div>
          </div>
          </>
  )
}

export default ServiceSection
