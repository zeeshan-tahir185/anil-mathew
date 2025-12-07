import React from 'react'

const OfficialCitations = () => {
    return (
        <div className='bg-[#E8DCCB] py-[40px] md:py-[100px] xl:py-[153px] w-full'>
            <div className='flex flex-col items-start gap-4 lg:gap-8 px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding max-w-[1920px] mx-auto w-full'>
                <h2 className='font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#111111]' style={{ letterSpacing: "-2px" }}>Official citations</h2>
                <p className='text-[#111111] opacity-65 font-inter text-base lg:text-xl'>All coverage and interviews are verifiable through the following primary sources:</p>
                <ul className='list-disc font-charter text-[#111111] text-lg lg:text-[24px] xl:text-[28px] 2xl:text-[32px] leading-[28px] xl:leading-[40px] 2xl:leading-[48px] ml-[20px] lg:ml-0'>
                    <li className=' '>Bloomberg TV segment — <span className='underline'>Near Intelligence’s Mathews on SPAC Deal</span></li>
                    <li>Schwab Network interview with Nicole Petallides — <span className='underline'>Anil Mathews with a company overview</span></li>
                    <li>Nasdaq MarketSite — <span className='underline'>Near Intelligence rings the Nasdaq Opening Bell</span></li>
                    <li>Absolute Return Podcast #231 —<span className='underline'>Enterprise Software with Near CEO Anil Mathews</span></li>
                    <li>Reuters — <span className='underline'>Data intelligence firm Near to go public via $1 billion SPAC deal</span></li>
                    <li>TechCrunch — <span className='underline'>Data intelligence startup Near lists on Nasdaq via SPAC at a $1B marketcap</span></li>
                    <li>TechCrunch — <span className='underline'>Near acquires Teemo</span></li>
                    <li>TechCrunch — <span className='underline'>Near acquires UberMedia</span></li>
                    <li>Business Times — <span className='underline'>Singapore mobile ad startup raises record Series B</span></li>
                    <li>Tech in Asia — <span className='underline'>India’s 30 highest funded tech startups 2014</span></li>
                    <li>Entrepreneur — <span className='underline'>The Big Daddy of Data</span></li>
                    <li>YourStory — <span className='underline'>Near’s pivot from adtech to SaaS</span></li>
                    <li>Arab News — <span className='underline'>Near invests in MEmob+</span></li>
                </ul>
            </div>
        </div>
    )
}

export default OfficialCitations
