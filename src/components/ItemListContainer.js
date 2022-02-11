import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";

const ItemListContainer = (props) => {

    const [list, setList] = useState([])
    const onAdd = (val) => {
        console.log('La cantidad de articulos elegida es: '+val);
    }

    const productList = [
        {
            id: 30,
            title: 'Agua con gas',
            description: "Agua con Gas 1,5 lts",
            price: 86,
            pictureUrl: 'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-bottle-of-mineral-water-vector-illustration-isolated-on-white-background-mineral-png-image_2025936.jpg',
        },
        {
            id: 31,
            title: 'Agua sin gas',
            description: "Agua sin Gas 1,5 lts",
            price: 76,
            pictureUrl: 'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-bottle-of-mineral-water-vector-illustration-isolated-on-white-background-mineral-png-image_2025936.jpg',
        },
        {
            id: 32,
            title: 'Agua saborizada sin gas',
            description: "Agua saborizada sin Gas 1,5 lts",
            price: 106,
            pictureUrl: 'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-bottle-of-mineral-water-vector-illustration-isolated-on-white-background-mineral-png-image_2025936.jpg',
        },
        {
            id: 33,
            title: 'Agua saborizada con gas',
            description: "Agua saborizada Con Gas 1,5 lts",
            price: 126,
            pictureUrl: 'https://png.pngtree.com/png-vector/20191129/ourlarge/pngtree-bottle-of-mineral-water-vector-illustration-isolated-on-white-background-mineral-png-image_2025936.jpg',
        },
    ]

    const customFetch = () => {
        return new Promise((resolve, reject) => {
                if(productList){
                    resolve(productList)
                }
                else
                    reject('Error al cargar el productList')
        })
    }

    useEffect(() => {
        setTimeout(() => {
            customFetch()
            .then((data) => {
                setList(data)
            })
            .catch((err) => {
                console.log(err)
            })
        }, 2000)
    }, [])

    return (
        <>
            <div className="container">
                <p>ItemListContainer</p>
                <hr/>
                <ItemList list={list}/>











                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <hr/>
                <ItemCount stock="5" initial="1" onAdd={onAdd}/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </>
    )
}

export default ItemListContainer