import { useState } from "react"

type ButtonProps = {
  children?: React.ReactNode
  onClick: () => void
  invert?: boolean
}

export default function Button(props: ButtonProps) {
  const [pressed, isPressed] = useState(false)

  return (
    <div
      className={`cursor-pointer shadow-lg inline-block border-b-4 ${
        props.invert ? "border-[#aaa] text-white" : "border-[#555] text-black"
      } rounded-xl font-black`}
      onMouseDown={() => isPressed(true)}
      onMouseUp={() => isPressed(false)}
      onMouseLeave={() => isPressed(false)}
      onClick={props.onClick}
    >
      <div
        className={`text-center inline-block border-2 ${
          props.invert ? "border-white" : "border-black"
        } rounded-xl p-5 relative ${pressed ? "top-[5px]" : "top-1"}`}
      >
        {props.children}
      </div>
    </div>
  )
}

type SubmitButtonProps = {
  children?: string
  invert?: boolean
  disabled?: boolean
}

export function SubmitButton(props: SubmitButtonProps) {
  const [pressed, isPressed] = useState(false)

  return (
    <div
      className={`shadow-lg inline-block border-b-4 ${
        props.invert ? "border-[#aaa] text-white" : "border-[#555] text-black"
      } rounded-xl font-black ${
        props.disabled ? "cursor-default opacity-[0.5]" : "cursor-pointer"
      }`}
      onMouseDown={() => isPressed(true)}
      onMouseUp={() => isPressed(false)}
      onMouseLeave={() => isPressed(false)}
    >
      <div
        className={`text-center inline-block border-2 ${
          props.invert ? "border-white" : "border-black"
        } rounded-xl relative ${pressed ? "top-[5px]" : "top-1"}`}
      >
        <input
          type="submit"
          value={props.children}
          className="p-5"
          disabled={props.disabled}
        />
      </div>
    </div>
  )
}
