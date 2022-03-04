
import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

const ItemDetail = (props) => {

    const [ itemCount, setItemCount ] = useState(0)

    const cartList = useContext(CartContext)

    const onAdd = (val) => {
        setItemCount(val)
        cartList.addItem(props.item, val)
    }
    return (
        <>
        {
            Object.entries(props.item).length !== 0
            ?   <div className="ItemDetail">
                    <div className="left">
                        <img src={props.item.pictureUrl} alt=""/>
                    </div>
                    <div className="right">
                        <p className="code">Art. Code: {props.item.id}</p>
                        <h4>{props.item.title}</h4>
                        <p className="description">{props.item.description}</p>
                        <p className="price">{props.item.price}</p>
                        <p className="stock">Cantidad en stock: {props.item.units}</p>
                        {
                            itemCount === 0 ?
                            <ItemCount stock={props.item.units} initial="1" onAdd={ onAdd } />
                            : <div className="btn-fin-compra"><Link to={'/cart'}>Finalizar Compra</Link></div>
                        }
                    </div>
                </div>
            : <p>Loading...</p>
        }
        </>
    )

}

export default ItemDetail