"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { BiUser } from "react-icons/bi";

export default function UserMenu() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleUserIconClick = () => {
    if (session?.user?.name) {
      const username = encodeURIComponent(session.user.name); // Encode username for URL
      router.push(`/account/${username}`); // Redirect to user account page
    } else {
      signIn(); // If not logged in, open sign-in page
    }
  };

  return (
    <button onClick={handleUserIconClick} className="flex items-center focus:outline-none">
      {session?.user?.image ? (
        <Image
          src={session.user.image}
          alt="User"
          width={110}
          height={110}
          className="rounded-full border border-gray-300 shadow-sm cursor-pointer"
        />
      ) : (
        <BiUser className="w-10 h-10 cursor-pointer" />
      )}
    </button>
  );
}
