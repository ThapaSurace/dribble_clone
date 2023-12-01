import React from 'react'
import { developerCard } from '../data'
import DeveloperCard from './DeveloperCard'

const Developerlists = () => {
  return (
    <div className='flex my-6'>
        {
            developerCard.map(item => (
               <DeveloperCard key={item.id} item={item} />
            ))
        }
    </div>
  )
}

export default Developerlists