'use client'
import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaImage } from "react-icons/fa";

const Business = () => {
    const [isEditing, setIsEditing] = useState(false);
    const textareaRef = useRef(null); // Ref for the textarea

    const [businessDetails, setBusinessDetails] = useState({
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        businessName: "Kevin Robinson",
        ownerName: "Kevin Robinson",
        address: "679 Columbia Road, Philadelphia, USA",
    });

    const [images, setImages] = useState([
        "/asset/images/user.png",
        "/asset/images/user.png",
        "/asset/images/user.png",
        "/asset/images/user.png",
    ]);

    // Focus the textarea when editing is turned on
    useEffect(() => {
        if (isEditing && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [isEditing]);

    // Toggle edit mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    // Handle input change
    const handleChange = (e) => {
        setBusinessDetails({ ...businessDetails, [e.target.name]: e.target.value });
    };

    // Handle image removal
    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImages([...images, imageUrl]);
        }
    };

    return (
        <div>
            <div>
                <h1 className="text-3xl text-primary font-extrabold">MY BUSINESS</h1>
            </div>

            <div className="flex pt-4 justify-between items-center">
                <h1 className="text-2xl font-extrabold">CAR REPAIR</h1>
                <button
                    onClick={toggleEdit}
                    className="px-6 primary font-semibold text-white py-2 rounded-lg cursor-pointer"
                >
                    {isEditing ? "Save" : "Edit"}
                </button>
            </div>

            <textarea
                ref={textareaRef}
                className="text-black w-[900px] outline-none border-2 mt-4 border-gray-300 rounded-xl p-4"
                rows="10"
                disabled={!isEditing}
                name="description"
                value={businessDetails.description}
                onChange={handleChange}
            />

            <h1 className="text-2xl pt-4 font-extrabold">BUSINESS NAME</h1>
            <input
                className="text-black w-[900px] border-2 mt-4 bg-white outline-none border-gray-300 rounded-xl px-4 py-2"
                type="text"
                disabled={!isEditing}
                name="businessName"
                value={businessDetails.businessName}
                onChange={handleChange}
            />

            <h1 className="text-2xl pt-4 font-extrabold">OWNER NAME</h1>
            <input
                className="text-black w-[900px] border-2 mt-4 bg-white outline-none border-gray-300 rounded-xl px-4 py-2"
                type="text"
                disabled={!isEditing}
                name="ownerName"
                value={businessDetails.ownerName}
                onChange={handleChange}
            />

            <h1 className="text-2xl pt-4 font-extrabold">ADDRESS</h1>
            <input
                className="text-black w-[900px] border-2 mt-4 bg-white outline-none border-gray-300 rounded-xl px-4 py-2"
                type="text"
                disabled={!isEditing}
                name="address"
                value={businessDetails.address}
                onChange={handleChange}
            />

            <div className="flex pt-10 gap-8">
                {isEditing && (
                    <label className="w-[236px] h-[164px] flex items-center justify-center border-2 border-[#a67419] bg-white border-dashed rounded-2xl cursor-pointer">
                        <input type="file" className="hidden" onChange={handleImageUpload} />
                        <FaImage className="w-40 h-40 text-primary" />
                    </label>
                )}

                <div className="flex gap-10 flex-wrap items-center">
                    {images.map((image, index) => (
                        <div key={index} className="relative w-[236px] rounded-2xl overflow-hidden">
                            <img className="w-full object-cover" src={image} alt="business" />
                            {isEditing && (
                                <button
                                    onClick={() => removeImage(index)}
                                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full"
                                >
                                    <FaTimes />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Business;
