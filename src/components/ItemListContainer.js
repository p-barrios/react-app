import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import db from '../utils/FirebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {

    const [list, setList] = useState({})

    const { idCategory } = useParams()

    useEffect(() => {
        const firestoreFetch = async () => {
            const querySnapshot = await getDocs(collection(db, "productList"));
            return querySnapshot.docs.map( document => ({
                id:document.id,
                ...document.data()
            }))
        }

        if(idCategory === undefined) {
            firestoreFetch()
                .then(result => setList(result))
                .catch (error => {console.log(error);})
        } else {
            firestoreFetch()
                .then(result => {
                    const filterResult = result.filter(item => item.categoryId === idCategory)
                    setList(filterResult)
                })
                .catch (error => {console.log(error);})
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