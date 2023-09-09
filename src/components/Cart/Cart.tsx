import CartItem from "./CartItem";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import { useEffect, useState } from "react";
import { clearCart } from "../../store/CartSlice";
export default function Cart() {
    const data = useAppSelector(data => data.Cart)
    const dispatch = useAppDispatch();
    const [sum, setSum] = useState(0)
    let totalQuantity = 0;
    data.forEach(e => {
        console.log(e.quantity)
        totalQuantity += e.quantity * e.price;
    });
    useEffect(() => setSum(totalQuantity), [totalQuantity])
    return (
        <>
            <div className="mt-5 cart">
                <div className="container ">
                    <div className="w-50 m-auto">
                        <table className="mb-4 ">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((e, index) => {
                                    return <CartItem key={index} id={e.id} title={e.title} price={e.price} quantity={e.quantity} />
                                })}
                            </tbody>
                            <tfoot>
                                <tr className="fw-bold">
                                    <td colSpan={3}>Total Amount</td>
                                    <td>${sum}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <button className="btn btn-primary" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                    </div>
                </div>
            </div>
        </>

    )
}
