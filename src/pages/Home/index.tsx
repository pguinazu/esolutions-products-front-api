import { useContext } from 'react'
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import ProductDetail from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../context';
import { useGetProductsQuery } from '../../services/productsService';

function Home() {
  // const [products, setProducts] = useState<Array<String>>();
  const context = useContext(ShoppingCartContext)

  const { data: products } = useGetProductsQuery()

  return (
    <Layout>
      <div className='grid gap-20 grid-cols-4 w-full max-w-screen-lg'>
        {
          products?.map((product: any) => (
            <Card key={product.id} product={product} />
          ))
        }
      </div>
      {context?.isProductDetailOpen &&
        <ProductDetail />
      }
    </Layout>
  )
}

export default Home