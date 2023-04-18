import { useState } from "react"

type ButtonProps = {
  children?: React.ReactNode
  href: string
  invert?: boolean
}

export default function Button(props: ButtonProps) {
  const [pressed, isPressed] = useState(false)

  return (
    <a
      className={`inline-block border-b-4 ${
        props.invert ? "border-[#aaa] text-white" : "border-[#555] text-black"
      } rounded-xl font-black`}
      onMouseDown={() => isPressed(true)}
      onMouseUp={() => isPressed(false)}
      onMouseLeave={() => isPressed(false)}
      href={props.href}
    >
      <div
        className={`text-center inline-block border-2 ${
          props.invert ? "border-white" : "border-black"
        } rounded-xl p-5 relative ${pressed ? "top-[5px]" : "top-1"}`}
      >
        {props.children}
      </div>
    </a>
  )
}
