'use client'
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Home = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [bookingModal, setBookingModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
    const [eventData, setEventData] = useState({
      name: "",
      date: "",
      time: "",
      location: "",
      description: "",
      image: "", // Stores the uploaded image URL
      status: "Pending",
    });

  const handleViewEvent = () => {
    // setSelectedEvent(event);
    setIsViewModalOpen(true);
  };
  const handleViewBooking = () => {
    // setSelectedEvent(event);
    setBookingModal(true);
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEventData({ ...eventData, image: imageUrl });
    }
  };
  const handleInputChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1 className='text-3xl text-primary font-extrabold'>HOME</h1>
      <div className='flex pt-4 justify-between items-center'>
        <h1 className='text-3xl font-extrabold'>MY BOOKING</h1>
        {/* <button className="px-6 primary font-semibold text-white py-2 rounded-lg cursor-pointer">
          See All
        </button> */}
      </div>
      <div className=' py-8 flex flex-wrap gap-8'>
        {
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className='border-2 rounded-xl bg-white w-[480px] flex items-center py-8 px-6 gap-4 border-gray-300'>
              <div>
                <h1 className='text-xl font-extrabold '>
                  CAR REPAIR
                </h1>
                <p className='text-sm pt-6'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className='flex items-center gap-4 pt-6'>
                  <p className='font-semibold text-xl'>
                    Kevin Robinson
                  </p>
                  <FaUserCircle className='text-2xl' />
                </div>
                <button
                onClick={()=>{handleViewBooking()}}
                  className=" px-4 mt-4  primary font-semibold text-white py-2 rounded-lg cursor-pointer"
                >
                  VIEW BOOKING
                </button>
              </div>
              <div className='relative'>
                <img src="/asset/images/progress.png" alt="" />
                <h1 className='text-xl z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  absolute font-extrabold'>Pending</h1>
              </div>
            </div>
          ))
        }
      </div>
      <div>
        <h1 className='text-3xl font-extrabold'>MY EVENTS</h1>
        <div className='py-8 flex flex-wrap gap-8'>
          {
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className="relative rounded-xl w-[480px] overflow-hidden flex items-center gap-4 border-gray-300">
                <img className="object-cover w-full h-full" src="/asset/images/event.png" alt="" />

                {/* Date Box (Behind the Overlay) */}
                <div className="absolute primary px-4 pb-3 pt-1 rounded-md right-6 bottom-42 z-10">
                  <h1 className="text-white font-semibold">05-Jan-2025 Sunday</h1>
                </div>

                {/* Overlay Container (Above the Date Box) */}
                <div className="absolute w-full p-6 bottom-0 z-20">
                  <div className="bg-black/80 rounded-2xl py-4 px-6 w-full relative z-30">
                    <div className='flex justify-between items-end'>
                      <h1 className="text-3xl font-extrabold text-primary">EVENT NAME</h1>
                      <p className='text-white text-sm'>09:00 Am to 05:00 Pm</p>
                    </div>
                    <p className="text-white pt-2">679 Columbia Road, Philadelphia, USA</p>
                    <div className="flex justify-between pt-4 items-center">
                      <img src="/asset/images/views.png" alt="" />
                      <button onClick={() => handleViewEvent()} className="px-6 primary font-semibold text-white py-2 rounded-lg cursor-pointer">
                        View Event
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>

      {isViewModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-40">
          <div className="bg-white rounded-lg h-[600px] w-[600px] shadow-lg relative">

            <div className="h-[370px] relative">
              <div className="w-full h-[200px] rounded-lg overflow-hidden">
                <img className="w-full h-[200px] object-cover" src={'/asset/images/event.png'} alt="Event" />
              </div>
              <div className="relative top-[-3rem] px-12 w-full">
                {/* Time box placed behind the event title */}
                <p className="text-white rounded-md absolute bottom-[-1.5rem] right-12 primary px-2 border pt-4 z-[2]">
                  {'09:00 Am to 05:00 Pm'}
                </p>
                <div className="px-8 py-4 w-full border border-gray-300 rounded-2xl bg-white z-[3] relative">
                  <h1 className="text-2xl font-bold">FRIENDS MUSIC PARTY</h1>
                  <p className="text-gray-600">{"November 15 2025"}</p>
                  <p className="text-gray-700 mt-2">{'679 Columbia Road, Philadelphia, USA'}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <img src="/asset/images/views.png" alt="" />
                    <p className="text-gray-700">50K+ Participants</p>
                  </div>
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
                <button onClick={()=>{setEditModalOpen(true)}} className="px-6 primary text-white font-semibold py-2 rounded-lg cursor-pointer">Edit</button>
                <button onClick={() => setIsViewModalOpen(false)} className="px-6 bg-red-600 text-white font-semibold py-2 rounded-lg cursor-pointer">Delete</button>
              </div>
              <button onClick={() => setIsViewModalOpen(false)} className=" px-6 primary text-white font-semibold py-2 rounded-lg cursor-pointer">
                Close
              </button>
            </div>
          </div>
        </div>

      )}
      { bookingModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-40">
            <div className="bg-white rounded-lg h-[600px] w-[600px] shadow-lg relative">

              <div className="h-[370px] relative">
                <div className="w-full h-[200px]  rounded-lg overflow-hidden">
                  <img className="w-full h-[200px] object-cover" src={'/asset/images/event.png'} alt="Event" />

                </div>
                <div className="relative top-[-3rem] px-12 w-full">
                  {/* Time box placed behind the event title */}
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
                  <button onClick={() => setBookingModal(false)} className="px-6 primary text-white font-semibold py-2 rounded-lg cursor-pointer">Accept</button>
                  <button
                    onClick={() => setBookingModal(false)}
                    className=" px-6 primary text-white font-semibold py-2 rounded-lg cursor-pointer">
                    Close
                  </button>
                </div>

              </div>
            </div>
          </div>
        )
      }
         {editModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-40 bg-opacity-50">
          <div className="bg-white rounded-lg px-8 w-[600px] py-10 shadow-lg relative">
            {/* Close Button */}
            <button onClick={() => setEditModalOpen(false)} className="absolute top-2 right-4 text-gray-600 text-xl cursor-pointer">
              ×
            </button>

            <form className="mt-4">
              <div className="flex justify-between items-center">
                <div className="w-[359px] rounded-2xl bg-gray-300 overflow-hidden h-[172px] flex items-center justify-center">
                  {eventData.image ? (
                    <img src={eventData.image} alt="Uploaded Preview" className="w-full h-full object-cover" />
                  ) : (
                    <p className="text-black">No Image</p>
                  )}
                </div>
                <label className="px-6 primary font-semibold text-white py-2 rounded-lg cursor-pointer bg-blue-600 text-center">
                  Upload Image
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
              </div>

              <label className="block text-lg font-extrabold mt-4 mb-2">EVENT TITLE</label>
              <input type="text" name="name" placeholder="Event Title" className="w-full border border-gray-300 outline-none px-4 py-2 rounded-xl mb-2" value={eventData.name} onChange={handleInputChange} required />

              <div className="flex gap-4 items-center">
                <div className="w-1/2">
                  <label className="block text-lg font-extrabold mb-2">TIME</label>
                  <input type="time" name="time" className="w-full border border-gray-300 outline-none px-4 py-2 rounded-xl mb-2" value={eventData.time} onChange={handleInputChange} required />
                </div>
                <div className="w-1/2">
                  <label className="block text-lg font-extrabold mb-2">DATE</label>
                  <input type="date" name="date" className="w-full border border-gray-300 outline-none px-4 py-2 rounded-xl mb-2" value={eventData.date} onChange={handleInputChange} required />
                </div>
              </div>

              <label className="block text-lg font-extrabold mb-2">EVENT LOCATION</label>
              <input type="text" name="location" placeholder="Location" className="w-full border border-gray-300 outline-none px-4 py-2 rounded-xl mb-2" value={eventData.location} onChange={handleInputChange} required />

              <label className="block text-lg font-extrabold mb-2">EVENT DESCRIPTION</label>
              <textarea className="w-full border border-gray-300 outline-none px-4 py-2 rounded-xl mb-2" name="description" value={eventData.description} onChange={handleInputChange}></textarea>

              <button type="submit" className="w-full cursor-pointer primary text-white font-semibold py-2 rounded-lg mt-2">
                Save Event
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home