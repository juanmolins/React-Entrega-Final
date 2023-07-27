const list = [
    {id:'01', categoria:'pizzas', nombre:'Mozzarella', stock:10, precio:2100, descripcion:'Mozzarella, oregano y aceitunas', img:'../../images/especial.PNG'},
    {id:'02', categoria:'pizzas', nombre:'Cuatro Quesos', stock:8, precio:2400, descripcion:'Mozzarella, sardo, cheddar, azul, oregano y aceitunas', img:'../../images/especial.PNG'},
    {id:'03', categoria:'pizzas', nombre:'Napolitana', stock:6, precio:2300, descripcion:'Mozzarella, tomates, ajo, oregano y aceitunas', img:'../../images/especial.PNG'},
    {id:'04', categoria:'pizzas', nombre:'Verdeo', stock:10, precio:2200, descripcion:'Mozzarella, cebolla verdeo, oregano y aceitunas', img:'../../images/especial.PNG'},
    {id:'05', categoria:'pizzas', nombre:'Calabresa', stock:8, precio:2400, descripcion:'Mozzarella, longaniza calabresa, oregano y aceitunas', img:'../../images/especial.PNG'},
    {id:'06', categoria:'pizzas', nombre:'Fugazzeta', stock:6, precio:2300, descripcion:'Mozzarella, cebollas, oregano y aceitunas', img:'../../images/especial.PNG'},
    {id:'07', categoria:'pizzas', nombre:'Pizzatto', stock:6, precio:2500, descripcion:'Mozzarella, panceta ahumada, verdeo, oregano y aceitunas', img:'../../images/especial.PNG'},
    {id:'08', categoria:'cervezas', nombre:'Imperial APA', stock:4, precio:600, descripcion:'Cerveza de color cobrizo, con aroma a frutas cítricas', img:'../../images/IPA.jpg'},
    {id:'09', categoria:'cervezas', nombre:'Imperial IPA', stock:3, precio:600, descripcion:'Cerveza de color dorado intenso, refrescante y lupulada', img:'../../images/APA.jpg'},
    {id:'10', categoria:'cervezas', nombre:'Imperial Golden', stock:9, precio:600, descripcion:'Cerveza dorada suave y de cuerpo ligero', img:'../../images/golden.jpg'}
  ]

export const getProducts = () => {
    return new Promise((resolve)=>{
      setTimeout(()=> {
          resolve(list)
      },1000)
    })
  } 

  export const getItem = (id) => {
    return new Promise((resolve)=>{
      setTimeout(()=> {
          resolve(list.find((item) => item.id == id))
      },1000)
    })
  } 