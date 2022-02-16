import { useEffect, useState } from "react"
import productList from "../utils/dataHardcode"
import customFetch from "../utils/customFetch"
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        customFetch(productList[3], 2000)
        .then((data) => {
            setItem(data)
            setLoading(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <div className="container">
                    <ItemDetail item={item} load={loading}/>
            </div>
        </>
    )
}

export default ItemDetailContainer