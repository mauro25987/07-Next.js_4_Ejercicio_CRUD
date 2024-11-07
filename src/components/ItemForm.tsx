import { Item } from "@/lib/types"
import Input from "./Input"
import Label from "./Label"

// TODO: Implementar type de este componente

export default function ItemForm({
  onSubmit,
  initialData,
}: {
  onSubmit: (formData: FormData) => void
  initialData?: Item
}) {
  return (
    <form action={onSubmit} className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg space-y-4">
      <h2 className="text-xl font-bold">{initialData ? "Editar Item" : "Agregar nuevo Item"}</h2>

      <div>
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" name="name" required />
      </div>

      <div>
        <Label htmlFor="description">Descripción</Label>
        <Input id="description" name="description" required />
      </div>

      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600">
        {initialData ? "Actualizar Item" : "Crear Item"}
      </button>

      {initialData && (
        <button className="w-full py-2 rounded-lg font-semibold bg-gray-100 hover:bg-gray-200 block text-center">
          Cancelar
        </button>
      )}
    </form>
  )
}
