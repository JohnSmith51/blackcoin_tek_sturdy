import React, { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const validateForm = (name, value) => {
        let newErrors = { ...errors };

        if (name === "newPassword") {
            if (value.length < 6) {
                newErrors.newPassword = "Password must be at least 6 characters long";
            } else {
                delete newErrors.newPassword;
            }
        }

        if (name === "confirmPassword") {
            if (value !== formData.newPassword) {
                newErrors.confirmPassword = "Passwords do not match";
            } else {
                delete newErrors.confirmPassword;
            }
        }

        setErrors(newErrors);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateForm(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
    };

    return (
        <div className="  ">
            <h1 className="text-3xl text-primary  font-extrabold">Reset Password</h1>
            <p className="py-4 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 w-[80%] pt-6">
                {["currentPassword", "newPassword", "confirmPassword"].map((field) => (
                    <div key={field}>
                        <label className="block font-semibold pb-2 text-lg capitalize">
                            {field.replace(/([A-Z])/g, " $1")}
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword[field] ? "text" : "password"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className={`w-full p-2 border outline-none rounded-lg ${errors[field] ? "border-red-500" : "border-gray-300"}`}
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility(field)}
                                className="absolute cursor-pointer right-3 top-3 text-gray-500"
                            >
                                {showPassword[field] ? <FaRegEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>
                        {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                    </div>
                ))}

                <button
                    type="submit"
                    className="w-[15%] primary cursor-pointer text-white py-2 rounded-lg font-semibold "
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
