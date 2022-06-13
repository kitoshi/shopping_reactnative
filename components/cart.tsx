import { Text } from 'react-native'
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
    const shoppingCartList = props.shoppingCart.map((item, idx) => (
      <Text key={idx}>{item.title}</Text>
    ))
    return <>{shoppingCartList}</>
  }
}
