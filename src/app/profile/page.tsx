import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { BackgroundBeams } from "@/components/ui/background-beams"
import Image from "next/image"

export default async function ProfilePage() {
  const session = await auth()

  // If no session exists, redirect to sign-in
  if (!session) {
    redirect("/api/auth/signin")
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="max-w-4xl mx-auto p-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Your Profile</h1>

        <div className="bg-black/50 p-8 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {session.user?.image && (
              <img
                src={session.user.image || "/placeholder.svg"}
                alt={session.user?.name || "User"}
                className="w-32 h-32 rounded-full"
              />
            )}
            <div>
              <h2 className="text-3xl font-bold text-white">{session.user?.name}</h2>
              <p className="text-gray-400 text-lg">{session.user?.email}</p>
              <p className="text-teal-500 mt-2">GitHub User</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 mt-6">
            <h3 className="text-xl font-semibold text-white mb-4">Account Settings</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Email Notifications</span>
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white">Manage</button>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Connected Accounts</span>
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white">Manage</button>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Privacy Settings</span>
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white">Manage</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}