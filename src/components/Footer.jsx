"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo.webp"
              alt="PetNest Logo"
              width={56}
              height={56}
              className="w-14 h-14 object-cover"
              priority
            />

            <h2 className="text-3xl font-bold text-[#ff6b6b]">
              PET NEST
            </h2>
          </div>

          <p className="mt-5 text-gray-300 leading-7">
            PET NEST is a trusted pet adoption platform where loving
            families meet adorable pets looking for forever homes.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="bg-white/10 hover:bg-[#ff6b6b] duration-300 p-3 rounded-full"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="bg-white/10 hover:bg-[#ff6b6b] duration-300 p-3 rounded-full"
            >
              <FaInstagram />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              className="bg-white/10 hover:bg-[#ff6b6b] duration-300 p-3 rounded-full"
            >
              <FaTwitter />
            </Link>

            <Link
              href="https://youtube.com"
              target="_blank"
              className="bg-white/10 hover:bg-[#ff6b6b] duration-300 p-3 rounded-full"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-[#ff6b6b]">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#ff6b6b] duration-300">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/all-pets"
                className="hover:text-[#ff6b6b] duration-300"
              >
                All Pets
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/add-pet"
                className="hover:text-[#ff6b6b] duration-300"
              >
                Add Pet
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/my-requests"
                className="hover:text-[#ff6b6b] duration-300"
              >
                My Requests
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-[#ff6b6b]">
            Support
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>
              <Link href="#" className="hover:text-[#ff6b6b] duration-300">
                Adoption Guide
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#ff6b6b] duration-300">
                Pet Care Tips
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#ff6b6b] duration-300">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-[#ff6b6b] duration-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-[#ff6b6b]">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-300">

            <div className="flex items-start gap-3">
              <FaLocationDot className="mt-1 text-[#ff6b6b]" />
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-[#ff6b6b]" />
              <p>+880 1234-567890</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#ff6b6b]" />
              <p>support@petsnest.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} PET NEST. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-gray-400">
            <Link href="#" className="hover:text-[#ff6b6b] duration-300">
              Privacy
            </Link>

            <Link href="#" className="hover:text-[#ff6b6b] duration-300">
              Terms
            </Link>

            <Link href="#" className="hover:text-[#ff6b6b] duration-300">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;