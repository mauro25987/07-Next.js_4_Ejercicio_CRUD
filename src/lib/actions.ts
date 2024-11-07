"use server"
import { revalidatePath } from "next/cache"
import { createItem, resetItems } from "./db"

export async function resetItemsAction() {
  resetItems()
  revalidatePath("/")
}

export async function createItemAction(formData: FormData) {
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  await createItem({ name, description })
  revalidatePath("/")
}
