import { useEffect, useState } from "react"
import Item from "./Item"


const ItemList = (props) => {
    
    let list
    
    return(
        <>
            <p>Item List</p>
            <p>{list}</p>
            <Item />
        </>
    )
}

export default ItemList