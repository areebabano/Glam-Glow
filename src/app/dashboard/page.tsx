import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/auth/signin");
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>Welcome, {session?.user?.email}</p>
    </div>
  );
};

export default Dashboard;

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// const Dashboard = () => {
//   const { data: session } = useSession();
//   const router = useRouter();

//   if (!session) {
//     router.push("/auth/signin");
//   }

//   return (
//     <div>
//       <h1>Welcome to your Dashboard</h1>
//       <p>Welcome, {session?.user?.email}</p>
//     </div>
//   );
// };

// export default Dashboard;
