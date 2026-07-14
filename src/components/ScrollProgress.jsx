import { useScrollProgress } from "../hooks/useAnimations"

export default function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div
      className="scroll-progress"
      style={{ width: "100%", transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  )
}
