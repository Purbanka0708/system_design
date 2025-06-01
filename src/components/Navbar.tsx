"use client"

import { useState } from "react"
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu"
import { cn } from "@/utils/cn"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const { data: session } = useSession()

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic System Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced composition</HoveredLink>
            <HoveredLink href="/courses">System writing</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
        {session ? (
          <div className="flex items-center gap-4">
            <MenuItem setActive={setActive} active={active} item={`Hi, ${session.user?.name?.split(" ")[0] || "User"}`}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/profile">Profile</HoveredLink>
                <HoveredLink href="/dashboard">Dashboard</HoveredLink>
                <div
                  onClick={() => signOut()}
                  className="cursor-pointer text-neutral-700 dark:text-neutral-200 hover:text-black"
                >
                  Sign Out
                </div>
              </div>
            </MenuItem>
          </div>
        ) : (
          <div onClick={() => signIn("github")} className="cursor-pointer">
            <MenuItem setActive={setActive} active={active} item="Sign In"></MenuItem>
          </div>
        )}
      </Menu>
    </div>
  )
}

export default Navbar
