"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"

function Footer() {
  const { data: session } = useSession()

  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            System designing platform is a premier institution dedicated to teaching the art and science of System
            Designing. We nurture talent from the ground up, fostering a vibrant community of Designers.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-white transition-colors duration-300">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </li>
            {session ? (
              <>
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors duration-300">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-white transition-colors duration-300">
                    Profile
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link href="/signin" className="hover:text-white transition-colors duration-300">
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Tripura, India</p>
          <p>Agartala 799007</p>
          <p>Email: info@systemdesigningplatform.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">© 2025 System Designing Platform. All rights reserved.</p>
    </footer>
  )
}

export default Footer
