import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productos}) => {
  return (
    <div className="contenedorproductos">
  
{productos.map(item=> <Item {...item} key={item.id}/>)}
    </div>
  )
}

export default ItemList