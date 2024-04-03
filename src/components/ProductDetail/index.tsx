import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import './styles.css'
import { Close } from '@mui/icons-material'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  const productDetail = context.productToShow


  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
          <Close className='h6 w-6 text-black cursor-pointer' onClick={() => context.closeProducDetail()} />
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={productDetail.image}
          alt={productDetail.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2.1 mb-2'>${productDetail.price}</span>
        <span className='font-medium text-md mb-2'>{productDetail.title}</span>
        <span className='font-light text-sm mb-2'>{productDetail.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail