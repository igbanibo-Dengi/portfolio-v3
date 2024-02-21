import React from 'react'

const Experience = () => {
    return (
        <div className='flex justify-end items-center h-[90%] w-full'>
            <div className='w-full max-w-[200px] sm:max-w-[500px] lg:max-w-[900px] mt-40 lg:mt-0'>
                <span className='flex flex-col lg:flex-row justify-between text-sm sm:text-base'>
                    <p className='font-semibold'>Front end developer at Capacity Bay Inc</p>
                    <p className='text-xs sm:text-base'>05/2022 - Present</p>
                </span>
                <p className='mb-4 text-xs sm:text-base'>Maryland - Remote.</p>
                <ul className='hidden sm:block  text-xs md:text-sm list-disc list-inside space-y-4 pb-5 sm:pb-0'>
                    <li>Led the front-end team in rebuilding the company&apos;s public-facing website using Next.js, increasing load time by 20% and SEO score by 35%, driving 15% organic traffic</li>
                    <li>Successfully translated Figma designs into highly responsive and user-friendly web applications using React.js and Tailwind CSS, resulting in a measurable 20% increase in user engagement</li>
                    <li>Collaborated with UI/UX on design principles and streamlined workflow, reducing feedback loops by 30%</li>
                    <li>Conducted code reviews, ensuring code quality and consistency on multiple projects</li>
                    <li>Integrated third-party APIs for enhanced functionality</li>
                </ul>

                <ul className=' sm:hidden text-xs md:text-sm list-disc list-inside space-y-3 pb-5 sm:pb-0'>
                    <li>Led the front-end team in rebuilding the company&apos;s website using Next.js, resulting in a 20% boost in load time and a 35% increase in SEO score, driving 15% more organic traffic.</li>
                    <li>Translated Figma designs into highly responsive web applications using React.js and Tailwind CSS, boosting user engagement by 20%.</li>
                    <li> Collaborated with UI /UX to streamline workflow and reduce feedback loops by 30%.</li>
                    <li>Conducted code reviews, ensuring code quality and consistency on multiple projects</li>
                    <li>Integrated third-party APIs for enhanced functionality</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience