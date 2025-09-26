import Navbar from '@/components/Navbar';
import Image from 'next/image'
import React from 'react'

import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";


export default function page() {

  const profile = [
    {
      id:1,
      heading:"Profile Visitor",
      number:"140",
    },
    {
      id:2,
      heading:"Resume Viewer",
      number:"20",
    },
    {
      id:3,
      heading:"My Jobs",
      number:"88",
    },
  ]

  const similar = [
    {
      id: 1,
      heading: "Frontend",
    },
    {
      id: 2,
      heading: "Backend",
    },
    {
      id: 3,
      heading: "Graphic Designer",
    },
  ]

  const jobs = [
    {
      title: "Featured Jobs",
      link: "See Featured Jobs",
      items: [
        {
          id: 1,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 2,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 3,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 4,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 5,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
      ]
    },
    {
      title: "Recommended Jobs",
      link: "See Recommended Jobs",
      items: [
        {
          id: 1,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 2,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 3,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 4,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 5,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 6,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 7,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 8,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 9,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 10,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
      ]
    },
    {
      title: "Latest Jobs",
      link: "See Latest Jobs",
      items: [
        {
          id: 1,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 2,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 3,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 4,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 5,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 6,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 7,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 8,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 9,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
        {
          id: 10,
          subtitle: "Promoted",
          heading: "UI/UX Designer",
          address: "Seattle, USA (Remote)",
          time: "1 day ago",
          applicants: "22 applicants"
        },
      ]
    },
  ]


  return (
    <div>
      <Navbar/>
      <div className='bg-[#F4F4F4] px-8 2xl:px-30 py-15 ' >
        <div className='grid grid-cols-12 gap-5 '>
          <div className='col-span-4' >

            <div className='bg-[#FFF] rounded-[10px] mb-5  ' >
              <div className='relative' >
                <Image src="/assets/bnrimg.png" alt='bg image' width={346} height={100} className='w-[100%] m-auto rounded-tl-[10px] rounded-tr-[10px] ' ></Image>
                <Image src="/assets/prfle.png" alt='profile image' width={86} height={86} className='absolute -bottom-10 left-0 right-0 m-auto ' ></Image>
              </div>
              <div className='text-center pt-15 pb-5 px-15 2xl:px-18'>
                <h4 className='text-[18px] font-[600] text-[#333333] ' >Albert Flores</h4>
                <p className='text-[#333333 font-[500] text-[#333333]  '>Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web... 
                  <span className='text-[#585D6E] text-[12px] block ' >Clinton, Maryland</span>
                </p>
              </div>
            </div>
            <div className='bg-[#FFF] rounded-[10px] mb-5 '>
              {profile.map((item) => {
                return(
                  <div key={item.id}>
                    <div className="relative after:content-[''] after:absolute after:bg-[#E9ECEF] after:w-[85%] after:h-[2px] after:left-0 after:right-0 after:m-auto  after:last:hidden ">
                      <div className="flex items-center justify-between px-10 py-2">
                        <h5 className="text-[14px] font-[500] text-[#333333]">{item.heading}</h5>
                        <p className="text-[16px] font-[500] text-[#0154AA]">{item.number}</p>
                      </div>
                    </div>
                  </div>
                  
                )
              })}
            </div>
            <div className='bg-[#FFF] rounded-[10px] '>
              <div className='flex items-center justify-between px-10 py-2' >
                <h5 className='text-[#333333] text-[16px] font-[600] ' >My calendar <span className='block text-[#737A91] text-[14px] font-[500]'>Upcoming Interviews</span></h5>
                <FaChevronDown className='text-[#333333]' />
              </div>
            </div>
          </div>
          
          <div className='col-span-8'>
            <div className='mb-10' > 
              <h3 className='text-[#333333] text-[22px] font-[600] ' >Find your Dream Job, <span className='text-[#0154AA] ' >Albert!</span></h3>
              <p className='text-[#585D6E] text-[14px] font-[500] ' >Explore the latest job openings and apply for the best opportunities available today!</p>
            </div>
            <div className='mb-10 py-5 px-5 flex items-center justify-between bg-[#FFF] rounded-[10px] '>
              <div className='w-[40%] 2xl:w-[50%]'>
                <input placeholder='Job Title, Company, or Keywords' className='text-[#585D6E] text-[14px] font-[500] outline-none w-[100%] ' />
              </div>
              <div className='flex items-center justify-center gap-10 ' >
                <div className='flex items-center gap-5 ' >
                  <p className='relative text-[#585D6E] text-[14px] font-[500] flex items-center px-5 gap-3' >
                    <span className='absolute bg-[#E9ECEF] h-[30px] w-[2px] left-0 ' ></span>
                    Select Location <FaChevronDown />
                    <span className='absolute bg-[#E9ECEF] h-[30px] w-[2px] right-0 ' ></span>
                  </p>
                  <p className='text-[#585D6E] text-[14px] font-[500] flex items-center gap-3 ' >Job Type <FaChevronDown /> </p>
                </div>
                <div className="bg-[#0154AA] py-3 px-8 rounded-[10px] cursor-pointer   ">
                  <button className="flex items-center gap-2 m-auto text-[#FFF] text-[16px] font-[500] cursor-pointer">
                    <CiSearch className='text-[25px]' /> Search
                  </button>
                </div>
              </div>
            </div>
            <div className='mb-10 relative'>
              <div className='flex items-center gap-5 ' >
                <h5 className='text-[#737A91] text-[14px] font-[500] ' >Similar:</h5>
                <div className='flex items-center gap-2'>
                  {similar.map((item ) => {
                    return(
                      <div key={item.id}>
                        <p className='text-[#737A91] text-[12px] font-[500] py-3 px-5 border-[#737A91] border-solid border-[1px] rounded-[5px] cursor-pointer ' >{item.heading}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <p className='absolute bg-[#E9ECEF] w-[100%] h-[1px] -bottom-7 '></p>
            </div>
            <div className='my-10'>
              {jobs.map((item ) => {
                return(
                  <div key={item.title} >
                    <div className=' flex items-center gap-5 '>
                      <h3 className='text-[#333333] text-[18px] font-[500] ' >{item.title}</h3>
                      <p className='text-[#0154AA] text-[14px] font-[500] underline ' >{item.link} </p>
                    </div>
                    <div className='grid grid-cols-3 2xl:grid-cols-5 gap-3 my-5 '>
                      {item.items.map((i) => {
                        return(
                          <div key={i.id} >
                            <div className='bg-[#FFF] py-3 px-5 rounded-[10px] border-[1px] border-[#E1E1E1] border-solid  '>
                              <span className='text-[#333333] text-[10px] font-[600] mb-3 ' >{i.subtitle}</span>
                              <div className='flex items-center gap-5 mb-2'>
                                <Image src="/assets/tems.png" alt='teams image' width={23} height={23} ></Image>
                                <h3 className='text-[#333333] text-[14px] font-[500] ' >{i.heading} <span className='block text-[12px] '>Teams</span> </h3>
                              </div>
                              <div className=' flex items-center gap-2 mb-2'>
                                <CiLocationOn className='text-[#585D6E]' />
                                <p className='text-[#585D6E] text-[12px] font-[500]' >{i.address}</p>
                              </div>
                              <div className=' flex items-center gap-2 mb-3 relative '>
                                <FaRegClock className='text-[#585D6E]' />
                                <p className="text-[#585D6E] text-[12px] font-[500] flex gap-5 after:content-[''] after:absolute after:bg-[#E9ECEF] after:w-[2px] after:h-[20px] after:right-33 2xl:after:right-22   ">{i.time} <span className='text-[#0154AA]' >{i.applicants}</span></p>
                              </div>
                              <div className='flex items-center justify-between gap-2'>
                                <div className="bg-[#0154AA] py-2 px-5 rounded-[8px]  cursor-pointer   ">
                                  <span className=" m-auto text-[#FFF] text-[12px] font-[500] cursor-pointer">
                                    Apply Now
                                  </span>
                                </div>
                                  <Image src="/assets/save.png" alt='save' width={12} height={16} ></Image>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
