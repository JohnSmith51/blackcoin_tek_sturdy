import React, { useState } from "react";

const TermsAndConditions = () => {
    const initialContent = `These Terms and Conditions outline the rules and regulations for the use of our website.
    By accessing this website, you agree to these terms and conditions. If you do not agree to the terms,
    please do not use the site.`;

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
            <h1 className="text-3xl font-extrabold text-primary">Terms and Conditions</h1>
            <p className="pt-4 text-gray-600">
                These Terms and Conditions outline the rules and regulations for the use of our website.
                By accessing this website, you agree to these terms and conditions. If you do not agree to the terms,
                please do not use the site.
            </p>

            {isEditing ? (
                <textarea
                    className="w-full mt-12 p-4 border rounded-lg min-h-[150px] outline-none text-gray-700"
                    value={content}
                    onChange={handleChange}
                    placeholder="Edit your terms and conditions here..."
                />
            ) : (
                <p className="mt-12 text-gray-600">{content || "No terms and conditions available."}</p>
            )}

            <div className="flex  gap-3 mt-6">
                {isEditing ? (
                    <div className="flex gap-4">
                        <button
                            onClick={handleSaveClick}
                            className="primary cursor-pointer text-white px-6 py-2 rounded-lg font-semibold transition"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleDeleteClick}
                            className="primary cursor-pointer text-white px-6 py-2 rounded-lg font-semibold transition"
                        >
                            Delete
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleEditClick}
                        className="primary cursor-pointer text-white px-6 py-2 rounded-lg font-semibold transition"
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default TermsAndConditions;
