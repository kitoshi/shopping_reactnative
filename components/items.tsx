import { View, Text, Button, StyleSheet } from 'react-native'
import inventory from '../data/inventory_list.json'

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
  item: InventoryItem
}

export default function Items() {
  
  return <Text>This is an item from the grocery store.</Text>
}
