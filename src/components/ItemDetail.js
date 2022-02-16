
import ItemCount from "./ItemCount"

const ItemDetail = (props) => {

    const onAdd = (val) => {
        console.log('La cantidad de articulos elegida es: '+val);
    }

    if (props.load === true) {
        return (
            <>
                <div className="ItemDetail">
                    <div className="left">
                        <img src={props.item.pictureUrl} alt=""/>
                    </div>
                    <div className="right">
                        <p className="code">Art. Code: {props.item.id}</p>
                        <h4>{props.item.title}</h4>
                        <p className="description">{props.item.description}</p>
                        <p className="price">{props.item.price}</p>
                        <p className="stock">Cantidad en stock: {props.item.units}</p>
    
                        <ItemCount stock={props.item.units} initial="1" onAdd={onAdd} />
    
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <p>Loading...</p>
            </>
        )
    }
}

export default ItemDetail