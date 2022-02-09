import { useState } from "react"

const ItemCount = (props) => {
    const stock = parseInt(props.stock)
    const initial = parseInt(props.initial)

    const [total, setTotal] = useState(initial)

    const increment = () => {
        if(total<stock)
            setTotal(total+1)
    }
    const decrement = () => {
        if(total>1)
        setTotal(total-1)
    }

    return (
        <>
            <h4>ItemCount</h4>
            <div className="ItemCount">
                <div className="contador">
                    <button onClick={decrement}>-</button>
                    <h6>{total}</h6>
                    <button onClick={increment}>+</button>
                </div>
                <button>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount