import { useEffect, useState } from "react";

export default function useDebounce<T>({
  value,
  delay,
}: {
  value: T;
  delay: number;
}) {
  const [debouncyValue, setDebouncyValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncyValue(value), delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncyValue;
}
