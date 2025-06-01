"use client"

import { signOut } from "next-auth/react"
import { Button } from "./ui/moving-border"

export default function SignOutButton() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20"
    >
      Sign Out
    </Button>
  )
}
