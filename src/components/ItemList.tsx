import { Item } from "@/lib/types"
import Button from "./Button"

// TODO: Implementar type de este componente

export default function ItemList({ items }: { items: Item[] }) {
  return (
    <>
      <h2 className="text-2xl font-bold my-4">Items</h2>

      <table className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-200 uppercase text-sm">
            <th className="py-3 px-4 text-left">Nombre</th>
            <th className="py-3 px-4 text-left">Descripción</th>
            <th className="py-3 px-4">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 && (
            <tr>
              <td colSpan={3} className="py-3 px-4 text-center">
                No hay items.
              </td>
            </tr>
          )}

          {items.map(item => (
            <tr key={item.id} className="border-b dark:border-gray-700">
              <td className="py-3 px-4">{item.name}</td>
              <td className="py-3 px-4">{item.description}</td>
              <td className="py-3 px-4 flex justify-center space-x-2">
                <Button variant="secondary">Editar</Button>
                <Button variant="danger">Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
