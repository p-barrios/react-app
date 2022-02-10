import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return (
        <>
            <div className="container">
                <ItemCount stock="5" initial="1" onAdd={ (val) => {
                    alert('La cantidad de articulos elegida es: '+val)
                }}/>
            </div>
        </>
    )
}

export default ItemListContainer