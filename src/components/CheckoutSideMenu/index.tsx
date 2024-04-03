import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import './styles.css'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  const products = context.productsInCart

  // TODO: save checkout
  // const handleCheckout = () => {
  //   const orderToAdd = {
      
  //   }
  // }

  return (
    <aside className={context?.isCheckoutSideMenuOpen ? 'checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white' : 'hidden'}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button className='cursor-pointer' onClick={() => context.closeCheckoutSideMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className='px-6'>
        {
          products?.map((product: any) => (
            <OrderCard key={product.id} product={product} />
          ))
        }
      </div>
      <div className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-bold text-3 mr-5'>${totalPrice(products)}</span>
        </p>
        {/* TODO: Save checkout <button onClick={() => handleCheckout()}>Checkout</button> */}
      </div>

    </aside>
  )
}

export default CheckoutSideMenu