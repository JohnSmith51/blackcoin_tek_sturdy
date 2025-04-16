'use client'
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const MyBookings = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const tabs = ["All", "Accepted", "Completed", "Pending", "Cancelled"];

    // Sample bookings
    const bookings = [
        { id: 1, title: "Car Repair", provider: "ABCD Car Repair", name: "Kevin Robinson", status: "Accepted" },
        { id: 2, title: "Oil Change", provider: "XZY Auto", name: "Sarah Connor", status: "Completed" },
        { id: 3, title: "Tire Rotation", provider: "ABCD Car Repair", name: "Mike Tyson", status: "Pending" },
        { id: 4, title: "Engine Check", provider: "Super Garage", name: "Emma Stone", status: "Cancelled" },
        { id: 5, title: "Battery Change", provider: "Battery Pro", name: "John Wick", status: "Accepted" },
        { id: 6, title: "Wheel Alignment", provider: "Wheel Fixers", name: "Bruce Wayne", status: "Completed" },
    ];

    // Filter based on active tab
    const filteredBookings = activeTab === "All"
        ? bookings
        : bookings.filter(b => b.status === activeTab);

    return (
        <div>
            <h1 className="text-3xl text-primary font-extrabold">MY BOOKING</h1>
            <p className="py-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>

            <div className="flex w-full justify-between px-4 pt-6 border-b border-gray-300">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-lg cursor-pointer w-[7%] font-semibold pb-2 ${activeTab === tab
                            ? "border-b-4 border-primary text-primary"
                            : "text-black"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="py-8 flex flex-wrap gap-8">
                {filteredBookings.map((booking, index) => (
                    <div key={index} className="border-2 rounded-xl bg-white w-[480px] flex items-center py-8 px-6 gap-4 border-gray-300">
                        <div>
                            <h1 className="text-xl font-extrabold">{booking.title}</h1>
                            <p className="text-sm pt-6">Lorem Ipsum is simply dummy text...</p>
                            <div className="flex items-center gap-4 pt-6">
                                <p className="font-semibold text-xl">{booking.name}</p>
                                <FaUserCircle className="text-2xl" />
                            </div>
                            <button
                                className="px-4 mt-4 primary font-semibold text-white py-2 rounded-lg cursor-pointer"
                                onClick={() => setIsViewModalOpen(true)}
                            >
                                VIEW BOOKING
                            </button>
                        </div>
                        <div className="relative">
                            <img src="/asset/images/progress.png" alt="Progress" />
                            <h1 className="text-xl z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute font-extrabold">
                                {booking.status}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

            {isViewModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-40">
                    <div className="bg-white rounded-lg h-[600px] w-[600px] shadow-lg relative">
                        <div className="h-[370px] relative">
                            <div className="w-full h-[200px]  rounded-lg overflow-hidden">
                                <img className="w-full h-[200px] object-cover" src={'/asset/images/event.png'} alt="Event" />
                            </div>
                            <div className="relative top-[-3rem] px-12 w-full">
                                <p className="text-white rounded-md absolute bottom-[-1.5rem] right-12 primary px-2 border pt-4 z-[2]">
                                    {' 11 AM'}
                                </p>
                                <div className="px-8 py-4 w-full border border-gray-300 rounded-2xl bg-white z-[3] relative">
                                    <div className='flex items-center gap-4'>
                                        <p className='text-xl font-semibold'>Provider</p>
                                        <p className='text-xl font-semibold'>
                                            ABCD Car Repair
                                        </p>
                                    </div>
                                    <h1 className="text-2xl mt-2 font-bold">Kevin Robinson</h1>
                                    <p className="text-gray-600">{"06-Jan-2025"}</p>
                                    <p className="text-gray-700 mt-2">{'kevinrobinson@gmail.com'}</p>
                                    <p className="text-gray-700 mt-2">{'+123-456-7890'}</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-800 px-12 mt-4">
                            Integer id augue iaculis, iaculis orci ut, blandit quam.
                            Donec in elit auctor, finibus quam in, phar. Proin id ligula dictum, covalis enim ut,
                            facilisis massa. Mauris a nisi ut sapien blandit imperdi.
                            Interdum et malesuada fames ac ante ipsum primis in faucibs. Sed posuere egestas nunc ut tempus.
                            Fu ipsum dolor sit amet.
                        </p>

                        <div className="flex px-12 justify-between gap-4 mt-4">
                            <div className="flex gap-4">
                                <button onClick={() => setIsViewModalOpen(false)} className="px-6 primary text-white font-semibold py-2 rounded-lg cursor-pointer">Accept</button>
                                <button onClick={() => setIsViewModalOpen(false)} className="px-6 primary text-white font-semibold py-2 rounded-lg cursor-pointer">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyBookings;
