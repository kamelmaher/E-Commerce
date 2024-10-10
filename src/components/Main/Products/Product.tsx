import { addProduct } from "../../../store/CartSlice";
import { useAppDispatch } from "../../../store/Store"
type ProductProps = {
    title: string,
    price: number,
    desc: string,
    img: string,
}
function Product({ title, price, desc, img }: ProductProps) {
    const dispatch = useAppDispatch();
    return (
        <>
            <div className="col-md-6 col-lg-4 mb-4 product ">
                <div className="card d-flex flex-column justify-content-between p-3" >
                    <div className="justify-content-center d-flex align-items-center" style={{ height: "250px" }}>
                        <img src={img} alt="" className="img-fluid" width={150} />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title ">{title}</h5>
                        <p className="card-text desc">{desc}</p>
                    </div>
                    <div className="text-center">
                        <p className="card-text fw-semibold ">${price}</p>
                        <button className="btn btn-primary" onClick={() => {
                            dispatch(addProduct({ id: Math.floor(Math.random() * 1000), title: title, price: price, quantity: 1 }))
                        }}>Add To Card</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
