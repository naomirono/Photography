import React from 'react'

const Button = (props) => {
  return (
   <button className='bg-orange-400 text-white py-2 px-4 rounded md:ml-8 hover:bg-orange-600 duration-500'>
       {props.children}
   </button>
  )
}

export default Button