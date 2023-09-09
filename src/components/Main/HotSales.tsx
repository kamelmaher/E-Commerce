import { useAppSelector } from "../../store/Store"
import Product from "./Products/Product"

function HotSales() {
    const Data = useAppSelector(state => state.Product)
    return (
        <div className="mt-5 pb-5">
            <div className="container">
                <h1 className="title text-danger">
                    Hot Sales
                </h1>
                <div className="row">
                    {Data.map((e, index) => {
                        if (e.hotSale)
                            return <Product key={index} title={e.title} price={e.price} desc={e.desc} img={e.img} hotSale={e.hotSale} />
                        else return null
                    })}
                </div>
            </div>
        </div>
    )
}
export default HotSales
