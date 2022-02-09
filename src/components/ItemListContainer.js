import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return (
        <>
            {/* <div className="container">
                <p>{props.item}</p>
            </div> */}

            <div className="container">
                <ItemCount stock="5" initial="1" />
            </div>
        </>
    )
}

export default ItemListContainer