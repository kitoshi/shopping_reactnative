import { Text } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { InventoryItem } from './items'
interface Props {
  shoppingCart?: Array<InventoryItem>
}
export default function Cart(props: Props) {
  const [shoppingCartList, setShoppingCartList] = useState<InventoryItem[]>()
  useEffect(() => {
    setShoppingCartList(props.shoppingCart)

    return () => {
      null
    }
  }, [props.shoppingCart])

  if (!shoppingCartList || !props.shoppingCart) {
    return <Text>Empty!</Text>
  } else {
    const shoppingCartList = React.Children.toArray(props.shoppingCart.map((item) => (
      <Text>{item.title}</Text>
    )))
    return <>{shoppingCartList}</>
  }
}
