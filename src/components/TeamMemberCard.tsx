import React from 'react'
import { TeamMemberProps } from '../app/types/types'
import Image from 'next/image'
import image from 'next/image'

const TeamMemberCard: React.FC<TeamMemberProps> = ({name, role,img,bio}) => {
  return (
    <div className='max-w-xs mx-auto text-center mb-8 p-4 border border-gray-300 shadow-lg rounded-lg h-full bg-white font-serif'>
        <div className='flex justify-center mb-4'>
        <Image
        src={img}
        alt={`${name}`}
        height={70}
        width={70}
        className='rounded-full object-cover'
        />
        </div>
        <h3 className='font-bold mt-2'>{name}</h3>
        <p className='text-sm text-gray-500 mb-2'>{role}</p>
        <p className='flex-grow text-gray-700 font-semibold'>{bio}</p>
    </div>
  )
}

export default TeamMemberCard