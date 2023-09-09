import { CartItemState, changeQuantity } from "../store/CartSlice"
import { useAppDispatch } from "../store/Store"
export default function CartItem({ title, price ,quantity , id }:CartItemState) {
    const dispatch = useAppDispatch();
    //dispatch(changeQuantity({ id: id, quantity: 1 }))
    return (
        <tr>
            <td>{title}</td>
            <td>{price}</td>
            <td><input value={quantity} type="number" className="form-control" onChange={(e)=> {
                dispatch(changeQuantity({ id: id, quantity: parseInt(e.target.value) }))
            }}/></td>
            <td>{quantity * price < 0 ? 0 : quantity * price}</td>
        </tr>
    )
}
