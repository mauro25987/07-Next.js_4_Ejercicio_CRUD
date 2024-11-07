import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="text-foreground bg-background w-full px-3 py-2 border dark:border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      type="text"
      {...props}
    />
  );
}
