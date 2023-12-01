import React from 'react'

const CategoryCard = ({cat}) => {
  return (
   <div className='mx-2 overflow-hidden cursor-pointer'>
    <img src={cat.img} alt="/" className='w-52 h-52 rounded-custom object-cover object-center shadow-sm mb-4' />
    <div className='text-slate-900 text-sm font-bold text-center'>{cat.name}</div>
   </div>
  )
}

export default CategoryCard