import { Link } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from './CartContext'

const CartWidget = (props) => {

    const cartContext = useContext(CartContext)

    return (
        <>
        <span className="CartWidget">
            <Link to={'/cart'}><i className="material-icons">local_grocery_store</i></Link>
            {
                cartContext.itemsQty() > 0 && <p className="cant">{cartContext.itemsQty()}</p>
            }
        </span>
        </>
    )
}
export default CartWidget;
