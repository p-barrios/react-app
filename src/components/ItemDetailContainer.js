import { useEffect, useState } from "react"
import productList from "../utils/dataHardcode"
import customFetch from "../utils/customFetch"
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)

    const {idItem} = useParams()

    useEffect(() => {
        customFetch(productList.filter(item => item.id === parseInt(idItem)), 2000)
            .then((data) => {
                setItem(data[0])
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [idItem])

    return (
        <>
            <div className="container">
                    <ItemDetail item={item} load={loading}/>
            </div>
        </>
    )
}

export default ItemDetailContainer