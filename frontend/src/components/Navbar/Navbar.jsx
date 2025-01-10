import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="sticky top-0 header p-[1.5rem] backdrop-blur-lg" style={{backgroundColor:"#1e201e6c"}}>
            <nav className="flex justify-end">
                <ul className="nav-links flex gap-12">
                    <li className=' font-semibold hover:text-emerald-500 hover:scale-[.9] transition'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className=' font-semibold hover:text-emerald-500 hover:scale-[.9] transition'>
                        <Link to='/insightbot'>InsightBot</Link>
                    </li>
                    <li className=' font-semibold hover:text-emerald-500 hover:scale-[.9] transition'>
                        <Link to='/analytics'>Analytics</Link>
                    </li>
                    <li className=' font-semibold hover:text-emerald-500 hover:scale-[.9] transition'>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
