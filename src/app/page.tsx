import Button from "@/components/Button"
import ItemForm from "@/components/ItemForm"
import ItemList from "@/components/ItemList"
import { createItemAction, resetItemsAction } from "@/lib/actions"
import { getItems } from "@/lib/db"

export default async function Home() {
  const items = await getItems()

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex justify-between items-center gap-8">
        <h1 className="text-3xl font-bold my-12">Ejercicio Next.js - CRUD</h1>
        <Button onClick={resetItemsAction}>Restablecer Items</Button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <ItemForm onSubmit={createItemAction} />
        </div>

        <div className="col-span-2">
          <ItemList items={items} />
        </div>
      </div>
    </main>
  )
}
