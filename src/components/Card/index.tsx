import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { Check, Add, Delete } from '@mui/icons-material'
import { useDeleteProductMutation } from '../../services/productsService'

function Card(product: any) {

    const context: any = useContext(ShoppingCartContext)

    //TODO: show message when delete a product successfully
    const [deleteProduct] = useDeleteProductMutation()
    
    const showProduct = (productDetail: any) => {
        context.closeCheckoutSideMenu()
        context.openProducDetail()
        context.setProductToShow(productDetail)
    }
    
    const addProduct = (e: React.MouseEvent<Element, MouseEvent>) => {
        e.stopPropagation()
        context.addProduct()
        context.setProductsInCart([...context.productsInCart, product?.product])
        context.closeProducDetail()
        context.openCheckoutSideMenu()
    }

    const renderIcon = (id: string) => {
        const isInCart = context.productsInCart.filter((product: any) => product.id === id).length > 0
        if (isInCart) {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    <Check className="h-6 w-6 text-black"></Check>
                </div>
            )
        } else {
            return (
                <div onClick={(event) => addProduct(event)}
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    <Add className="h-6 w-6 text-black"></Add>
                </div>
            )
        }
        
    }

    return (
        <div
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct(product.product)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs px-2 py-0.5 m-2">{product?.product?.category}</span >
                <img className="w-full h-full object-cover rounded-lg" src={product?.product?.image} alt={product?.product?.title} />
                {renderIcon(product?.product?.id)}
                <div className="absolute bottom-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    <Delete onClick={() => deleteProduct(product?.product?.id)}></Delete>
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">
                    {product?.product?.title}
                </span>
                <span className="text-lg font-medium">
                    ${product?.product?.price}
                </span>
            </p>
        </div>
    )
}

export default Card