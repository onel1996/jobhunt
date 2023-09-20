import React from 'react'

// Imported Icons ==========>

import {BiTimeFive} from 'react-icons/bi'

// Imported Images ==========>
import logo1 from '../../Assets/logo (1).png'
import logo2 from '../../Assets/logo (2).png'
import logo3 from '../../Assets/logo (3).png'
import logo4 from '../../Assets/logo (4).png'
import logo5 from '../../Assets/logo (6).png'
import logo6 from '../../Assets/logo (7).png'
import logo7 from '../../Assets/logo (8).png'
import logo8 from '../../Assets/logo (9).png'


// For al the jobs, order array called Map
// It's Data


const Data =[
    {
        id: 1,
        image: logo1,
        title: 'Software Engineer',
        time: 'Now',
        location: 'Baguio',
        description: 'is a professional who is responsible for the design and construction of websites.',
        company: 'Meta Business Suite'
    },
    {
        id: 2,
        image: logo2,
        title: 'UI and UX',
        time: 'M-F',
        location: 'Pangasinan',
        description: 'UX design refers to the term “user experience design”, while UI stands for “user interface design”. ',
        company: 'Meta Business Suite'
    },

    {
        id: 3,
        image: logo3,
        title: 'Data Analytics',
        time: 'On-Site(M-F)',
        location: 'Davao',
        description: 'is the collection, transformation, and organization of data in order to draw conclusions, make predictions, and drive informed decision making.',
        company: 'Meta Business Suite'
    },
    
    {
        id: 4,
        image: logo4,
        title: 'Technical Engineer',
        time: 'On-Site(M-F)',
        location: 'La Union',
        description: 'identify problems, develop strategies, and perform quality control.',
        company: 'Meta Business Suite'
    },


    {
        id: 5,
        image: logo5,
        title: 'Layout Artist',
        time: 'Online(Part-Time)',
        location: 'Manila',
        description: 'begin their work at the start of an animation production, after the storyboard and the look of the project have been agreed upon.',
        company: 'Meta Business Suite'
    },

    {
        id: 6,
        image: logo6,
        title: 'Video Editor',
        time: 'On-Site(Full-Time)',
        location: 'Laguna',
        description: 'is the person who makes production and/or post-production changes to a film.',
        company: 'Meta Business Suite'
    },

    {
        id: 7,
        image: logo7,
        title: 'Audio Editor',
        time: 'Online(Part-Time)',
        location: 'Cebu',
        description: 'begin their work at the start of an animation production, after the storyboard and the look of the project have been agreed upon.',
        company: 'Meta Business Suite'
    },

    {
        id: 8,
        image: logo8,
        title: 'Host',
        time: 'Online(ANYTHING YOU WANT)',
        location: 'Cebu',
        description: 'begin their work at the start of an animation production, after the storyboard and the look of the project have been agreed upon.',
        company: 'Meta Business Suite'
    },

    

    


]
const Jobs = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {
                    Data.map(({id,image,title,time,location,description,company})=>{
                        return (
                <div key = {id} className="group group/group-item singleJob w-[250px] p-[20px] bg-white rounded [10px]
                hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor 
                    group-hover:text-white'>{title}</h1>
                    <span className='flex items-center text-[#ccc] gap-1'>
                        <BiTimeFive />{time}
                    </span>
                </span>
                <h6 className='text-[#ccc]'>{location}</h6>

                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] 
                group-hover:text-white'>{description}
                </p>

                <div className='company flex items-center gap-2'>
                    <img src={image} alt="Company Logo" className='w-[10%]' />
                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                    Apply Now
                </button>
                </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Jobs