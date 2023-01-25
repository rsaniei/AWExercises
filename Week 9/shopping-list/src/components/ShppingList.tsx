import React from 'react'

type ShoppingListProps = {
  items:
  {
  id: number,
  name: string,
  count?: number
  }[]
}

//1
//not working when we don't use states
let quantity = 0;
// setInterval(() =>{
//   quantity++;
//   console.log(quantity);
// }, 1000) //each second update the quantity

export const ShoppingList = ({items}: ShoppingListProps) => {

  return (
    <div className="list">
      <ul>
        {
        items.map((item) =>
        <li className="shoppingItem">
            <span style = {{paddingRight: "5px", fontSize: "20px"}}>{item.name} : {quantity}</span>
        </li>
            )
        }
      </ul>
    </div>
  )
}
