/*import React, {useState} from "react";

export const ItemCount=({initial, stock, onAdd})=>{
      const [count, setCount] = useState(initial);

        const handleAdd=()=>{
        if(count < stock){
        setCount(count+1);
        }
    }
    const handleRemove=()=>{
        if(count > initial){
        setCount(count-1);
        }
    }
   
    return(
<div className="btn-group" role="group" aria-label="Basic outlined example">
  <button onClick={handleAdd} type="button" className="btn btn-outline-primary">+</button>
  <imput type="number" className="form-control">{count}</imput>
  <button onClick={handleRemove} type="button" className="btn btn-outline-primary">-</button>
<button onClick={onAdd(count)} type="button" className="btn btn-primary">Agregar al carrito</button>
</div>
    )
}*/