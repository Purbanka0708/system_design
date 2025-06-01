import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { BackgroundBeams } from "@/components/ui/background-beams"
import Image from "next/image"

export default async function DashboardPage() {
  const session = await auth()

  // If no session exists, redirect to sign-in
  if (!session) {
    redirect("/api/auth/signin")
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="max-w-4xl mx-auto p-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Your Dashboard</h1>

        <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center gap-4 mb-6">
            {session.user?.image && (
              <img
                src={session.user.image || "/placeholder.svg"}
                alt={session.user?.name || "User"}
                className="w-16 h-16 rounded-full"
              />
            )}
            <div>
              <h2 className="text-2xl font-bold text-white">{session.user?.name}</h2>
              <p className="text-gray-400">{session.user?.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Your Courses</h3>
              <p className="text-gray-400">You haven&apos;t enrolled in any courses yet.</p>
              <a href="/courses" className="text-teal-500 hover:text-teal-400 mt-2 inline-block">
                Browse Courses
              </a>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Your Progress</h3>
              <p className="text-gray-400">Start learning to track your progress.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
