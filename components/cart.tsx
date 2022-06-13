import { View, Text, Button, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
export default function Cart(props: [string]) {
  const [shoppingCartList, setShoppingCartList] = useState<''[]>()
  useEffect(() => {
    setShoppingCartList(props.shoppingCart)

    return () => {
      console.log('nothing')
    }
  }, [props.shoppingCart])

  if (!shoppingCartList) {
    return <Text>Empty!</Text>
  } else {
    const shoppingCartList = props.shoppingCart.map((item) => <div>{item}</div>)
    return shoppingCartList
  }
}
