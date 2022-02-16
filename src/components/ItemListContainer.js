import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import productList from "../utils/dataHardcode"
import customFetch from "../utils/customFetch"

const ItemListContainer = () => {

    const [list, setList] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        customFetch(productList, 2000)
        .then((data) => {
            setList(data)
            setLoading(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <div className="container">
                <ItemList list={list} load={loading}/>
            </div>
        </>
    )
}

export default ItemListContainer