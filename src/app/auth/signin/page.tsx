"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", { email, password, callbackUrl: "/" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-gray-800 text-center">Sign In</h1>
        <p className="text-gray-500 text-center mb-6">Access your account</p>

        {/* Credentials Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-700 transition bg-gray-50"
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-700 transition bg-gray-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-900 hover:bg-pink-700 text-white font-medium py-3 rounded-lg transition shadow-md"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Logins */}
        <button
          onClick={() => signIn("github")}
          className="w-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg transition shadow-md mb-3"
        >
          <FaGithub className="mr-2 text-xl" /> Sign in with GitHub
        </button>

        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center bg-white hover:bg-gray-100 border py-3 rounded-lg transition shadow-md"
        >
          <FcGoogle className="mr-2 text-xl" /> Sign in with Google
        </button>
      </div>
    </div>
  );
}


// 'use client';

// import { signIn } from 'next-auth/react';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const SignInPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const result = await signIn('credentials', {
//       redirect: false,
//       email,
//       password,
//     });

//     if (result?.error) {
//       setError('Invalid email or password');
//     } else if (result?.ok) {
//       router.push('/dashboard');  // Redirect to the dashboard or home page after successful login
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto my-8 p-6 border rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Sign In</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="mt-1 block w-full p-2 border rounded-md"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="mt-1 block w-full p-2 border rounded-md"
//           />
//         </div>
//         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//         <div>
//           <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">
//             Sign In
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignInPage;


// // // app/auth/signin/page.tsx
// // 'use client';

// // import { signIn } from 'next-auth/react';
// // import { useState } from 'react';
// // import { useRouter } from 'next/navigation';

// // const SignInPage = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const router = useRouter();

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     const result = await signIn('credentials', {
// //       redirect: false,
// //       email,
// //       password,
// //     });

// //     if (result?.error) {
// //       setError('Invalid email or password');
// //     } else if (result?.ok) {
// //       router.push('/dashboard');  // Redirect to the dashboard or home page after successful login
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto my-8 p-6 border rounded-lg shadow-md">
// //       <h2 className="text-2xl font-bold mb-6">Sign In</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// //             Email
// //           </label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="mt-1 block w-full p-2 border rounded-md"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="mt-1 block w-full p-2 border rounded-md"
// //           />
// //         </div>
// //         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
// //         <div>
// //           <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">
// //             Sign In
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default SignInPage;
