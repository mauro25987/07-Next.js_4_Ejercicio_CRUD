interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "danger";
}

const buttonVariants = {
  default: "bg-yellow-500 hover:bg-yellow-600",
  primary: "bg-green-500 hover:bg-green-600",
  secondary: "bg-blue-500 hover:bg-blue-600",
  danger: "bg-red-500 hover:bg-red-600",
};

export default function Button({
  children,
  variant = "default",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={
        "px-3 py-1 text-white text-sm font-semibold rounded " +
        buttonVariants[variant]
      }
      {...rest}
    >
      {children}
    </button>
  );
}
