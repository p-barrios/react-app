import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import productList from "../utils/dataHardcode"
import customFetch from "../utils/customFetch"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [list, setList] = useState({})

    const { idCategory } = useParams()

    useEffect(() => {
        if ( idCategory === undefined ) {
            customFetch(productList, 2000)
                .then((data) => {
                    setList(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            customFetch(productList.filter(item => item.categoryId === idCategory), 1000)
                .then((data) => {
                    setList(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [idCategory])

    return (
        <>
            <div className="container">
                <ItemList list={list}/>
            </div>
        </>
    )
}

export default ItemListContainer