"use client"
import React, {useState} from 'react'
import SearchBar from '../../components/SearchBar'
import SearchResults from '../../components/SearchResults'

const SearchPage: React.FC = () => {
  return (
    <div className='font-serif'>
      <SearchResults />
    </div>
  )
}

export default SearchPage

