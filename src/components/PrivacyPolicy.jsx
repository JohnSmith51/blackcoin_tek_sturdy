import React, { useState } from "react";

const PrivacyPolicy = () => {
    const initialContent = `This Privacy Policy explains how we collect, use, and protect your personal information.
    We do not share your data with third parties. Your privacy is our priority.`;

    const [content, setContent] = useState(initialContent);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleDeleteClick = () => {
        setContent("");
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <div className="">
            <h1 className="text-3xl font-extrabold text-primary">Privacy And Policy</h1>
            <p className=" pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </p>


            {isEditing ? (
                <textarea
                    className="w-full mt-12 p-2 border rounded-lg min-h-[150px] outline-none"
                    value={content}
                    onChange={handleChange}
                />
            ) : (
                <p className="mt-12 text-gray-600">{content || "No privacy policy available."}</p>
            )}

            <div className="flex  gap-3 mt-4">
                {isEditing ? (
                   <div className="flex gap-4">
                     <button
                        onClick={handleSaveClick}
                        className="primary cursor-pointer text-white px-6 py-2 rounded-lg font-semibold"
                    >
                        Save
                    </button>
                     <button
                     onClick={handleDeleteClick}
                     className="primary cursor-pointer text-white px-6 py-2 rounded-lg font-semibold"
                 >
                     Delete
                 </button>
                    </div>
                ) : (
                    <button
                        onClick={handleEditClick}
                        className="primary cursor-pointer text-white px-6 py-2 rounded-lg font-semibold"
                    >
                        Edit
                    </button>
                )}
               
            </div>
        </div>
    );
};

export default PrivacyPolicy;
