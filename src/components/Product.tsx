import imgItem from "../img/mainImg.jpg"
import { addProduct } from "../store/CartSlice";
import { useAppDispatch } from "../store/Store"
type ProductProps = {
    title: string,
    price: number,
    desc: string,
    img: string,
    hotSale: boolean
}
function Product({ title, price, desc, hotSale }: ProductProps) {
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="col-md-4 col-lg-3 mb-4">
                <div className="card" >
                    <img src={imgItem} alt="" />
                    {hotSale && <div>
                        <div className="hot-sale">
                            <button className="btn btn-danger">Hot Sales</button>
                        </div>
                    </div>}
                    <div className="card-body">
                        <h5 className={hotSale ? "card-title mt-4" : "card-title"}>{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text">{price}</p>
                        <button className="btn btn-primary" onClick={()=> {
                            dispatch(addProduct({id : Math.floor(Math.random() * 1000), title: title , price: price , quantity: 1}))
                        }}>Add To Card</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
