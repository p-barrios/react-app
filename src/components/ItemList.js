import Item from "./Item"


const ItemList = (props) => {
    let texto

    if (props.list.length === 0) {
        texto = "No hay datos aun"
    } else {
        texto = "Lista cargada"
    }

    return(
        <>
            <p>Item List</p>
            <p>{texto}</p>
            <div className="ItemList">
                {
                    props.list.map( el =>
                        <Item
                            key = {el.id}
                            title = {el.title}
                            description = {el.description}
                            price = {el.price}
                            pictureUrl = {el.pictureUrl}
                        />
                    )
                }
            </div>
        </>
    )
}

export default ItemList