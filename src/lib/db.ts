// TODO: Implementar el type Item
import { Item } from "./types"

let items: Item[] = [
  { id: 1, name: "Item 1", description: "Description 1" },
  { id: 2, name: "Item 2", description: "Description 2" },
]

const DELAY = 0

export async function getItems(): Promise<Item[]> {
  await sleep(DELAY)
  return items
}

export async function getItemById(id: number): Promise<Item | undefined> {
  await sleep(DELAY)
  return items.find(item => item.id === id)
}

export async function createItem(newItem: Omit<Item, "id">): Promise<void> {
  await sleep(DELAY)
  const itemWithId: Item = { ...newItem, id: items.length + 1 }
  items.push(itemWithId)
}

export async function updateItem(updatedItem: Item): Promise<void> {
  await sleep(DELAY)
  const index = items.findIndex(item => item.id === updatedItem.id)
  if (index !== -1) {
    items[index] = updatedItem
  }
}

export async function deleteItem(id: number): Promise<void> {
  await sleep(DELAY)
  items = items.filter(item => item.id !== id)
}

export function resetItems() {
  items = [
    { id: 1, name: "Item 1", description: "Description 1" },
    { id: 2, name: "Item 2", description: "Description 2" },
  ]
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
