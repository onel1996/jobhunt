import React from 'react'

import office from '../../Assets/office.png'
import hands from '../../Assets/hands.png'
import shield from '../../Assets/logo (5).png'


const Value = () => {
    return (
        <div className='mb-[4rem] mt-[6rem]'>
            <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold 
            w-[400px]-block'>The value that welcomes you.</h1>

        <div className='grid gap[10rem] grid-cols-3 items-center'>

            <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                <div className='flex items-center gap-3 '>
                    <div className='imgDiv p-[4px] rounded[.8rem] h-[40px] 
                    w-[40px] flex items-center justify-center'>
                        <img src={office} alt="" className='w-[70%]'/>
                    </div>
                    <span className='font-semibold text-textColor text-[18px]'>
                        Office Hunting
                    </span>
                </div>
                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] 
                font-semibold'>
                Find your job hunt to let them know and join the other teams. 
                </p>
            </div>

            <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                <div className='flex items-center gap-3 '>
                    <div className='imgDiv p-[4px] rounded[.8rem] h-[40px] 
                    w-[40px] flex items-center justify-center'>
                        <img src={hands} alt="" className='w-[70%]'/>
                    </div>
                    <span className='font-semibold text-textColor text-[18px]'>
                        Handy Shake
                    </span>
                </div>
                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] 
                font-semibold'>
                Do your handshake proper.
                </p>

                
            </div>

            <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                <div className='flex items-center gap-3 '>
                    <div className='imgDiv p-[4px] rounded[.8rem] h-[40px] 
                    w-[40px] flex items-center justify-center'>
                        <img src={shield} alt="" className='w-[70%]'/>
                    </div>
                    <span className='font-semibold text-textColor text-[18px]'>
                        Handy Shake
                    </span>
                </div>
                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] 
                font-semibold'>
                Beware of the illegal recruitment.
                </p>

                
            </div>
     </div>

     <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded[10px]">

        <div>
            <h1 className='text-blueColor text-[30px] font-bold'> Ready to hunt the careers?</h1>
            <h2 className='text-textColor text-[25px font-bold]'>Let's hunt!</h2>
        </div>
            <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor 
            hover:bg-white border-blueColor'>
                Hunt!
            </button>
        

     </div>
</div>

        



    )
}

export default Value