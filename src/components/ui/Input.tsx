import type { InputProps } from "../../types/Input";

export default function Input({
  className,
  placeholder,
  type,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      className={`p-2 border rounded ${className || ""}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
