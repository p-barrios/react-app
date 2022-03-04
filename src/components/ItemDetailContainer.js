import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/FirebaseConfig'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const {idItem} = useParams()

    useEffect(() => {
        const docRef = doc(db, "productList", idItem);
        const firestoreFetch = async () => {
            const docSnap = await getDoc(docRef);
            return {
                id: docSnap.id,
                ...docSnap.data()
            }
        }
        firestoreFetch()
            .then(result => setItem(result))
            .catch(error => console.log(error))
    }, [idItem])

    return (
        <>
            <div className="container">
                    <ItemDetail item={item}/>
            </div>
        </>
    )
}

export default ItemDetailContainer