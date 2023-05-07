import { CSSProperties } from "react"
import styles from "./NoteRain.module.css"

export default function NoteRain() {
  return (
    <div className="absolute top-0 left-0 w-[100%] h-[100%] overflow-hidden">
      {Array.from({ length: 20 }).map((v, i) => (
        <Note
          type={i % 2 === 0 ? 1 : 2}
          style={{
            animationDelay: `-${Math.random() * 10}s`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 8}s`
          }}
        />
      ))}
    </div>
  )
}

type NoteProps = {
  type: 1 | 2
  style?: CSSProperties
}

export function Note(props: NoteProps) {
  return (
    <div className={styles.note} style={props.style}>
      <img src={`note_${props.type}.png`} />
    </div>
  )
}
