import React from 'react'

const NavMain = () => {
    return (
        <nav className='flex px-8 h-[72px] bg-[#0067A0]'>
            <div className='flex py-4 font-extrabold text-2xl text-white'>
              Eco  Solution<sup className='py-3'>ph</sup>  
            </div>
            {/**
             * will use Navigation Menu
             * See reference on https://ui.shadcn.com/docs/components/navigation-menu
             */}
            <div className='flex mx-6 justify-center items-center font-bold text-white gap-5'>
                <div>Departments</div>    
                <div>Eco Services</div>    
            </div>
            <div>

            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </nav>
    )
}

export default NavMain