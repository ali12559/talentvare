import React from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className="flex bg-[#FFF] items-center justify-center gap-10 2xl:gap-30 p-5">
        <div>
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={42}
            height={39}
          ></Image>
        </div>
        <div className="flex gap-3 2xl:gap-5">
          <h5 className="text-[14px] 2xl:text-[16px] font-[600] text-[#0154AA] cursor-pointer ">
            Find Jobs
          </h5>
          <p className="text-[14px] 2xl:text-[16px] font-[500] text-[#737A91] cursor-pointer ">
            Top Companies
          </p>
          <p className="text-[14px] 2xl:text-[16px] font-[500] text-[#737A91] cursor-pointer ">
            Job Tracker
          </p>
          <p className="text-[14px] 2xl:text-[16px] font-[500] text-[#737A91] cursor-pointer ">
            My Calendar
          </p>
          <p className="text-[14px] 2xl:text-[16px] font-[500] text-[#737A91] cursor-pointer ">
            Documents
          </p>
          <p className="text-[14px] 2xl:text-[16px] font-[500] text-[#737A91] cursor-pointer ">
            Messages
          </p>
          <p className="text-[14px] 2xl:text-[16px] font-[500] text-[#737A91] cursor-pointer ">
            Notifications
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-5">
            <div className="relative bg-[#F6F9FF] p-5 rounded-[10px] hidden lg:flex  items-center justify-between ">
              <input
                type="search"
                placeholder="Search"
                className="text-[#737A91] pl-8 text-[14px] font-medium outline-none w-[250px] 2xl:w-[350px] "
              />
              <CiSearch className="text-[#737A91] left-5 absolute" />
            </div>
            <div className="bg-[#0154AA] py-4 px-4 rounded-[10px] cursor-pointer">
              <button className="text-[#FFF] text-[16px] font-[500] cursor-pointer">
                Resume Builder
              </button>
            </div>
            <div>
              <Image
                src="/assets/profile.png"
                alt="profile image"
                width={38}
                height={38}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
