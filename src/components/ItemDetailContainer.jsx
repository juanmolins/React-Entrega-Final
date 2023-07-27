import React, {useEffect, useState} from 'react'
import { getItem } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [ producto, setProducto] = useState ({})
    const { id } = useParams()


    useEffect (()=>{
        getItem(id)
        .then((res) => setProducto(res))
    },[])

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer