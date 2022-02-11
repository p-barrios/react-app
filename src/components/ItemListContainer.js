import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    const onAdd = (val) => {
        console.log('La cantidad de articulos elegida es: '+val);
    }

    const productList = [
        {
        id: 30,
        name: "Agua Con Gas 1,5 lts",
        stock: 86,
        cost: 45,
        },
        {
        id: 29,
        name: "Agua Sin Gas 1,5 lts",
        stock: 100,
        cost: 140,
        },
        {
        id: 76,
        name: "Alambrado Chardonnay 750 ml",
        stock: 92,
        cost: 575,
        }
    ]

    const customFetch = () => {
        return new Promise((resolve, reject) => {
                if(productList)
                    resolve(productList)
                else
                    reject('Error al cargar el productList')
        })
    }

    const getData = () => {
        customFetch()
            .then((data) => {
                return data
            })
            .catch((err) => {
                console.log(err)
                return err
            })
    }

    const [list, setList] = useState()

    useEffect(() => {
        setTimeout(() => {
            let data = props.list
            console.log(data)
            setList(data)
        }, 2000)
    }, [])

    return (
        <>
            <div className="container">
                <p>ItemListContainer</p>
                <hr/>
                <ItemCount stock="5" initial="1" onAdd={onAdd}/>
                <hr/>
                <ItemList list={getData()}/>
            </div>
        </>
    )
}

export default ItemListContainer