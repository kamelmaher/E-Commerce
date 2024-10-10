import { Product as ProductType } from "../../../App"
// import { useAppSelector } from "../../../store/Store"
import Product from "./Product"
type ProductsProps = {
    products: ProductType[]
}
function Products({products}:ProductsProps) {
    // const Data = useAppSelector(state => state.Product)
    return (
        <div className="mt-5 pt-5 mb-5 pb-5">
            <div className="container">
                <h2 className="title text-center mb-5">Our Products</h2>
                <div className="row ">
                    {products.slice(0 ,4).map((e, index) => {
                        return <Product key={index} title={e.title} price={e.price} desc={e.description} img={e.image} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products
