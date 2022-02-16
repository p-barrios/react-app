import Item from "./Item"


const ItemList = (props) => {
    if (props.load === true) {
        return(
            <>
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
    } else {
        return (
            <>
                <p>Loading...</p>
            </>
        )
    }
}

export default ItemList