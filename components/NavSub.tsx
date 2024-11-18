const NavSub = () => {
    return (
        <nav className="flex justify-between items-center px-8 text-sm border-b-2 text-black/80">
            <div className="flex py-1 gap-x-2">
                <span>Your region</span>
                <span className="text-[#0067A0] font-bold">Vertis North, Quezon City</span>
            </div>
            <div className="flex gap-x-12">
                <span>More Offers</span>
                <span>Eco Voucher</span>
                <span>Best Seller</span>
                <span>Weekend Sale</span>
                <span>Help Center</span>
                <span>More</span>
            </div>
        </nav>
    )
}  

export  default NavSub 