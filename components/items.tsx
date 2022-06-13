import { View, Text, Button, StyleSheet } from 'react-native'
import inventory from '../data/inventory_list.json'
import { useEffect, useState } from 'react'

interface InventoryItem {
  title: string
  type: string
  description: string
  filename: string
  height: number
  width: number
  price: number
  rating: number
}

interface InventoryList {
  item?: InventoryItem
}

export default function Items(props: any) {
  const [inventoryList, setInventoryList] = useState<InventoryList>()
  const [cartList, setCartList] = useState<string[]>()
  useEffect(() => {
    setInventoryList(inventory)

    return () => {
      null
    }
  }, [])

  useEffect(() => {
    props.setShoppingCart(cartList)
  }, [cartList])

  function addItem(e: any) {
    if (!cartList) {
      setCartList([e.target.textContent])
    } else {
      const addedItem = e.target.textContent
      const prevList = [...cartList]
      prevList.push(addedItem)
      setCartList(prevList)
    }
  }

  const listArray = inventory.map((item) => (
    <Button title={item.title} color='green' onPress={addItem}></Button>
  ))

  return <>{listArray}</>
}
