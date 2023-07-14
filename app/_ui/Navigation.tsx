"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isProduction = process.env.NODE_ENV === "production";
  const basePath = isProduction ? "/tshirt-customizer" : "";
  const pathname = usePathname();

  return (
    <header className="z-50">
      <nav className="border-gray-200 bg-gray-100">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:mx-4 xl:mx-auto h-16">
          <Link href="/" className="flex items-center p-4 md:p-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Custom T-Shirts
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 mr-4"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            style={{ height: "calc(100vh - 4rem)" }}
            className={`w-full bg-white md:bg-transparent md:max-h-16 md:block md:w-auto z-10 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-transparent space-y-2 md:space-y-0">
              <li>
                <Link
                  href="/"
                  className={`block py-4 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:px-0 md:py-2"
                    ${
                      pathname.endsWith(`${basePath}/`)
                        ? "block py-4 pl-3 pr-4 text-white bg-cyan-700 rounded md:bg-transparent md:text-cyan-700 md:px-0"
                        : ""
                    }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className={`block py-4 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:px-0 md:py-2"
                    ${
                      pathname.startsWith(`${basePath}/catalog`)
                        ? "block py-4 pl-3 pr-4 text-white bg-cyan-700 rounded md:bg-transparent md:text-cyan-700 md:px-0"
                        : ""
                    }`}
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/design-studio"
                  className={`block py-4 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:px-0 md:py-2"
                    ${
                      pathname.startsWith(`${basePath}/design-studio`)
                        ? "block py-4 pl-3 pr-4 text-white bg-cyan-700 rounded md:bg-transparent md:text-cyan-700 md:px-0"
                        : ""
                    }`}
                >
                  Design Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className={`block py-4 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:px-0 md:py-2"
                    ${
                      pathname.startsWith(`${basePath}/cart`)
                        ? "block py-4 pl-3 pr-4 text-white bg-cyan-700 rounded md:bg-transparent md:text-cyan-700 md:px-0"
                        : ""
                    }`}
                >
                  Your Cart
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/login"
                  className="block text-white bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm py-4 px-4 md:py-2 text-center w-full mt-4 md:mt-0 font-semibold"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
