import React, {useEffect, useState} from 'react'
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'



function ItemListContainer() {

  const [productos, setProductos]=useState([])
  const {categoriaId} = useParams() 

  useEffect(()=>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'items');     
      
      if(categoriaId){
        const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
        getDocs(queryFilter)
        .then(res => setProductos(res.docs.map(item => ({id: item.id, ...item.data()}))))
      }else{
        getDocs(queryCollection)
        .then(res => setProductos(res.docs.map(item => ({id: item.id, ...item.data()}))))
      }
  } , [categoriaId])
  
  return (
        <div className='m-2'>
        <ItemList productos={productos}/>
        </div>
  );
}

export default ItemListContainer;
