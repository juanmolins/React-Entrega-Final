import React, {useEffect, useState} from 'react'
import ItemList from "./ItemList"
import { getProducts } from "../mock/data"
import { useParams } from 'react-router-dom'



function ItemListContainer() {

  const [productos, setProductos]=useState([])
  const {categoriaId} = useParams() 

  useEffect(()=>{
    getProducts()
    .then((res) => {
      if(categoriaId){
          setProductos(res.filter((item) => item.categoria === categoriaId))
      }else{
          setProductos(res)
      }
    }) 
  },[categoriaId])
  
  return (
        <div className='m-2'>
        <ItemList productos={productos}/>
        </div>
  );
}

export default ItemListContainer;
