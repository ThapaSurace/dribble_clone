import React from 'react'
import { categories } from '../data'
import CategoryCard from './CategoryCard'

const Categorylists = () => {
  return (
    <div className='flex gap-6'>
        {
             categories.map(cat=>(
                <CategoryCard key={cat.id} cat={cat} />
             ))
        }
    </div>
  )
}

export default Categorylists