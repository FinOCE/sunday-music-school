type ContainerProps = {
  children?: React.ReactNode
}

export default function Container(props: ContainerProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[1500px]">{props.children}</div>
    </div>
  )
}
