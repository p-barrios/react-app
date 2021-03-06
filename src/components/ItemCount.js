import { useState } from "react"

const ItemCount = (props) => {
    const stock = parseInt(props.stock)
    const initial = parseInt(props.initial)

    const [total, setTotal] = useState(initial)

    const Increment = () => {
        if(total<stock)
            setTotal(total+1)
    }
    const Decrement = () => {
        if(total>1)
            setTotal(total-1)
    }

    return (
        <>
            <div className="ItemCount">
                <div className="contador">
                    <button onClick={Decrement}>-</button>
                    <h6>{total}</h6>
                    <button onClick={Increment}>+</button>
                </div>

                <button onClick={()=>props.onAdd(total)}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount