import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getFirestore, doc , getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [ producto, setProducto] = useState ({})
    const { id } = useParams()

    useEffect (()=>{
       const querydb = getFirestore();
       const queryDoc = doc(querydb, 'items', id);
       getDoc(queryDoc)
        .then(res => setProducto({id: res.id, ...res.data()}))
    },[id])

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer