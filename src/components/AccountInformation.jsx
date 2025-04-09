import React, { useState } from "react";

const AccountInformation = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        position: "Software Engineer"
    });

    const handleEditClick = () => {
        setIsEditable(!isEditable);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className=" ">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl text-primary font-extrabold">ACCOUNT INFORMATION</h1>

            </div>
            <p className="pt-4 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            {/* Input Fields */}
            <div className="mt-6  grid grid-cols-1 gap-4">
                <div>
                    <label className="block font-semibold text-xl pb-1">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={!isEditable}
                        className={`w-full p-2 border rounded-lg border-gray-300 bg-white `}
                    />
                </div>
                <div>
                    <label className="block font-semibold text-xl pb-1">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={!isEditable}
                        className={`w-full p-2 border rounded-lg border-gray-300 bg-white `}
                    />
                </div>
                <div>
                    <label className="block font-semibold text-xl pb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isEditable}
                        className={`w-full p-2 border rounded-lg border-gray-300 bg-white `}
                    />
                </div>
                <div>
                    <label className="block font-semibold text-xl pb-1">Position</label>
                    <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        disabled={!isEditable}
                        className={`w-full p-2 border rounded-lg border-gray-300 bg-white `}
                    />
                </div>
                <div className="flex gap-4 pt-2 ">
                    <button
                        onClick={handleEditClick}
                        className="primary font-semibold cursor-pointer text-white px-8 py-2 rounded-lg transition"
                    >
                        {isEditable ? "Save" : "Edit"}
                    </button>
                   {
                    isEditable && (
                        <button
                        onClick={handleEditClick}
                        className="primary font-semibold cursor-pointer text-white px-8 py-2 rounded-lg transition"
                    >
                        Cancel
                    </button>
                    )
                   }
                </div>
            </div>
        </div>
    );
};

export default AccountInformation;
