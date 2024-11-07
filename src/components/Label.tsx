import { LabelHTMLAttributes } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export default function Label({ children, ...rest }: LabelProps) {
  return (
    <label className="block text-gray-700 dark:text-gray-100" {...rest}>
      {children}
    </label>
  );
}
