import { useHover } from "@mantine/hooks";

export function caroHov() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>{hovered ? "I am hovered" : "Put mouse over me please"}</div>
  );
}
