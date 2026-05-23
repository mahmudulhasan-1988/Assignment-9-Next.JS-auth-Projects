import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { BsCurrencyDollar, BsGraphUpArrow } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';
import { PiAirplaneTiltLight } from 'react-icons/pi';

const ProfilePage = () => {
    return (
        <div className=' max-w-7xl mx-auto items-center justify-center'>
            <div className='mt-10'>
                <h1 className=' text-4xl font-bold'>My Profile</h1>
                <p className=' text-gray-500'>Manage your account settings and travel preferences</p>
            </div>

            <div className=' grid lg:grid-cols-2  gap-10 mt-10 border border-orange-100 p-5 rounded-2xl shadow-2xl mb-10 '>

                <div className=' border shadow-xl rounded-2xl p-10 flex flex-col justify-center items-center text-center'> 
                    <Image src={"/assets/person2.png"} alt="Profile Picture" width={100} height={10} className='rounded-full ' />
                    <h2 className=' text-xl font-bold'>John Doe</h2>
                    <p>Email: john.doe@example.com</p>
                    <div className='flex justify-between gap-10 mt-5'>
                        <h3>Member Since</h3>
                        <p>January 15, 2022</p>
                    </div>
                    <div className='flex justify-between gap-10 mt-5'>
                        <h3>Nationality</h3>
                        <p>United States</p>
                    </div>
                    <Button
                        type="submit"
                        variant="outline"

                        className=" rounded-none w-full bg-cyan-500 text-white mt-5 hover:bg-cyan-600"
                    >
                        <FaRegEdit />Edit Profile
                    </Button>
                </div>

                <div className='right div  '>
                    <h2 className=' text-xl font-bold'>Travel Statistics</h2>

                    <div className='grid md:grid-cols-2 gap-8 mt-5'>

                        <div className='border p-5  shadow-lg'>
                            <p className=' text-xl text-gray-500'>Total Bookings</p>
                            <div className=' flex justify-between items-center'>
                            <p className=' text-xl'>12</p>
                            <div className=' bg-blue-200 rounded-full py-2 px-2'>
                            <PiAirplaneTiltLight className=' text-3xl text-blue-500' />
                            </div>
                            </div>
                        </div>
                        <div className='border p-5  shadow-lg'>
                            <p className=' text-xl text-gray-500'>Countries Visited</p>
                            <div className=' flex justify-between items-center'>
                            <p className=' text-xl'>18</p>
                            <div className=' bg-green-200 rounded-full py-2 px-2'>
                            <BiWorld className=' text-3xl text-green-700' />
                            </div>
                            </div>
                        </div>
                        <div className='border p-5  shadow-lg'>
                            <p className=' text-xl text-gray-500'>Upcoming Trips</p>
                            <div className=' flex justify-between items-center'>
                            <p className=' text-xl'>12</p>
                            <div className=' bg-orange-200 rounded-full py-2 px-2'>
                            <BsGraphUpArrow className=' text-3xl text-orange-500' />
                            </div>
                            </div>
                        </div>
                        <div className='border p-5  shadow-lg'>
                            <p className=' text-xl text-gray-500'>Total Spent</p>
                            <div className=' flex justify-between items-center'>
                            <p className=' text-xl'>$15,750</p>
                            <div className=' bg-purple-200 rounded-full py-2 px-2'>
                            <BsCurrencyDollar className=' text-3xl text-purple-500' />
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
