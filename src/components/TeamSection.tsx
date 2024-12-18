import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    name: "Emily Chen",
    role: "COO",
    image: "/team 2.jpg",
    bio: "Emily brings 8 years of operational expertise, driving growth and efficiency.",
  },
  {
    name: "Michael Patel",
    role: "Creative Director",
    image: "/team 5.jpg",
    bio: "Michael crafts innovative designs, shaping the visual identity.",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Manager",
    image: "/team 3.jpg",
    bio: "Sarah develops and executes marketing strategies, amplifying brand presence.",
  },
  {
    name: "David Kim",
    role: "Technical Lead",
    image: "/team 6.jpg",
    bio: "David oversees technical operations, ensuring seamless functionality.",
  },
  {
    name: "Lisa Nguyen",
    role: "Customer Experience Manager",
    image: "/team 4.jpg",
    bio: "Lisa focuses on delivering exceptional customer experiences.",
  },
  {
    name: "Rajesh Sharma",
    role: "Business Development Manager",
    image: "/team 7.jpg",
    bio: "Rajesh fosters strategic partnerships, expanding growth opportunities.",
  },
];

const TeamSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around mt-6 font-serif">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2">
          <TeamMemberCard
            name={member.name}
            role={member.role}
            img={member.image}
            bio={member.bio}
          />
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
