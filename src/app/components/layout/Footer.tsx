import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className=' pb-4'>
      <Image src="/images/home/footer.png" width={1913} height={260} alt='footer image' className='w-full' />
      <div className='max-w-[1330px] mx-auto lg:mx-auto text-center px-3  w-[95%] min-h-[304px] bg-[#1A1A1A] rounded-[14px] lg:rounded-[24px] flex flex-col  gap-[30px] items-center justify-center'>
        <p className='text-base lg:text-[24px] font-inter text-[#E8DCCB] mt-[40px]'>For interviews, speaking, or <br className='lg:hidden' /> partnerships, reach out on LinkedIn.</p>
        <p className='text-[#F7F4F1] text-base lg:text-lg font-inter '>LinkedIn | X | The Start Switch | Amazon Author | Bloomberg TV | Forbes | Crunchbase | Alphabyte</p>
        <p className='text-base lg:text-lg text-[#F7F4F1] font-inter opacity-65 mt-[30px] md:mt-[50px]'>© 2025 Anil Mathews</p>
      </div>
    </div>
  )
}

export default Footer
