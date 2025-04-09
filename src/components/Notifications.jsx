'use client'
import React, { useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa'

const Notifications = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    return (
        <div>
            <div className="flex ">
                <h1 className="text-3xl text-primary font-extrabold">NOTIFICATIONS</h1>

            </div>
            <p className=" pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </p>

            <div>
                <table className="w-full border-separate border-spacing-y-4">
                    <thead>
                        <tr className="border-b border-gray-300">
                            <th className="text-left px-4  py-2">Name</th>
                            <th className="text-left px-4  py-2">Date & Time</th>
                            <th className="text-left px-4  py-2">Detail</th>
                            <th className="text-left px-4  py-2">Booking #</th>
                            <th className="text-left px-4  py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {[1, 2, 3].map((item, index) => (
                        <tr key={index} className="bg-white border border-gray-300 rounded-2xl shadow-md my-4">
                            <td className="px-4 py-2 rounded-l-2xl">Event 1</td>
                            <td className="px-4 py-2">12th March, 5:00 PM</td>
                            <td className="px-4 py-2">Some event details</td>
                            <td className="px-4 py-2">12345</td>
                            <td className="px-4 py-2 rounded-r-2xl relative">
                            {/* Three-Dot Button */}
                            <button 
                                className="p-3 cursor-pointer rounded-full primary outline-none" 
                                onClick={() => toggleDropdown(index)}
                            >
                                <FaEllipsisV className="w-5 h-5 text-white" />
                            </button>

                            {/* Dropdown Menu */}
                            {openDropdown === index && (
                                <div className="absolute right-0 mt-2 w-40 z-10 bg-white border border-gray-300 rounded-lg shadow-lg">
                                    <ul className="p-2 text-sm text-black">
                                        <li onClick={()=>{setOpenDropdown(null)}} className="px-4 py-2 border-b border-[#a67419]  cursor-pointer">View Booking</li>
                                        <li onClick={()=>{setOpenDropdown(null)}} className="px-4 py-2 border-b border-[#a67419]  cursor-pointer">Accept</li>
                                        <li onClick={()=>{setOpenDropdown(null)}} className="px-4 py-2 border-b border-[#a67419]  cursor-pointer">Decline</li>
                                        <li onClick={()=>{setOpenDropdown(null)}} className="px-4 py-2 border-b border-[#a67419] text-red-500  cursor-pointer">Remove</li>
                                    </ul>
                                </div>
                            )}
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Notifications