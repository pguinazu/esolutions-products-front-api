import { ShoppingCartContext } from "../../context"
import { useContext } from "react"
import { Close } from '@mui/icons-material'

const OrderCard = (product: any) => {
    const context = useContext(ShoppingCartContext)

    const handleDeleteProduct = (id: string) => {
        const filteredProducts = context.productsInCart.filter((product: any) => product.id !== id)
        context.setProductsInCart(filteredProducts)
    }

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={product?.product?.image} alt={product?.product?.title} />
                </figure>
            <p className='text-sm font-light w-32'>{product?.product?.title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className='font-bold text-3'>${product?.product?.price}</p>
                <Close
                    className='h4 w-4 text-black cursor-pointer'
                    onClick={() => handleDeleteProduct(product?.product?.id)}
                />
            </div>
        </div>
    )
}

export default OrderCard