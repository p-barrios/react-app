import Item from "./Item"


const ItemList = (props) => {
    return(
        <>
            <div className="ItemList">
                {
                    props.list.length > 0 ?
                    props.list.map( el =>
                        <Item
                            key = {el.id}
                            id = {el.id}
                            title = {el.title}
                            description = {el.description}
                            price = {el.price}
                            pictureUrl = {el.pictureUrl}
                        />
                    ): <p>Loading...</p>
                }
            </div>
        </>
    )
}

export default ItemList