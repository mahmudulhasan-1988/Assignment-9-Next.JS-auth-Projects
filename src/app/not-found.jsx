import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 flex items-center justify-center px-6">
            <div className="max-w-2xl text-center">

                {/* Glowing 404 */}
                <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                    The page you are looking for might have been removed,
                    renamed, or is temporarily unavailable.
                </p>

                {/* Decorative Blur Circles */}
                <div className="relative mt-10">
                    <div className="absolute -top-10 left-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                    <Link
                        href="/"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300"
                    >
                        Back To Home
                    </Link>

                    <Link
                        href="/destinations"
                        className="px-8 py-4 rounded-full border border-gray-600 text-gray-200 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Explore Destinations
                    </Link>

                </div>

                {/* Bottom Text */}
                <p className="mt-12 text-sm text-gray-500">
                    Wanderlast © {new Date().getFullYear()} — Explore the world beautifully.
                </p>

            </div>
        </div>
    );
};

export default NotFoundPage;