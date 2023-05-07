type DashSeparatorProps = {
  invert?: boolean
  center?: boolean
}

export default function DashSeparator(props: DashSeparatorProps) {
  return (
    <div className={`flex gap-10 ${props.center && "justify-center"}`}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-4 rounded-lg ${
            props.invert ? "bg-white" : "bg-black"
          }`}
        ></div>
      ))}
    </div>
  )
}
