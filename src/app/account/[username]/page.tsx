"use client";

import { useParams, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

export default function AccountPage() {
  const { username } = useParams();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLogoutOpen, setLogoutOpen] = useState(false);

  // Redirect to sign-in page if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
        <p className="text-lg text-gray-600 animate-pulse">Loading...</p>
      </div>
    );
  }

  const userName = session?.user?.name ?? "";
  const userImage = session?.user?.image ?? "";
  const userEmail = session?.user?.email ?? "";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white p-8 shadow-xl rounded-lg max-w-sm w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {userName} 👋</h1>
        <p className="text-gray-500 mt-1">Here is your account information</p>

        <div className="relative mt-6 w-28 h-28 mx-auto">
          <Image
            src={userImage}
            alt="Profile Picture"
            width={112}
            height={112}
            className="rounded-full border-4 border-gray-300 shadow-md"
          />
        </div>

        <p className="mt-4 text-xl font-semibold text-gray-900">{userName}</p>
        <p className="text-gray-500">{userEmail}</p>

        <button
          onClick={() => setLogoutOpen(true)}
          className="mt-6 w-full px-5 py-3 bg-red-600 hover:bg-red-700 transition duration-300 text-white font-medium rounded-lg shadow-md"
        >
          Logout
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      <Dialog open={isLogoutOpen} onClose={() => setLogoutOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <Dialog.Panel className="bg-white mt-20 p-6 rounded-lg shadow-lg w-80 text-center transform transition-all scale-95">
          <h2 className="text-xl font-bold text-gray-800">Confirm Logout</h2>
          <p className="text-gray-500 mt-2">Are you sure you want to logout?</p>
          <div className="mt-4 flex justify-center gap-4">
            <button
              onClick={() => setLogoutOpen(false)}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => signOut({ callbackUrl: "/auth/signin" })}
              className="px-4 py-2 bg-teal-900 hover:bg-pink-700 text-white rounded-lg"
            >
              Yes
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}


