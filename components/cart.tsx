import { View, Text, Button, StyleSheet } from 'react-native'
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
      console.log('nothing')
    }
  }, [props.shoppingCart])

  if (!shoppingCartList || !props.shoppingCart) {
    return <Text>Empty!</Text>
  } else {
    const shoppingCartList = props.shoppingCart.map((item, idx) => (
      <div key={idx}>{item.title}</div>
    ))
    return <>{shoppingCartList}</>
  }
}
