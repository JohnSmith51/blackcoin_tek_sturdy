"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
    FaApple,
    FaEye,
    FaGoogle,
    FaImage,
    FaRegEyeSlash,
    FaUserCircle,
} from "react-icons/fa";

const Page = () => {
    const [otp ,setOtp] = useState();
      const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        businessName: "",
        ownerName: "",
        businessAddress: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (otp) {
            const firstOtpInput = document.getElementById("otp-input-0");
            // if (firstOtpInput) {
            //     firstOtpInput.focus();
            // }
        }
    }, [otp]); // Run only when otp is true
    
    const validate = () => {
        let newErrors = {};

        if (!formData.email.includes("@")) newErrors.email = "Invalid email format";
        if (!formData.businessName) newErrors.businessName = "Business Name is required";
        if (!formData.ownerName) newErrors.ownerName = "Owner Name is required";
        if (!formData.businessAddress) newErrors.businessAddress = "Business Address is required";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChanges = (e) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Remove error on input change
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted successfully", formData);
            setOtp(true)
        }
       
    };

    const [otpInputs, setOtpInputs] = useState(new Array(4).fill(""));

    // Handle input changes
    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]?$/.test(value)) { // Allow only numbers
            const updatedOtp = [...otpInputs];
            updatedOtp[index] = value;
            setOtpInputs(updatedOtp);

            // Move to the next input field
            if (value && index < otpInputs.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    // Handle OTP paste
    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").slice(0, otpInputs.length);
        const updatedOtp = [...otpInputs];

        for (let i = 0; i < pasteData.length; i++) {
            if (/^[0-9]$/.test(pasteData[i])) {
                updatedOtp[i] = pasteData[i];
            }
        }

        setOtpInputs(updatedOtp);

        // Focus on the next empty input
        const nextEmptyIndex = updatedOtp.findIndex((digit) => digit === "");
        if (nextEmptyIndex !== -1) {
            document.getElementById(`otp-input-${nextEmptyIndex}`).focus();
        } else {
            document.getElementById(`otp-input-${otpInputs.length - 1}`).focus();
        }
    };

    // Handle focus to select the text
    const handleFocus = (e) => {
        e.target.select();
    };

    // Log OTP on continue
    const handleContinue = () => {
        const otp = otpInputs.join("");
        console.log("Entered OTP:", otp);
        router.push('/dashboard')
        setOtp(false)
    };

 

    return (
        <div className="flex h-screen">
            <div className="hidden relative md:flex w-1/2 bg-gray-100">
                <img className="absolute top-20 left-40" src="/asset/images/logo.png" alt="Login" />
                <img className="w-full h-full object-cover" src="/asset/images/loginimage.png" alt="Login" />
            </div>
            <div className="w-full relative md:w-1/2 flex flex-col justify-center items-center p-6">
                <img className="absolute top-0 right-0" src="/asset/images/left.png" alt="" />
                <div className="w-full z-10 max-w-md bg-white p-8 box rounded-lg">
                    <h2 className="text-2xl hFont font-extrabold mb-6 text-center">SIGN UP TO YOUR ACCOUNT</h2>
                    <form onSubmit={handleSubmit}>
                        {[
                            { name: "email", type: "email", placeholder: "Enter your email" },
                            { name: "businessName", type: "text", placeholder: "Business Name" },
                            { name: "ownerName", type: "text", placeholder: "Owner Name" },
                            { name: "businessAddress", type: "text", placeholder: "Business Address" },
                        ].map(({ name, type, placeholder }) => (
                            <div key={name} className="mb-2">
                                <input
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    value={formData[name]}
                                    onChange={handleChanges}
                                    className="w-full mt-1 px-4 py-2 border border-gray-300 outline-none rounded-lg"
                                />
                                {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
                            </div>
                        ))}

                        {[
                            { name: "password", state: showPassword, setState: setShowPassword, placeholder: "Enter your password" },
                            { name: "confirmPassword", state: showConfirmPassword, setState: setShowConfirmPassword, placeholder: "Confirm password" },
                        ].map(({ name, state, setState, placeholder }) => (
                            <div key={name} className="mb-2 relative">
                                <input
                                    type={state ? "text" : "password"}
                                    name={name}
                                    placeholder={placeholder}
                                    value={formData[name]}
                                    onChange={handleChanges}
                                    className="w-full mt-1 px-4 py-2 border rounded-lg border-gray-300 outline-none pr-10"
                                />
                                <button
                                    type="button"
                                    className="absolute cursor-pointer top-4 right-3 flex items-center text-gray-500"
                                    onClick={() => setState(!state)}
                                >
                                    {state ? <FaEye size={20} /> : <FaRegEyeSlash size={20} />}
                                </button>
                                {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
                            </div>
                        ))}

                        <div className="flex mb-2 gap-4 items-center">
                            <p className="text-[20px]">Upload Image</p>
                            <div className="flex gap-4 items-center">
                                <label htmlFor="imageUpload" className="cursor-pointer border-dashed w-[70px] h-[70px] rounded-lg border-2 border-[#a67419] flex items-center justify-center">
                                    <FaImage className="text-[#a67419]" size={50} />
                                </label>
                                <input type="file" id="imageUpload" accept="image/*" className="hidden" onChange={handleImageUpload} />
                                <div className="rounded-lg border-2 w-[70px] h-[70px] flex items-center justify-center overflow-hidden">
                                    {selectedImage ? <img src={selectedImage} alt="User" className="w-full h-full object-cover rounded-lg" /> : <FaUserCircle className="text-[#a67419] m-4" size={50} />}
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-full mb-2 primary text-white py-2 rounded-lg cursor-pointer transition duration-200">
                            Sign up
                        </button>

                        <div className="flex text-sm gap-4 mb-2 justify-center items-center">
                            <p>Don’t have an account?</p>
                            <p onClick={()=>{router.push('/login')}} className="text-primary cursor-pointer">Sign In</p>
                        </div>
                    </form>
                </div>
                <img className="absolute bottom-0 left-[-16rem]" src="/asset/images/right.png" alt="" />
            </div>
            {
                otp && (
                    <div className="absolute flex justify-center items-center top-0 z-20 left-0 w-full h-screen bg-black/50 ">
                        <div className="  rounded-xl p-4 bg-white">
                            <h1 className="text-4xl text-primary font-bold sm:text-5xl leading-tight text-center">Enter OTP</h1>
                            <p className="pt-1 text-center text-sm sm:text-base">OTP has been sent to your email address</p>
                            <p className="pb-6 text-center text-sm sm:text-base">xyz@email.com</p>
                            <div className=" px-4  text-center">
                                <form>
                                    <div className="flex items-center justify-center gap-4 sm:gap-6">
                                        {otpInputs.map((digit, index) => (
                                            <input
                                                key={index}
                                                id={`otp-input-${index}`}
                                                type="text"
                                                maxLength="1"
                                                className="w-14 h-14 sm:w-16 sm:h-16 text-center text-2xl sm:text-3xl font-bold text-black bg-white border border-gray-400 rounded-md focus:outline-none "
                                                value={digit}
                                                onChange={(e) => handleChange(e, index)}
                                                onPaste={handlePaste}
                                                onFocus={handleFocus}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex justify-center pt-4">
                                        <button
                                           type="button"
                                           onClick={handleContinue}
                                            className="w-full primary text-white py-2 rounded-lg cursor-pointer transition duration-200"
                                        >
                                               Continue
                                        </button>

                                    </div>
                                </form>
                                <div className="mt-2 text-sm sm:text-base">
                                    <span>Resend OTP in 30 seconds</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Page;