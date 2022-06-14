import { View, Button, StyleSheet, GestureResponderEvent } from 'react-native'
import inventory from '../data/inventory_list.json'
import { useEffect, useState } from 'react'

export interface InventoryItem {
  title: string
  type: string
  description: string
  filename: string
  height: number
  width: number
  price: number
  rating: number
}

interface Props {
  setShoppingCart: (list?: InventoryItem[]) => void
}

export default function Items(props: Props) {
  const [cartList, setCartList] = useState<InventoryItem[]>()

  useEffect(() => {
    props.setShoppingCart(cartList)
  }, [cartList])

  function addItem(e: GestureResponderEvent, item: InventoryItem): void {
    if (!cartList) {
      setCartList([item])
    } else {
      const addedItem = item
      const prevList = [...cartList]
      prevList.push(addedItem)
      setCartList(prevList)
    }
  }

  const listArray = inventory.map((item) => (
    <Button
      title={item.title}
      color='green'
      onPress={(e) => addItem(e, item)}
      key={item.title}
    ></Button>
  ))

  return <View style={styles.list}>{listArray}</View>
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})
