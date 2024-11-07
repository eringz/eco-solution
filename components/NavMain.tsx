import { Input } from "@/components/ui/input";


const NavMain = () => {
    return (
        <nav className='flex items-center px-8 h-[72px] bg-[#0067A0] text-white font-semibold'>
            <div className='flex py-4 font-extrabold text-2xl text-white'>
              Eco  Solution<sup className='py-3'>ph</sup>  
            </div>
            {/**
             * will use Navigation Menu for Departments and Services
             * See reference on https://ui.shadcn.com/docs/components/navigation-menu
             */}
            <div className='flex mx-6 justify-center items-center font-bold gap-5'>
                <div>Departments</div>    
                <div>Eco Services</div>    
            </div>
            {/**
             * will use svg search
             */}
            <div className="flex justify-center items-center mr-6">
                <Input 
                    type="text"
                    placeholder="Search"
                    className="w-[520px] h-[40px] bg-white rounded-3xl outline-none"
                />
            </div>
            <div>
                <ul className="flex gap-8 text-sm">
                    <li>
                        {/**
                         * will find icon for reorder
                         */}
                        <i></i>
                        <span>Reorder</span>
                    </li>
                    <li>
                        {/**
                         * will find icon for reorder
                         */}
                        <i></i>
                        <span>Savings</span>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center text-sm mx-6">
                {/**
                 * will get icon for sign in 
                 */}
                <i></i>
                <span>Sign in</span>
            </div>
            <div className="w-[1px] h-8 bg-white/40"></div>
            <div className="flex flex-col justify-center items-center text-sm mx-4">
                {/**
                 * will get icon for cart
                 */}
                <i></i>
                <span>Cart</span>
            </div>
        </nav>
    )
}

export default NavMain