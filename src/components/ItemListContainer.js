import ItemCount from "./ItemCount"

const onAdd = (val) => {
    console.log('La cantidad de articulos elegida es: '+val);
}

const ItemListContainer = (props) => {
    return (
        <>
            <div className="container">
                <ItemCount stock="5" initial="1" onAdd={onAdd}/>
            </div>
        </>
    )
}

export default ItemListContainer