type GradientTextProps = {
  children?: React.ReactNode
}

export default function GradientText(props: GradientTextProps) {
  return (
    <span className="bg-gradient-to-br from-blue-600 via-yellow-500 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
      {props.children}
    </span>
  )
}
