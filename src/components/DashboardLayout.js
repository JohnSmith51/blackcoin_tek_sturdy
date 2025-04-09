import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { FaHome, FaBell, FaUser, FaKey, FaFileAlt, FaShieldAlt, FaSignOutAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import Home from "../components/Home";
import Business from "../components/Business";
import Events from "./Events";
import Notifications from "./Notifications";
import AccountInformation from "./AccountInformation";
import ResetPassword from "./ResetPassword";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import MyBookings from "./MyBookings";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("Home");
  const router = useRouter(); // Initialize router

  const menuItems = [
    { name: "Home", icon: FaHome, content: <Home /> },
    { name: "My Business", icon: FaBriefcase, content: <Business /> },
    { name: "My Bookings", icon: FaFileAlt, content: <MyBookings /> },
    { name: "My Events", icon: FaCalendarAlt, content: <Events /> },
    { name: "Notifications", icon: FaBell, content: <Notifications /> },
    { name: "Account Information", icon: FaUser, content: <AccountInformation /> },
    { name: "Reset Password", icon: FaKey, content: <ResetPassword /> },
    { name: "Terms and Conditions", icon: FaFileAlt, content: <TermsAndConditions /> },
    { name: "Privacy Policy", icon: FaShieldAlt, content: <PrivacyPolicy /> },
  ];

  const handleLogout = () => {
    // Logout logic here (e.g., clearing cookies/local storage)
    router.push("/login"); // Redirect to login page
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 side rounded-br-xl rounded-tr-xl text-black py-6 flex flex-col">
        <div className="mb-6 text-center">
          <img src="/asset/images/logos.png" alt="Logo" className="h-22 mx-auto" />
        </div>
        <nav className="flex-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center mb-2 cursor-pointer gap-3 p-3 font-semibold w-full hover:bg-[#ede3d1] transition ${
                activeTab === item.name ? "bg-[#ede3d1] text-primary border-r-6 border-[#a67419]" : ""
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
          {/* Logout button */}
          <button
            onClick={handleLogout} // Call logout function
            className="flex items-center mb-2 cursor-pointer gap-3 p-3 font-semibold w-full hover:bg-[#ede3d1] transition"
          >
            <FaSignOutAlt className="w-5 h-5" />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 relative flex flex-col">
        {/* Header */}
        <header className="flex justify-between border-b border-[#a77519] items-center p-4 bg-white">
          <h1 className="text-4xl font-extrabold py-2 px-6">Welcome! ABCD Car Repair</h1>
          <div className="flex items-center gap-4">
            <FaBell className="w-8 h-8 text-gray-600 cursor-pointer" />
            <FaUser className="w-8 h-8 text-gray-600 cursor-pointer" />
          </div>
          <img className="absolute w-[230.06px] h-[572.15px] top-0 right-0" src="/asset/images/left.png" alt="" />
        </header>

        {/* Page Content */}
        <main className="py-6 px-[45px] z-10 height overflow-hidden overflow-y-scroll">
          {menuItems.find((item) => item.name === activeTab)?.content}
        </main>
        <img className="fixed w-[230.06px] h-[588.63px] bottom-0 left-52" src="/asset/images/right.png" alt="" />
      </div>
    </div>
  );
}
