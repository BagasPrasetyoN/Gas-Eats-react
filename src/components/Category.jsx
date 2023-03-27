import React from 'react'
import { categories } from '../data/data.js';

export const Category = () => {
    console.log(categories)
  return (
    <div className='max-w-[1640] px-4 py-12'>
        <h1 className='text-yellow-400 font-bold text-4xl text-center'>Top Rated Items</h1>
        {/* category */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {categories.map((item,index)=>(
                <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between item-center '>
                    <h2 className='font-bold sm-text-xl'>{item.name}</h2>
                    <img src={item.image} alt={item.image} 
                    className="w-20" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category;