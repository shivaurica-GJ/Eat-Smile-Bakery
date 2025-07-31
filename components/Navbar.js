"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/Eat Smile.png"
                className="img-fluid rounded-top w-12"
                alt=""
              />
              <span className="text-xl font-bold text-red-800">
                Eat Smile Bakery
              </span>
            </Link>
          </div>

          {/* Centered Nav Links */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-red-600 px-3 py-2 text-lg font-medium transition-colors group"
            >
              Home
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/hours-location"
              className="relative text-gray-700 hover:text-red-600 px-3 py-2 text-lg font-medium transition-colors group"
            >
              Hours & Location
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Side - Order Button */}
          <div className="hidden md:flex items-center">
            <Link href="/online-orders">
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-lg font-semibold px-5 py-2.5"
              >
                Online Cake Orders
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="relative block px-3 py-2 rounded-md text-base  font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 group"
              >
                Home
                <span className="absolute left-3 bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
              </Link>
              <Link
                href="/hours-location"
                className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 group"
              >
                Hours & Location
                <span className="absolute left-3 bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
              </Link>
              <Link
                href="/online-orders"
                className="relative block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 group"
              >
                Online Cake Orders
                <span className="absolute left-3 bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
