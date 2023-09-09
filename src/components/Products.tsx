import { useAppSelector } from "../store/Store"
import Product from "./Product"

function Products() {
    const Data = useAppSelector(state => state.Product)
    return (
        <div className="mt-5 pt-5 mb-5 pb-5">
            <div className="container">
                <h2 className="title text-center mb-5">Our Products</h2>
                <div className="row">
                    {Data.map((e , index) => {
                        if(!e.hotSale)
                            return <Product key={index} title={e.title} price={e.price} desc={e.desc} img={e.img} hotSale={e.hotSale} />
                        else return null
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products
