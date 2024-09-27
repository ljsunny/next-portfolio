"use client";
import Link from "next/link";
import React, {useState} from "react";
import NavLink from "./NavLink"
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from "./MenuOverlay";
const navLinks =[
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]
const Navbar = () => {
    const [navbarOpen,setNavbarOpen] = useState(false);
    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"} className="text-5xl text-white font-semibold">JS</Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? 
                            <button 
                                onClick={()=> setNavbarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200  hover:text-white hover:border-white">
                                <Bars3Icon className="h-5 w-5x"></Bars3Icon>
                            </button>
                            :
                        
                            <button 
                                onClick={()=> setNavbarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200  hover:text-white hover:border-white">
                                <XMarkIcon className="h-5 w-5x"></XMarkIcon>
                            </button>
                        
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex gap-8 text-lg md:text-5xl">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />  
                            </li>

                        ))
                    }
                    </ul>
                </div>
            </div>
            {navbarOpen?<MenuOverlay links={navLinks}/>:null}
        </nav>
    );
}

export default Navbar;