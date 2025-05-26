import React from 'react'
import Link from "next/link";
import {cn} from "@/lib/utils";

const Logo = ({className} : {className?: string}) => {
    return (
        <Link
            href={"/"}
            className={cn(
                "text-2xl text-shop_dark_green font-black tracking-wider uppercase " +
                "hover:text-shop_light_green hoverEffect group font-sans",
                className
            )}
        >
            Fros<span className="text-shop_light_green group-hover:text-shop_dark_green hoverEffect">t</span>
        </Link>
    )
}
export default Logo
