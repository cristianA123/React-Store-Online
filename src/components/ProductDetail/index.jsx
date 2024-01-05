import './style.css'

import { XMarkIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { ShoppingCardContext } from '../../Context'

export const ProductDetail = () => {

  const context = useContext(ShoppingCardContext)

  console.log(context.productToShow)

  return (
    <aside 
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} 'w-[230px]  h-1/2vh  lg:w-[360px] flex-col fixed right-0 border border-black rounded-lg bg-white'`}
    >
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div><XMarkIcon onClick={context.closeProductDetail} className='h-6 w-6 text-blue-500 cursor-pointer' /></div>
      </div>
      <figure className='px-6'>
        <img className='w-full h-full object-cover rounded-lg' src={context.productToShow.images} alt='arbol' />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}
